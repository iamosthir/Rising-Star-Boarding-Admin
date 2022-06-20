<?php

namespace App\Http\Controllers;

use App\Mail\BoardingConfirm as MailBoardingConfirm;
use App\Models\BoardingBookings;
use App\Models\BoardingPets;
use App\Models\Customer;
use App\Models\Discoutn;
use App\Models\Kennel;
use App\Models\KennelBookingRecords;
use App\Models\Pets;
use App\Models\Price;
use App\Models\SiteAbout;
use App\Notifications\BoardingCancel;
use App\Notifications\BoardingConfirm;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Notification;
use PDF;

class BoardingBookingsController extends Controller
{
    private $colors = array(
        "#0048BA",
        "#B0BF1A",
        "#7CB9E8",
        "#B284BE",
        "#C46210",
        "#E52B50",
        "#AB274F",
        "#3B7A57",
        "#008000",
        "#A52A2A",
        "#007FFF",
        "#3D0C02",
        "#000000",
        "#D891EF",
        "#004225",
        "#CD7F32",
        "#88540B",
        "#1B4D3E",
    );
    public function __construct()
    {
        $this->middleware("auth");
    }

    public function delete(Request $req)
    {
        $this->validate($req,[
            "boardingId" => "required|exists:boarding_bookings,id"
        ]);

        $boarding = BoardingBookings::find($req->boardingId);
        BoardingPets::where("boarding_id",$req->boardingId)->delete();
        $boarding->delete();

        return [
            "status" => "ok",
            "msg" => "Boarding info was deleted"
        ];
    }


    public function data(Request $req)
    {
        if($req->bookingId && $data = BoardingBookings::with("customer:id,first_name,last_name,cell_phone")->find($req->bookingId))
        {
            $pets = BoardingPets::where("boarding_id", $data->id)->with("pet:id,name")->with("kennel:id,unique_id")->get();
            $price = 0;
            foreach ($pets as $pet) {
                $rate = $pet->rate_per_day * $data->stay_day;
                $price += $rate;
            }

            return [
                "status" => "ok",
                "main_data" => array(
                    "booking_data" => $data,
                    "pet_data" => $pets,
                ),
            ];
        }
        else
        {
            return[
                "status" => "fail"
            ];
        }
    }

    public function priceCalculate(Request $req)
    {
        $this->validate($req, [
            "start_date" => "required",
            "end_date" => "required",
            "dogs" => "required",
        ]);

        // Chekc if any dog exist in list
        $dogs = array();
        foreach($req->dogs as $dog)
        {
            if($dog["dog_id"] !="" && $dog["kennel"] != "")
            {
                array_push($dogs, $dog);
            }
        }
        // Chekc if any dog exist in list
        $dogs = array();
        $dogIds = array();
        foreach ($req->dogs as $dog) {
            if ($dog["dog_id"] != "" && $dog["kennel"] != "") {
                array_push($dogs, $dog);
                array_push($dogIds, $dog["dog_id"]);
            }
        }
        // Check if any dog exists in list
        $priceData = Price::find(1);
        $totalDays = Carbon::parse($req->start_date)
            ->diffInDays(Carbon::parse($req->end_date)) + 1;

        $dogRow = array();
        if (count($dogs) > 0) {
            $kennels = array();
            $price = 0;
            // Get selected kennel list
            foreach ($dogs as $i => $dog) {


                if (!in_array($dog["kennel"], $kennels)) {
                    $price += $priceData->price_per_kennel;
                    array_push($kennels, $dog["kennel"]);
                    $dogRowPrice = $priceData->price_per_kennel;
                } else {
                    $price += $priceData->price_for_additional_dog;
                    $dogRowPrice = $priceData->price_for_additional_dog;
                }

                array_push($dogRow, array(
                    "name" => Pets::find($dog["dog_id"])->name,
                    "kennel" => Kennel::find($dog["kennel"])->unique_id,
                    "stayDay" => $totalDays,
                    "pricePerDay" => $dogRowPrice,
                    "totalPrice" => $dogRowPrice * $totalDays
                ));
            }
            // 
            $orginalPrice =  $totalDays * $price;
            $mainPrice = $orginalPrice;

            // get discount pirce
            $discountPrice = 0;
            if ($discounts = Discoutn::where("booking_day", $totalDays)->first()) {
                $orginalPrice = $price * $discounts->discount_day;
                $discountPrice = $price * $totalDays;
            }
            // 

            return [
                "status" => "ok",
                "cuttedPrice" => $discountPrice != 0 ? $discountPrice - $orginalPrice : 0,
                "price" => $orginalPrice,
                "discountPrice" => $discountPrice,
                "summary" => $dogRow,
                "mainPrice" => $mainPrice
            ];
        } else {
            return [
                "status" => "fail"
            ];
        }



        
        
    }

