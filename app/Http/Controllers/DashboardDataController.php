<?php

namespace App\Http\Controllers;

use App\Models\BoardingBookings;
use App\Models\BoardingPets;
use App\Models\Customer;
use App\Models\GroomingBooking;
use App\Models\Pets;
use Carbon\Carbon;
use Illuminate\Http\Request;

class DashboardDataController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
    }


    // Get grooming, booking,earning, customer data
    public function utils()
    {
        // Get Customer count
        $customer = count(Customer::get());
        // End

        // Get new Boardings
        $boarding = count(BoardingBookings::where("status","onprogress")->get());
        // End

        // Get new groomings
        $grooming = count(GroomingBooking::where("status","ongoing")->get());
        // End

        // Get Earing Info
        $earningBoarding = 0;
        $earningGrooming = 0;

        $now = Carbon::now();


        $boardingBookings = BoardingBookings::where("status","completed")->whereMonth("created_at",$now)->get();
        foreach($boardingBookings as $booking)
        {
            $earningBoarding+= $booking->price;
        }

        $groomginBookings = GroomingBooking::where("status","completed")->whereMonth("created_at",$now)->get();
        foreach($groomginBookings as $groomingBook)
        {
            $earningGrooming += $groomingBook->price;
        }
        // End

        // Pets Count
        $pets = count(Pets::get());
        // End

        return response()->json(array(
            "customerCount" => $customer,
            "boardingCount" => $boarding,
            "groomingCount" => $grooming,
            "earningCount" => number_format($earningGrooming + $earningBoarding),
            "petCount" => $pets
        ));
    }

    // Get Boarding Data
    public function boarding()
    {
        $now = Carbon::now();

        $bookings = BoardingBookings::where("status","onprogress")->whereDate("start_date",$now)->get();
        $arrivalPets = array();
        $leavePets = array();
        foreach($bookings as $booking)
        {
            $pets = BoardingPets::where("boarding_id",$booking->id)->get();
            foreach($pets as $pet)
            {
                array_push($arrivalPets,$pet->pet_id);
            }
        }

        $leavingBookings = BoardingBookings::where("status", "onprogress")->whereDate("ending_date", $now)->get();
        foreach($leavingBookings as $leaveBook)
        {
            $leavingPets = BoardingPets::where("boarding_id", $leaveBook->id)->get();
            foreach ($leavingPets as $pet) {
                array_push($leavePets, $pet->pet_id);
            }
        }

        $finalPets = Pets::select("id","name","photo","color","customer_id")->whereIn("id",$arrivalPets)->with("customer:id,first_name,last_name")->get();
        $finalLeavingPets = Pets::select("id", "name", "photo", "color", "customer_id")->whereIn("id", $leavePets)->with("customer:id,first_name,last_name")->get();

        return response()->json(array(
            "arrivalPets" => $finalPets,
            "leavingPets" => $finalLeavingPets,
        ));
    }

    public function earningChart(Request $req)
    {
        $months = array(1,2,3,4,5,6,7,8,9,10,11,12);
        // 
        if($req->year != "")
        {
            $year = $req->year;
        }
        else
        {
            $year = Carbon::now()->year;
        }

        // 
        $bookingArray  = array();
        foreach($months as $month)
        {
            $boardings = BoardingBookings::select("id","price")->where("status", "completed")->whereYear("created_at", $year)->whereMonth("created_at", $month)->get();
            $boardingPrice = 0;
            foreach($boardings as $boarding)
            {
                $boardingPrice += $boarding->price;
            }
            // Grooming
            $groomings = GroomingBooking::where("status","completed")->whereYear("created_at",$year)
            ->whereMonth("created_at", $month)->get();
            $groomingPrice = 0;
            foreach($groomings as $groom)
            {
                $groomingPrice += $groom->price;
            }

            array_push($bookingArray,$groomingPrice+$boardingPrice);
        }
        return response()->json(array(
            "name" => "USD",
            "data" => $bookingArray
        ));
    }

    private function getPriceOfBoarding($boardingId)
    {
        $price = 0;
        $boardingPets = BoardingPets::where("boarding_id",$boardingId)->get();
        foreach($boardingPets as $pet)
        {
            $price += $pet->rate_per_day*$pet->stay_day;
        }
        return $price;
    }
}
