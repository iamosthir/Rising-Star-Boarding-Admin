<?php

namespace App\Http\Controllers;

use App\Models\Discoutn;
use Illuminate\Http\Request;

class DiscoutnController extends Controller
{
    
    public function list()
    {
        $discounts = Discoutn::orderBy("booking_day","asc")->get();
        return response()->json($discounts);
    }

    public function add(Request $req)
    {
        $this->validate($req,[
            "booking_day" => "required|numeric|unique:discoutns,booking_day",
            "discount_day" => "required|numeric",
        ],[
            "booking_day.required" => "This field is required",
            "booking_day.numeric" => "Invalid data passed",
            "booking_day.unique" => "This entry already exist. Choose a different day",
            "discount_day.required" => "This field is required",
            "discount_day.numeric" => "Invalid data passed"
        ]);
        $data = new Discoutn();
        $data->booking_day = $req->booking_day;
        $data->discount_day = $req->discount_day;
        $data->save();
        return [
            "status" => "ok",
            "msg" => "Record was added",
            "data" => $data,
        ];
    }

    public function delete(Request $req)
    {
        $this->validate($req,[
            "id" => "required|numeric|exists:discoutns,id", 
        ]);

        $data = Discoutn::find($req->id);
        $data->delete();
        return [
            "status" => "ok",
            "msg" => "Data was deleted"
        ];
    }
}
