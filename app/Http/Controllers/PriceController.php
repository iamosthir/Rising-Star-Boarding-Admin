<?php

namespace App\Http\Controllers;

use App\Models\Price;
use Illuminate\Http\Request;

class PriceController extends Controller
{
    
    public function getData(Request $req)
    {
        $data = Price::find(1);
        return response()->json($data);
    }

    public function update(Request $req)
    {
        $this->validate($req,[
            "per_kennel" => "required|numeric",
            "additional_dog" => "required|numeric"
        ],[
            "per_kennel.required" => "Please set this field with a price",
            "additional_dog.required" => "Please set this field with a price",
        ]);

        $data = Price::find(1);
        $data->price_per_kennel = $req->per_kennel;
        $data->price_for_additional_dog = $req->additional_dog;
        $data->save();
        return[
            "status" => "ok",
            "msg" => "Pricing was updated",
        ];
    }
}
