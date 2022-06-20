<?php

namespace App\Http\Controllers;

use App\Models\ContactInformation;
use Illuminate\Http\Request;

class ContactInformationController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
    }

    public function update(Request $req)
    {
        $data = ContactInformation::find(1);
        $data->lat = $req->lat;
        $data->lng = $req->lng;
        $data->address = $req->address;
        $data->mobile = $req->phone;
        $data->email = $req->email;
        $data->fb = $req->fb;
        $data->insta = $req->insta;
        $data->twitter = $req->twitter;
        $data->linkedin = $req->linkedin;
        $data->yt = $req->youtube;
        $data->save();
        return [
            "status" => "ok",
            "msg" => "Contact information was updated"
        ];
    }

    public function index()
    {
        $data = ContactInformation::find(1);
        return response()->json($data);
    }
}
