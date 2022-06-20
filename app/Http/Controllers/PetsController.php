<?php

namespace App\Http\Controllers;

use App\Models\BoardingBookings;
use App\Models\BoardingPets;
use App\Models\Pets;
use Illuminate\Http\Request;
use PDF;

class PetsController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
    }

    // 
    public function print(Request $req)
    {
       if($req->petId && $req->bookingId)
       {
           $boardingData = BoardingBookings::select("id","customer_id","start_date","ending_date")
           ->where("id",$req->bookingId)->with("customer:id,first_name,last_name,cell_phone")->first();
           $petData = BoardingPets::where("pet_id",$req->petId)
           ->with("pet")->first();
           

        return view("admin.print")->with(compact("boardingData", "petData"));

        // $pdf = PDF::loadView("admin.print", with(compact(
        //     "boardingData",
        //     "petData"
        // )));
        // return $pdf->stream('pet-'.".pdf");

       }
       else
       {
           return ["status"=>"fail"];
       }
    }

    public function list(Request $req)
    {
        $pets = Pets::orderBy("id","desc")->with("customer:id,first_name,last_name")->paginate(20);
        return response()->json($pets);
    }

    public function search(Request $req)
    {
        if($req->searchText != "")
        {
            $results = Pets::join("customers","pets.customer_id","=","customers.id")
            ->where("customers.email","like",$req->searchText)
            ->orWhere("customers.cell_phone",$req->searchText)
            ->orWhere("customers.id",$req->searchText)
            ->orWhere("pets.id",$req->searchText)
            ->orWhere("pets.name", "like", "%$req->searchText%")
            ->with("customer:id,first_name,last_name")->get();
            return response()->json($results);
        }
        else
        {
            return [];
        }
        
    }

    public function delete(Request $req)
    {
        $this->validate($req,[
            "petId" => "required|numeric|exists:pets,id",
        ]);
        $pet = Pets::find($req->petId);

        if($pet->photo != "")
        {
            if(file_exists(public_path("uploads/customer/$pet->customer_id/$pet->photo")))
            {
                unlink(public_path("uploads/customer/$pet->customer_id/$pet->photo"));
            }
        }
        if($pet->vac_record != "")
        {
            if (file_exists(public_path("uploads/customer/$pet->customer_id/$pet->vac_record"))) 
            {
                unlink(public_path("uploads/customer/$pet->customer_id/$pet->vac_record"));
            }
        }

        $pet->delete();
        return ["status"=>"ok","msg"=>"The pet was deleted"];
    }

    public function singleData(Request $req)
    {
        if($req->petId != "")
        {
            $data = Pets::with("customer:id,first_name,last_name")->find($req->petId);
            return ["status" => "ok","data"=>$data];
        }
        else
        {
            return ["status" => "fail"];
        }
    }

    public function update(Request $req)
    {
        $this->validate($req,[
            "petId" => "required|numeric|exists:pets,id",
            "name" => "required",
            "breed" => "required",
            "color" => "required",
            "age" => "required",
            "gender" => "required",
        ]);

        $pet = Pets::find($req->petId);
        $pet->name = $req->name;
        $pet->breed = $req->breed;
        $pet->color = $req->color;
        $pet->age = $req->age;
        $pet->rabies = $req->rabies;
        $pet->feeding = $req->feeding;
        $pet->medic = $req->medic;
        $pet->gender = $req->gender;

        if($req->hasFile("photo"))
        {
            if($pet->photo != "")
            {
                // Delete photo if exists
                if(file_exists(public_path("uploads/customer/$pet->customer_id/$pet->photo")))
                {
                    unlink(public_path("uploads/customer/$pet->customer_id/$pet->photo"));
                }
            }

            // upload new photo
            $petPhoto = $req->file("photo");
            $new_name = $pet->name."_"."photo_".rand().".".$petPhoto->getClientOriginalExtension();
            $petPhoto->move(public_path("uploads/customer/$pet->customer_id/"),$new_name);
            $pet->photo = $new_name;
        }

        if ($req->hasFile("vac")) {
            if ($pet->vac_record != "") {
                // Delete photo if exists
                if (file_exists(public_path("uploads/customer/$pet->customer_id/$pet->vac_record"))) {
                    unlink(public_path("uploads/customer/$pet->customer_id/$pet->vac_record"));
                }
            }

            // upload new photo
            $petPhoto = $req->file("vac");
            $new_name = $pet->name . "_" . "vac_" . rand() . "." . $petPhoto->getClientOriginalExtension();
            $petPhoto->move(public_path("uploads/customer/$pet->customer_id/"), $new_name);
            $pet->vac_record = $new_name;
        }

        $pet->save();
        return ["status" => "ok", "msg" => "Pet information was updated successuflly"];
    }

    public function create(Request $req)
    {
        $this->validate($req, [
            "customerId" => "required|numeric|exists:customers,id",
            "name" => "required",
            "breed" => "required",
            "color" => "required",
            "age" => "required",
        ]);
        
        $pet = new Pets();
        $pet->name = $req->name;
        $pet->customer_id = $req->customerId;
        $pet->breed = $req->breed;
        $pet->color =  $req->color;
        $pet->age = $req->age;
        $pet->rabies = $req->rabies;
        $pet->feeding = $req->feeding;
        $pet->medic = $req->medic;

        if ($req->hasFile("photo")) {

            // upload new photo
            $petPhoto = $req->file("photo");
            $new_name = $req->name . "_" . "photo_" . rand() . "." . $petPhoto->getClientOriginalExtension();
            $petPhoto->move(public_path("uploads/customer/$req->customerId/"), $new_name);
            $pet->photo = $new_name;
        }

        if ($req->hasFile("vac")) {

            // upload new photo
            $petPhoto = $req->file("vac");
            $new_name = $req->name . "_" . "vac_" . rand() . "." . $petPhoto->getClientOriginalExtension();
            $petPhoto->move(public_path("uploads/customer/$req->customerId/"), $new_name);
            $pet->vac_record = $new_name;
        }

        $pet->save();

        return ["status" => "ok", "data" => $pet];
    }
}
