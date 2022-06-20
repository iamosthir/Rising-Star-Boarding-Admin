<?php

namespace App\Http\Controllers;

use App\Models\SiteAbout;
use App\Models\SiteBanner;
use App\Models\SitePricing;
use Illuminate\Http\Request;

class SiteDataController extends Controller
{
    

    // Banner 
    public function getBannerData()
    {
        $data = SiteBanner::find(1);
        return response()->json($data);
    }

    public function updateBannerData(Request $req)
    {
        $this->validate($req,[
            "desc" => "nullable|max:500",
            "img" => "nullable|mimes:png,jpg,jpeg,JPG,JPEG,PNG"
        ],[
            "desc.max" => "Max 500 characters are allowed !",
            "img.mimes" => "Please upload a valid image file"
        ]);

        $data = SiteBanner::find(1);

        $data->slogan = $req->title;
        $data->description = $req->desc;

        if($req->hasFile("img"))
        {
            // Check if banner file already exists
            if(file_exists(public_path("uploads/site/banner/$data->banner_image")))
            {
                unlink(public_path("uploads/site/banner/$data->banner_image"));
            }

            // Uplaod new file
            $file = $req->file("img");
            $new_name = "banner_".time().".".$file->getClientOriginalExtension();
            $file->move(public_path("uploads/site/banner/"),$new_name);
            $data->banner_image = $new_name;
            
        }
        $data->save();
        return [
            "status" => "ok",
            "msg" => "Banner was updated successfully."
        ];
    }



    // About us
    public function getAboutUs()
    {
        $data = SiteAbout::find(1);
        return response()->json($data);
    }


    public function updateAboutUs(Request $req)
    {
        $content = $req->content;
        $data= SiteAbout::find(1);
        $data->content = $content;
        $data->save();
        return [
            "status" => "ok",
            "msg" => "Information updated successfully",
        ];
    }

    public function updateContract(Request $req)
    {
        $content = $req->desc;
        $data = SiteAbout::find(1);
        $data->content_contract = $content;
        $data->save();
        return [
            "status" => "ok",
            "msg" => "Information updated successfully",
        ];
    }

    // Pricings
    public function getPricingList()
    {
        $data = SitePricing::orderBy("sort_number","asc")->get();
        return response()->json($data);
    }

    public function addPricing(Request $req)
    {
        $this->validate($req,[
            "name" => "required",
            "desc" => "required|min:10",
            "bio" => "nullable|max:250",
        ],[
            "name.required" => "Please set a name for your package",
            "desc.required" => "Please write some description",
            "bio.max" => "Max character limit is 250"
        ]);

        $pricing = new SitePricing();
        $pricing->name = $req->name;
        $pricing->bio = $req->bio;
        $pricing->desc = $req->desc;
        if($req->sortNumber != "")
        {
            $pricing->sort_number = $req->sortNumber;
        }
        $pricing->save();
        return[
            "status" => "ok",
            "msg" => "Package was created"
        ];
    }
    public function deletePricing(Request $req)
    {
        $this->validate($req,[
            "pricingId" => "required|numeric|exists:site_pricings,id"
        ]);
        $data = SitePricing::find($req->pricingId);
        $data->delete();
        return [
            "status" => "ok",
            "msg" => "Package was deleted"
        ];
    }
    public function getPricing(Request $req)
    {
        if($req->pricingId && $data=  SitePricing::find($req->pricingId))
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

    public function updatePricing(Request $req)
    {
        $this->validate($req, [
            "pricingId" => "required|numeric|exists:site_pricings,id",
            "name" => "required",
            "desc" => "required|min:10",
            "bio" => "nullable|max:250",
        ], [
            "name.required" => "Please set a name for your package",
            "desc.required" => "Please write some description",
            "bio.max" => "Max character limit is 250"
        ]);

        $pricing = SitePricing::find($req->pricingId);
        $pricing->name = $req->name;
        $pricing->bio = $req->bio;
        $pricing->desc = $req->desc;
        if ($req->sortNumber != "") {
            $pricing->sort_number = $req->sortNumber;
        }
        $pricing->save();
        return [
            "status" => "ok",
            "msg" => "Package was updated"
        ];
    }
}
