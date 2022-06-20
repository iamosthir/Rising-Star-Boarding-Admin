<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\GroomingBooking;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Notification;

class GroomingBookingController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
    }
    

    public function delete(Request $req)
    {
        $this->validate($req,[
            "groomingId" => "required|exists:grooming_bookings,id"
        ]);

        $data = GroomingBooking::find($req->groomingId);

        $data->delete();

        return [
            "status" => "ok",
            "msg" => "Booking was deleted successfully"
        ];
    }

    // make new appointment
    public function new(Request $req)
    {
        $this->validate($req,[
            "pets" => "required",
            "date" => "required|date",
            "end" => "required",
            "price" => "nullable",
            "customer_id" => "exists:customers,id",
        ],[
            "pets.required" => "Please select some pets",
            "date.required" => "Please select the appointment date and time",
            "end.required" => "Choose ending time of this appointment",
            "price.required" => "Please set a price for this appointment"
        ]);
        $booking = new GroomingBooking();
        $booking->customer_id = $req->customer_id;
        $booking->appointment_date = $req->date;
        $booking->end_time = $req->end;
        $booking->price = $req->price;
        $booking->pets = json_decode($req->pets,true);
        $booking->note = $req->note;
        $booking->save();
        return ["status"=>"ok","msg"=>"Appointment is scheduled"];
    }

    // Update grooming
    public function updateData(Request $req)
    {
        $this->validate($req, [
            "groomingId" => "required|numeric",
            "pets" => "required",
            "date" => "required|date",
            "end" => "required",
            "price" => "required",
        ], [
            "pets.required" => "Please select some pets",
            "date.required" => "Please select the appointment date and time",
            "end.required" => "Choose ending time of this appointment",
            "price.required" => "Please set a price for this appointment"
        ]);
        $booking = GroomingBooking::find($req->groomingId);

        $endDate = Carbon::parse($req->date)->addMinutes($req->end);

        $booking->appointment_date = $req->date;
        $booking->end_time = $endDate;
        $booking->price = $req->price;
        $booking->pets = json_decode($req->pets, true);
        $booking->note = $req->note;
        $booking->save();
        return ["status" => "ok", "msg" => "Appointment scheduled is updated"];
    }

    // Get Data
    public function getData(Request $req)
    {
        if($req->groomingId && $data = GroomingBooking::find($req->groomingId))
        {
            $customer = Customer::with("pet")->find($data->customer_id);
            return [
                "status" => "ok",
                "grooming_data" => $data,
                "customer_data" => $customer,
            ];
        }
        else
        {
            return [
                "status" => "fail"
            ];
        }
    }

    // Get the list
    public function list(Request $req)
    {
        $type = $req->type;

        if($type == "canceled")
        {
            $data = GroomingBooking::where("status", "canceled")->with("customer:id,first_name,last_name")->orderBy("id", "desc")->paginate(10);
        }
        elseif($type == "completed")
        {
            $data = GroomingBooking::where("status", "completed")->with("customer:id,first_name,last_name")->orderBy("id", "desc")->paginate(10);
        }
        else
        {
            $data = GroomingBooking::where("status","ongoing")->with("customer:id,first_name,last_name")->orderBy("id","desc")->paginate(10);
        }

        return response()->json($data);
    }

    public function update(Request $req)
    {
        $this->validate($req,[
            "id" => "required|exists:grooming_bookings,id",
            "status" => "required|in:finish,cancel,ongoing"
        ]);
        $staus = $req->status;
        $data = GroomingBooking::find($req->id);
        if($staus == "finish")
        {
            $data->status = "completed";
            $data->save();
            return ["status" => "ok", "msg" => "Appointment is now finished"];
        }
        elseif($staus == "cancel")
        {
            $data->status = "canceled";
            $data->save();

            $mailData = array(
                "bookingData" => GroomingBooking::with("customer:id,first_name,last_name")->find($data->id)
            );
            Notification::route("mail", Customer::find($data->customer_id)->email)
            ->notify(new \App\Notifications\GroomingCancel($mailData));

            return ["status" => "ok", "msg" => "Appointment is canceled"];
        }
        elseif($staus == "ongoing")
        {
            $data->status = "ongoing";
            $data->save();

            $mailData = array(
                "bookingData" => GroomingBooking::with("customer:id,first_name,last_name")->find($data->id)
            );

            Notification::route("mail",Customer::find($data->customer_id)->email)
            ->notify(new \App\Notifications\GroomingConfirm($mailData));

            return ["status" => "ok", "msg" => "Appointment is approved now"];
        }
    }

    public function calendar(Request $req)
    {
        $calendarData = array();
        $date = Carbon::now();
        $datas = GroomingBooking::whereMonth("appointment_date",$date)
        ->where("status","ongoing")->with("customer:id,first_name,last_name")->get();

        // Create object model for full calendar
        foreach($datas as $data)
        {
            array_push($calendarData,array(
                "id" => $data->id,
                "title" => "Meeting with ". $data->customer['first_name'],
                "start" => $data->appointment_date,
                "end" => $data->end_time,
            ));
        }
        //

        return response()->json($calendarData);
    }

    public function pendingList(Request $req)
    {
        $data = GroomingBooking::where("status", "pending")->with("customer:id,first_name,last_name")->orderBy("id", "desc")->paginate(10);
        return response()->json($data);
    }
}