    public function create(Request $req)
    {
        $this->validate($req,[
            "start_date" => "required",
            "end_date" => "required",
            "note" => "max:500|nullable",
            "requestedKennel" => "required"
        ],[
            "start_date.required" => "Please select starting date for booking",
            "end_date.required" => "Please Select ending date for booking",
            "price.required" => "Please Set a price",
        ]);

        $dogs = $req->dogs;
        
        $boarding = new BoardingBookings();
        $boarding->customer_id = $req->customer_id;
        $boarding->start_date = $req->start_date;
        $boarding->ending_date = $req->end_date;
        $boarding->stay_day = Carbon::parse($req->start_date)
        ->diffInDays(Carbon::parse($req->end_date)) + 1;
        $boarding->color = $this->colors[rand(0, count($this->colors) - 1)];
        $boarding->price = $req->price;
        $boarding->note = $req->note;
        if($req->draft == true)
        {
            $boarding->status = "draft";
        }
        else
        {
            $boarding->status = "onprogress";
        }
        $boarding->requested_kennel = $req->requestedKennel;
        $boarding->save();
        

        // Upload pet infos
        if(count($dogs) > 0)
        {
            foreach ($dogs as $dog) 
            {
                if($dog["dog_id"])
                {
                    BoardingPets::insert([
                        "pet_id" => $dog["dog_id"],
                        "boarding_id" => $boarding->id,
                        "kennel_id" => $dog["kennel"],
                        "created_at" => Carbon::now(),
                        "updated_at" => Carbon::now(),
                    ]);
                }
            }
        }
        //

        if($req->draft == false)
        {
            // Send notification after order done
            $notificationData = array(
                "booking_data" => BoardingBookings::with("customer:id,first_name,last_name")->find($boarding->id),
                "bill" => $req->price,
                "pets" => BoardingPets::where("boarding_id", $boarding->id)->with("pet:id,name")->get()
            );

            try {
                Mail::to(Customer::find($boarding->customer_id)->email)->send(new MailBoardingConfirm($notificationData));
            } catch (\Exception $e) {
                //throw $th;
            }
            return ["status" => "ok", "draft" => false , "msg" => "Booking is now approved"];
        }
        else
        {
            return ["status" => "ok", "draft" => true , "msg" => "Booking is saved as draft. You can edit and approve it later"];
        }

        
    }

    public function getEvents(Request $req)
    {
        $boardings = BoardingBookings::where("status","onprogress")->with("customer:id,first_name,last_name")->get();
        $evetns = array();
        foreach($boardings as $boarding)
        {
            $pets = BoardingPets::select("id","kennel_id","pet_id")->where("boarding_id",$boarding->id)->with("pet:id,name")->with("kennel")->get();
            $html = "";

            foreach($pets as $pet)
            {
                $html.= "<tr>
                            <td>".$pet->pet["name"]."</td>
                            <td><span class='badge badge-pill badge-primary'>".$pet->kennel_id."</span></td>
                        </tr>";
            }

            array_push($evetns,array(
                "title" => $boarding->customer["first_name"]." ".$boarding->customer["last_name"], 
                "start" => $boarding->start_date,
                "end" => Carbon::parse($boarding->ending_date)->addDays(1)->format("Y-m-d"),
                "color" => $boarding->color,
                "id" => $boarding->id,
                "html" => $html,
                "dateRange" => Carbon::parse($boarding->start_date)->format("d F")." to ". Carbon::parse($boarding->ending_date)->format("d F"),
            ));
        }
        return response()->json($evetns);
    }

    public function list(Request $req)
    {
        $type = $req->type??"onprogress";
        
        $data = BoardingBookings::where("status",$type)
        ->with("customer:id,first_name,last_name,cell_phone")
        ->orderBy("id","desc")->paginate(10);

        $array = array();
        foreach($data as $d)
        {
            $pets = BoardingPets::where("boarding_id",$d->id)->with("pet:id,name")->with("kennel:id,unique_id")->get();
            array_push($array,array(
                "booking_data" => $d,
                "pet_data" => $pets,
            ));
        }

        return response()->json(
            array(
                "paginate" => $data,
                "main_data" => $array,
            )
        );
    }

    public function changeStatus(Request $req)
    {
        $this->validate($req,[
            "bookingId" => "required|exists:boarding_bookings,id",
            "status" => "required|in:canceled,completed"
        ]);

        $data = BoardingBookings::find($req->bookingId);

        $data->status = $req->status;
        $data->save();
        if($data->status == "canceled")
        {
            $msg = "Booking was canceled";
            KennelBookingRecords::where("boarding_id",$req->bookingId)->delete();

            $notificationData = array(
                "bookingData" => BoardingBookings::with("customer:id,first_name,last_name")->find($data->id)
            );

            Notification::route("mail",Customer::find($data->customer_id)->email)
            ->notify(new BoardingCancel($notificationData));
        }
        elseif($data->status == "completed")
        {
            $msg = "Booking is completed";
            KennelBookingRecords::where("boarding_id", $req->bookingId)->delete();
        }
        
        return ["status"=>"ok","msg"=>$msg,"action" => $req->status];
    }

