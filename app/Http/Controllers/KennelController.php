<?php

namespace App\Http\Controllers;

use App\Models\BoardingBookings;
use App\Models\BoardingPets;
use App\Models\Kennel;
use App\Models\KennelBookingRecords;
use Carbon\Carbon;
use Illuminate\Http\Request;

class KennelController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
    }

    // Create new kennel
    public function create(Request $req)
    {
        $this->validate($req,[
            "title" => "required",
            "kennel_id" => "required|unique:kennels,unique_id",
            "size" => "required|in:small,medium,large"
        ],[
            "title.required" => "Please set an title for the kennel",
            "kennel_id.required" => "Please set an unique ID for your kennel",
            "kennel_id.unique" => "This kennel id already exists",
            "size.required" => "Please select the size of your kennel",
            "size.in" => "Invalid data passed" 
        ]);

        $data = new Kennel();
        $data->title = $req->title;
        $data->unique_id = $req->kennel_id;
        $data->size = $req->size;
        $data->save();
        return ["status" => "ok", "msg" => "New kennel space was created successuflly"];
    }



    public function availableList(Request $req)
    {
        $periods = Carbon::parse($req->startDate)->daysUntil($req->endDate)->toArray();

        $notAvailableKennels = array();
        foreach($periods as $per)
        {
            $kennels = KennelBookingRecords::whereDate("book_date",$per)->get();
            foreach($kennels as $kennel)
            {
                if(!in_array($kennel->kennel_id,$notAvailableKennels))
                {
                    array_push($notAvailableKennels, $kennel->kennel_id);
                }
            }
        }

        $data = Kennel::whereNotIn("id",$notAvailableKennels)->get();

        return response()->json($data);
    }




    public function list()
    {
        $data = Kennel::orderBy("size","desc")->get();
        return response()->json($data);
    }

    public function delete(Request $req)
    {
        $this->validate($req,[
            "kennelId" => "required|numeric|exists:kennels,id"
        ]);

        $kennel = Kennel::find($req->kennelId);

        $boarding_pets = BoardingPets::where("kennel_id",$req->kennelId)->get();

        foreach($boarding_pets as $bPet)
        {
            if($booking = BoardingBookings::find($bPet->boarding_id))
            {
                $booking->delete();
            }
            $bPet->delete();
        }
        $kennel->delete();
        return ["status" => "ok", "msg"=>"Kennel Was Deleted"];
    }

}
