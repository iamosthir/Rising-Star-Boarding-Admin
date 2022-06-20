<?php

namespace App\Http\Controllers;

use App\Models\Privacy;
use Illuminate\Http\Request;

class PrivacyController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
    }

    public function index(Request $req)
    {
        $data = Privacy::find(1);
        if($data)
        {
            return [
                "status" => "ok",
                "content" => $data->content
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
        $data = Privacy::find(1);
        $data->content = $req->content;
        $data->save();
        return [
            "status" => "ok",
            "msg" => "Data updated successfully"
        ];
    }
}