    public function checkIn(Request $req)
    {
        $this->validate($req,[
            "bookingId" => "required|numeric|exists:boarding_bookings,id",
            "date" => "required"
        ]);
        $data = BoardingBookings::find($req->bookingId);
        $data->checkIn = Carbon::parse($req->date);
        $data->save();
        return[
            "status" => "ok",
            "checkIn" => $data->checkIn
        ];
    }

    public function checkOut(Request $req)
    {
        $this->validate($req, [
            "bookingId" => "required|numeric|exists:boarding_bookings,id",
            "date" => "required"
        ]);

        $data = BoardingBookings::find($req->bookingId);
        $data->checkOut = $req->date;
        $data->save();
        return [
            "status" => "ok",
            "checkOut" => $data->checkOut
        ];
    }

    public function pendingList(Request $req)
    {
        $data = BoardingBookings::where("status", "pending")
        ->with("customer:id,first_name,last_name,cell_phone")
        ->orderBy("id", "desc")->paginate(10);

        $array = array();
        foreach ($data as $d) {
            $pets = BoardingPets::where("boarding_id", $d->id)->with("pet:id,name")->with("kennel:id,unique_id")->get();
            array_push($array, array(
                "booking_data" => $d,
                "pet_data" => $pets,
            ));
        }

        return response()->json(
            array(
                "paginate" => $data,
                "main_data" => $array,
            )
        );
    }

    public function getBookingDetails(object $req)
    {
        // Chekc if any dog exist in list
        $dogs = array();
        foreach ($req->dogs as $dog) {
            if ($dog["dog_id"] != "" && $dog["kennel"] != "") {
                array_push($dogs, $dog);
            }
        }
        // Chekc if any dog exist in list
        $dogs = array();
        $dogIds = array();
        foreach ($req->dogs as $dog) {
            if ($dog["dog_id"] != "" && $dog["kennel"] != "") {
                array_push($dogs, $dog);
                array_push($dogIds, $dog["dog_id"]);
            }
        }
        // Check if any dog exists in list
        $priceData = Price::find(1);
        $totalDays = Carbon::parse($req->start_date)
            ->diffInDays(Carbon::parse($req->end_date)) + 1;

        $dogRow = array();
        if (count($dogs) > 0) {
            $kennels = array();
            $price = 0;
            // Get selected kennel list
            foreach ($dogs as $i => $dog) {


                if (!in_array($dog["kennel"], $kennels)) {
                    $price += $priceData->price_per_kennel;
                    array_push($kennels, $dog["kennel"]);
                    $dogRowPrice = $priceData->price_per_kennel;
                } else {
                    $price += $priceData->price_for_additional_dog;
                    $dogRowPrice = $priceData->price_for_additional_dog;
                }

                array_push($dogRow, array(
                    "name" => Pets::find($dog["dog_id"])->name,
                    "kennel" => Kennel::find($dog["kennel"])->unique_id,
                    "stayDay" => $totalDays,
                    "pricePerDay" => $dogRowPrice,
                    "totalPrice" => $dogRowPrice * $totalDays
                ));
            }
            // 
            $orginalPrice =  $totalDays * $price;
            $mainPrice = $orginalPrice;

            // get discount pirce
            $discountPrice = 0;
            if ($discounts = Discoutn::where("booking_day", $totalDays)->first()) {
                $orginalPrice = $price * $discounts->discount_day;
                $discountPrice = $price * $totalDays;
            }
            // 

            return [
                "status" => "ok",
                "cuttedPrice" => $discountPrice != 0 ? $discountPrice - $orginalPrice : 0,
                "price" => $orginalPrice,
                "discountPrice" => $discountPrice,
                "summary" => $dogRow,
                "mainPrice" => $mainPrice
            ];
        }
    }

    public function printContract(Request $req)
    {
        if($req->boardingId && $data = BoardingBookings::find($req->boardingId))
        {
            $customer = Customer::find($data->customer_id);
            $pets = BoardingPets::where("boarding_id",$data->id)->with("pet")->with("kennel")->get();
            $desc = SiteAbout::find(1)->content_contract;


            $pdf = PDF::loadView('admin.contract', with(compact(
                "customer",
                "data",
                "pets",
                "desc"
            )));
            return $pdf->stream('contract-'.$req->boardingId.".pdf");
        }
        else
        {
            return [
                "status" => "failed"
            ];
        }
    }


