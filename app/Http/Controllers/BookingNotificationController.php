<?php

namespace App\Http\Controllers;

use App\Models\BoardingBookings;
use App\Models\BookingNotification;
use App\Models\GroomingBooking;
use Illuminate\Http\Request;

class BookingNotificationController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
    }

    public function get(Request $req)
    {
        $data = BookingNotification::orderBy("id","desc")->limit(15)->get();
        $unseen = BookingNotification::where("status","unseen")->get();

        return [
            "data" => $data,
            "unseenCount" => count($unseen)
        ];
    }


    public function getAll(Request $req)
    {
        $data = BookingNotification::orderBy("id","desc")->paginate(40);
        return response()->json($data);
    }

    public function clearAll(Request $req)
    {
        BookingNotification::truncate();
        return[
            "status" => "ok",
            "msg" => "Notifications cleared"
        ];
    }

    public function delete(Request $req)
    {
        $this->validate($req,[
            "id" => 'required|numeric|exists:booking_notifications,id',
        ]);

        $data = BookingNotification::find($req->id);
        $data->delete();
        return [
            "status" => "ok",
        ];
    }

    public function getPendingCount(Request $req)
    {
        $boarding = BoardingBookings::where("status","pending")->get();
        $grooming = GroomingBooking::where("status", "pending")->get();
        return [
            "boarding" => count($boarding),
            "grooming" => count($grooming),
        ];
    }

    public function makeSeen(Request $req)
    {
        $this->validate($req,[
            "id" => "required|numeric|exists:booking_notifications,id"
        ]);

        $n = BookingNotification::find($req->id);
        $n->status = "seen";
        $n->save();
        return [
            "status" => "ok"
        ];
    }
}
