<?php

namespace App\Http\Controllers;

use App\Models\BoardingBookings;
use App\Models\BoardingPets;
use App\Models\Customer;
use App\Models\CustomerAccount;
use App\Models\GroomingBooking;
use App\Models\Pets;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class CustomerController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
    }

    public function getdata(Request $req)
    {
        if($data = Customer::with("pet")->find($req->customer_id))
        {
            return ["status"=>"ok","data"=>$data];
        }
        else
        {
            return ["status" => "fail"];
        }
    }

    public function getlist(Request $req)
    {
        // Check how user want's pet data
        $petDataType = $req->petData;

        // if number return the number
        if($petDataType == "countNumber")
        {
            $data = Customer::orderBy("last_name","asc")->with("pet:id")->paginate(20);
        }
        // else return all data of the pet
        else
        {
            $data = Customer::orderBy("last_name","asc")->with("pet")->paginate(20);
        }
        $resp = array(
            "customer" => $data,
            "total" => count(Customer::get())
        );
        return response()->json($resp);

    }

    public function create(Request $req)
    {
        $this->validate($req,[
            "first_name" => "required",
        ],[
            "first_name.required" => "First name is required",
        ]);
        
        // Save customer information
        $customer = new Customer();
        $customer->first_name = $req->first_name;
        $customer->last_name = $req->last_name;
        $customer->address1 = $req->address1;
        $customer->address2 = $req->address2;
        $customer->city = $req->city;
        $customer->state = $req->state;
        $customer->zip = $req->zip;
        $customer->cell_phone = $req->cell_phone;
        $customer->home_phone =  $req->home_phone;
        $customer->email = $req->email;
        $customer->vet_name = $req->vet_name;
        $customer->vet_number = $req->vet_number;
        $customer->emergency_person = $req->emergency_person;
        $customer->emergency_contact = $req->emergency_contact;
        $customer->save();
        // end

        // Save Pet Information
        if($req->pet1["name"]!="" && $req->pet1["breed"] != "" && $req->pet1["color"] != "")
        {
            $pet1 = new Pets();
            $pet1->customer_id = $customer->id;
            $pet1->name = $req->pet1["name"];
            $pet1->breed = $req->pet1["breed"];
            $pet1->color = $req->pet1["color"];
            $pet1->age = $req->pet1["age"];
            $pet1->feeding = $req->pet1["feeding"];
            $pet1->medic = $req->pet1["medic"];
            $pet1->rabies = $req->pet1["rabies"];
            $pet1->gender = $req->pet1["gender"];
            if($req->hasFile("pet1_photo"))
            {
                $file = $req->file("pet1_photo");
                $name = "photo_".$req->pet1["name"]."_".$customer->id.".".$file->getClientOriginalExtension();
                $file->move(public_path("uploads/customer/$customer->id/"),$name);
                $pet1->photo = $name;
            }
            if ($req->hasFile("pet1_vac_record")) {
                $file = $req->file("pet1_vac_record");
                $name = "vaccine_record_" . $req->pet1["name"] . "_" . $customer->id . "." . $file->getClientOriginalExtension();
                $file->move(public_path("uploads/customer/$customer->id/"), $name);
                $pet1->vac_record = $name;
            }
            $pet1->save();
        }
        if ($req->pet2["name"] != "" && $req->pet2["breed"] != "" && $req->pet2["color"] != "") {
            $pet2 = new Pets();
            $pet2->customer_id = $customer->id;
            $pet2->name = $req->pet2["name"];
            $pet2->breed = $req->pet2["breed"];
            $pet2->color = $req->pet2["color"];
            $pet2->age = $req->pet2["age"];
            $pet2->feeding = $req->pet2["feeding"];
            $pet2->medic = $req->pet2["medic"];
            $pet2->rabies = $req->pet2["rabies"];
            $pet2->gender = $req->pet2["gender"];
            if ($req->hasFile("pet2_photo")) {
                $file = $req->file("pet2_photo");
                $name = "photo_" . $req->pet2["name"] . "_" . $customer->id . "." . $file->getClientOriginalExtension();
                $file->move(public_path("uploads/customer/$customer->id/"), $name);
                $pet2->photo = $name;
            }
            if ($req->hasFile("pet2_vac_record")) {
                $file = $req->file("3_vac_record");
                $name = "vaccine_record_" . $req->pet2["name"] . "_" . $customer->id . "." . $file->getClientOriginalExtension();
                $file->move(public_path("uploads/customer/$customer->id/"), $name);
                $pet2->vac_record = $name;
            }
            $pet2->save();
        }
        if ($req->pet3["name"] != "" && $req->pet3["breed"] != "" && $req->pet3["color"] != "") {
            $pet3 = new Pets();
            $pet3->customer_id = $customer->id;
            $pet3->name = $req->pet3["name"];
            $pet3->breed = $req->pet3["breed"];
            $pet3->color = $req->pet3["color"];
            $pet3->age = $req->pet3["age"];
            $pet3->feeding = $req->pet3["feeding"];
            $pet3->medic = $req->pet3["medic"];
            $pet3->rabies = $req->pet3["rabies"];
            $pet3->gender = $req->pet3["gender"];
            if ($req->hasFile("pet3_photo")) {
                $file = $req->file("pet3_photo");
                $name = "photo_" . $req->pet3["name"] . "_" . $customer->id . "." . $file->getClientOriginalExtension();
                $file->move(public_path("uploads/customer/$customer->id/"), $name);
                $pet3->photo = $name;
            }
            if ($req->hasFile("pet3_vac_record")) {
                $file = $req->file("pet3_vac_record");
                $name = "vaccine_record_" . $req->pet3["name"] . "_" . $customer->id . "." . $file->getClientOriginalExtension();
                $file->move(public_path("uploads/customer/$customer->id/"), $name);
                $pet3->vac_record = $name;
            }
            $pet3->save();
        }
        if ($req->pet4["name"] != "" && $req->pet4["breed"] != "" && $req->pet4["color"] != "") {
            $pet4 = new Pets();
            $pet4->customer_id = $customer->id;
            $pet4->name = $req->pet4["name"];
            $pet4->breed = $req->pet4["breed"];
            $pet4->color = $req->pet4["color"];
            $pet4->age = $req->pet4["age"];
            $pet4->feeding = $req->pet4["feeding"];
            $pet4->medic = $req->pet4["medic"];
            $pet4->rabies = $req->pet4["rabies"];
            $pet4->gender = $req->pet4["gender"];
            if ($req->hasFile("pet4_photo")) {
                $file = $req->file("pet4_photo");
                $name = "photo_" . $req->pet4["name"] . "_" . $customer->id . "." . $file->getClientOriginalExtension();
                $file->move(public_path("uploads/customer/$customer->id/"), $name);
                $pet4->photo = $name;
            }
            if ($req->hasFile("pet4_vac_record")) {
                $file = $req->file("pet4_vac_record");
                $name = "vaccine_record_" . $req->pet4["name"] . "_" . $customer->id . "." . $file->getClientOriginalExtension();
                $file->move(public_path("uploads/customer/$customer->id/"), $name);
                $pet4->vac_record = $name;
            }
            $pet4->save();
        }
        // end

        return ["status" => "ok","customer_id"=>$customer->id];

    }

    public function delete(Request $req)
    {
        $id = $req->customer_id;

        if($data = Customer::find($id))
        {
            Pets::where("customer_id",$id)->delete();
            if(is_dir(public_path("uploads/customer/$id")))
            {
                File::deleteDirectory(public_path("uploads/customer/$id"));
            }

            $boardingBookings = BoardingBookings::where("customer_id",$id)->get();
            foreach($boardingBookings as $boarding)
            {
                BoardingPets::where("boarding_id",$boarding->id)->delete();
                $boarding->delete();
            }
            GroomingBooking::where("customer_id",$id)->delete();

            $data->delete();
            return ["status" => "ok", "msg" =>  "The customer data was deleted"];
        }
        else
        {
            return ["status" => "fail"];
        }

        
    }

    public function search(Request $req)
    {
        $srch = $req->text;

        $data = Customer::latest()->with("pet")->where("email","like",$srch)->orWhereRaw("concat(first_name, ' ', last_name) like '%$srch%'")
        ->orWhere("cell_phone",$srch)->paginate(20);
        return response()->json($data);
    }

    public function update(Request $req)
    {
        $oldEmail = Customer::find($req->customer_id)->email??"";
        $this->validate($req, [
            "customer_id" => "required|numeric|exists:customers,id",
            "first_name" => "required",
            "address1" => "required",
            "city" => "required",
            "cell_phone" => "required|unique:customers,cell_phone,$req->customer_id,id",
            "state" => "required",
            "zip" => "required",
            "email" => "required|unique:customers,email,$req->customer_id,id|unique:customer_accounts,email,$oldEmail,email",
        ], [
            "first_name.required" => "First name is required",
            "address1.required" => "Adress 1 is required",
            "city.required" => "City is required",
            "cell_phone.required" => "Cell phone number is required",
            "state.required" => "State is required",
            "zip.required" => "Zip Code is required",
            "email.required" => "Email address is required",
        ]);
        // Save customer information
        $customer = Customer::find($req->customer_id);
        $customer->first_name = $req->first_name;
        $customer->last_name = $req->last_name;
        $customer->address1 = $req->address1;
        $customer->address2 = $req->address2;
        $customer->city = $req->city;
        $customer->state = $req->state;
        $customer->zip = $req->zip;
        $customer->cell_phone = $req->cell_phone;
        $customer->home_phone =  $req->home_phone;
        $customer->email = $req->email;
        $customer->vet_name = $req->vet_name;
        $customer->vet_number = $req->vet_number;
        $customer->emergency_person = $req->emergency_person;
        $customer->emergency_contact = $req->emergency_contact;


        // Update account aswell
        if($oldEmail!= "" && $accountData = CustomerAccount::where("email",$oldEmail)->first())
        {
            $accountData->first_name = $req->first_name;
            $accountData->last_name = $req->last_name;
            $accountData->email = $req->email;
            $accountData->save();
        }
        // End
        
        $customer->save();
        return ["status" => "ok","msg" => "Customer information was updated","oldMail" => $oldEmail];
        // end
    }
}
