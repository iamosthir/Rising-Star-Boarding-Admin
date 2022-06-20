<?php

namespace App\Http\Controllers;

use App\Models\Seo;
use Illuminate\Http\Request;

class SeoController extends Controller
{
    public function index(Request $req)
    {
        $data = Seo::find(1);
        return response()->json($data);
    }

    public function update(Request $req)
    {
        $this->validate($req, [
            "title" => "required",
            "desc" => "required",
            "srch_keyword" => "required"
        ]);

        $seo = Seo::find(1);
        $seo->author = $req->author;
        $seo->title = $req->title;
        $seo->desc = $req->desc;
        $seo->keywords = $req->srch_keyword;
        $seo->robot_link = $req->robot_link;
        $seo->robot_website = $req->robot_web;
        $seo->lang = $req->lang;
        $seo->save();
        return [
            "status" => "ok",
            "msg" => "Site is optimized for search engines"
        ];
    }
}
