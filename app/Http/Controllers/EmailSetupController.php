<?php

namespace App\Http\Controllers;

use App\Models\EmailSetup;
use Illuminate\Http\Request;

class EmailSetupController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
    }

    public function create(Request $req)
    {
        $this->validate($req,[
            "host" => "required",
            "port" => "required",
            "driver" =>"required",
            "encryption" => "required",
            "user" => "required",
            "pass" => "required",
        ],[
            "user.required" => "User email account is required",
            "pass.required" => "User password is required",
        ]);

        $email = new EmailSetup();
        $email->host = $req->host;
        $email->port = $req->port;
        $email->driver = $req->driver;
        $email->encryption = $req->encryption;
        $email->user_name =$req->user;
        $email->password = $req->pass;
        $email->sender_email = $req->sender_email;
        $email->sender_name = $req->sender_name;
        if($req->defaultMail == 1)
        {
            EmailSetup::where("default_email",1)->update(["default_email"=>0]);
        }
        $email->default_email = $req->defaultMail;
        $email->save();
        return [
            "status" => "ok",
            "msg" => "New email configuration was added successfuly",
            "data" => $email
        ];

    }

    public function getList()
    {
        $data = EmailSetup::orderBy("user_name","asc")->get();
        return response()->json($data);
    }

    public function delete(Request $req)
    {
        if($req->id && $data=EmailSetup::find($req->id))
        {
            $data->delete();
            return [
                "status" => "ok",
                "msg" => "Email config was deleted"
            ];
        }
        else
        {
            return [
                "status" => "fail"
            ];
        }
    }

    public function setDefault(Request $req)
    {
        if($req->id && $data = EmailSetup::find($req->id))
        {
            EmailSetup::where("default_email",true)->update(["default_email" => false]);
            $data->default_email = true;
            $data->save();
        }
        return [
            "status" => "ok"
        ];
    }

    public function getSingleData(Request $req)
    {
        if($req->id && $data = EmailSetup::find($req->id))
        {
            return [
                "status" => "ok",
                "data" => $data
            ];
        }
        else
        {
            return [
                "status" => "fail"
            ];
        }
    }

    public function update(Request $req)
    {
        $this->validate($req, [
            "host" => "required",
            "port" => "required",
            "driver" => "required",
            "encryption" => "required",
            "user" => "required",
        ], [
            "user.required" => "User email account is required",
        ]);

        $email = EmailSetup::find($req->id);
        $email->host = $req->host;
        $email->port = $req->port;
        $email->driver = $req->driver;
        $email->encryption = $req->encryption;
        $email->user_name = $req->user;
        if($req->pass != "")
        {
            $email->password = $req->pass;
        }

        $email->sender_email = $req->sender_email;
        $email->sender_name = $req->sender_name;
        
        $email->save();
        return [
            "status" => "ok",
            "msg" => "Email configuration was updated successfuly",
            "data" => $email
        ];
    }
}
