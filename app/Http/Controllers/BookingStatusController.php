<?php

namespace App\Http\Controllers;

use App\Models\BookingStatus;
use Illuminate\Http\Request;

class BookingStatusController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
    }

    public function getData(Request $req)
    {
        if($req->ajax())
        {
            if($data = BookingStatus::find(1))
            {
                return [
                    "status" => "ok",
                    "data" => $data
                ];
            }
            else
            {
                return [
                    "status" => "fail",
                    "msg" => "access_denied"
                ];    
            }
        }
        else
        {
            return [
                "status" => "fail",
                "msg" => "access_denied"
            ];
        }
    }

    public function updateBoarding(Request $req)
    {
        if($data = BookingStatus::find(1))
        {
            if ($req->status == true) 
            {
                $data->boarding_status = "true";
                $type = "service_online";
                $msg = "Boarding service is now online";
            }
            else
            {
                $data->boarding_status = "false";
                $type = "service_ofline";
                $msg = "Boarding service is now ofline";
            }
            $data->save();

            return [
                "status" => "ok",
                "msg" => $msg,
                "type" => $type,
            ];
        }
        else
        {
            return [
                "status" => "fail",
                "msg" => "Database not found"
            ];
        }
        
    }

    public function updateGrooming(Request $req)
    {
        if ($data = BookingStatus::find(1)) {
            if ($req->status == true) {
                $data->grooming_status = "true";
                $type = "service_online";
                $msg = "Grooming service is now online";
            } else {
                $data->grooming_status = "false";
                $type = "service_ofline";
                $msg = "Grooming service is now ofline";
            }
            $data->save();

            return [
                "status" => "ok",
                "msg" => $msg,
                "type" => $type,
            ];
        } else {
            return [
                "status" => "fail",
                "msg" => "Database not found"
            ];
        }
    }
}