    public function approve(Request $req)
    {


        foreach($req->assignedKennels as $kennel)
        {
            $boardingPet = BoardingPets::find($kennel["boardingPetId"]);
            $boardingPet->kennel_id = $kennel["kennel_id"];
            $boardingPet->save();
        }

        $boardingData = BoardingBookings::find($req->boardingId);
        $boardingData->price = $req->price;
        $boardingData->status = "onprogress";
        $boardingData->save();

        $notificationData = array(
            "booking_data" => BoardingBookings::with("customer:id,first_name,last_name")->find($boardingData->id),
            "bill" => $req->price,
            "pets" => BoardingPets::where("boarding_id",$boardingData->id)->with("pet:id,name")->get()
        );
        Notification::route("mail", Customer::find($boardingData->customer_id)->email)
        ->notify(new BoardingConfirm($notificationData));

        return [
            "status" => "ok",
            "msg" => "Booking was approved"
        ];

        // return $notificationData;
    }

    public function updateDateRange(Request $req)
    {
        $this->validate($req,[
            "boardingId" => "required|exists:boarding_bookings,id",
            "startDate" => "required",
            "endDate" => "required"
        ]);

        $data = BoardingBookings::find($req->boardingId);

        $data->start_date = $req->startDate;
        $data->ending_date = $req->endDate;
        $data->save();
        return [
            "status" => "ok",
            "msg" => "Date range was updated"
        ];

    }

    // update price
    public function updatePrice(Request $req)
    {
        $this->validate($req,[
            "price" => "required|numeric",
            "boardingId" => "required|exists:boarding_bookings,id"
        ]);

        $data = BoardingBookings::find($req->boardingId);
        $data->price = $req->price;
        $data->save();
        return [
            "status" => "ok",
            "msg" => "Price was updated successfully"
        ];
    }

    // Update kennel
    public function updateKennel(Request $req)
    {
        if($req->assignedKennels && count($req->assignedKennels)>0)
        {
            foreach ($req->assignedKennels as $kennel) {
                if($kennel["kennel_id"] != "" && $kennel["boardingPetId"] != ""){
                    $boardingPet = BoardingPets::find($kennel["boardingPetId"]);
                    $boardingPet->kennel_id = $kennel["kennel_id"];
                    $boardingPet->save();
                }
            }
        }
        return [
            "status" => "ok",
            "msg" => "Kennels were updated"
        ];
    }


    // Draft
    public function draftData(Request $req)
    {
        if($req->bookingId != "")
        {
            $bookingData = BoardingBookings::find($req->bookingId);
            $customer = Customer::with("pet")->find($bookingData->customer_id);
            return [
                "status" => "ok",
                "customer" => $customer,
                "boardingData" => $bookingData
            ];
        }
        else
        {
            return ["status" => "fail"];
        }
    }

    public function draftUpdate(Request $req)
    {
        $this->validate($req, [
            "start_date" => "required",
            "end_date" => "required",
            "price" => "required",
            "note" => "max:500|nullable",
            "requestedKennel" => "required",
            "bookingId" => "required|exists:boarding_bookings,id"
        ], [
            "start_date.required" => "Please select starting date for booking",
            "end_date.required" => "Please Select ending date for booking",
            "price.required" => "Please Set a price",
        ]);

        $dogs = $req->dogs;

        $boarding = BoardingBookings::find($req->bookingId);
        $boarding->start_date = $req->start_date;
        $boarding->ending_date = $req->end_date;
        $boarding->stay_day = Carbon::parse($req->start_date)
        ->diffInDays(Carbon::parse($req->end_date)) + 1;
        $boarding->color = $this->colors[rand(0, count($this->colors) - 1)];
        $boarding->price = $req->price;
        $boarding->note = $req->note;
        $boarding->status = "onprogress";
        $boarding->requested_kennel = $req->requestedKennel;
        $boarding->save();


        // Upload pet infos
        if (count($dogs) > 0) {
            foreach ($dogs as $dog) {
                if ($dog["dog_id"]) {
                    BoardingPets::insert([
                        "pet_id" => $dog["dog_id"],
                        "boarding_id" => $boarding->id,
                        "kennel_id" => $dog["kennel"],
                        "created_at" => Carbon::now(),
                        "updated_at" => Carbon::now(),
                    ]);
                }
            }
        }
        //
        // Send notification after order done
        $notificationData = array(
            "booking_data" => BoardingBookings::with("customer:id,first_name,last_name")->find($boarding->id),
            "bill" => $req->price,
            "pets" => BoardingPets::where("boarding_id", $boarding->id)->with("pet:id,name")->get()
        );

        try {
            Mail::to(Customer::find($boarding->customer_id)->email)->send(new MailBoardingConfirm($notificationData));
        } catch (\Exception $e) {
            //throw $e;
        }
        return ["status" => "ok", "msg" => "Booking is now approved"];
    }

}
