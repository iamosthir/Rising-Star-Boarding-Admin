<?php

namespace App\Http\Controllers;

use App\Models\TermCondition;
use Illuminate\Http\Request;

class TermConditionController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
    }

    public function index(Request $req)
    {
        $data = TermCondition::find(1);
        if($data)
        {
            return [
                "status" => "ok",
                "data" => $data,
            ];
        }
        else
        {
            return [
                "status" => "fail",
            ];
        }
    }

    public function update(Request $req)
    {
        $data = TermCondition::find(1);
        $data->content = $req->content;
        $data->save();
        return [
            "status" => "ok",
            "msg" => "Data updated successfully"
        ];
    }
}
