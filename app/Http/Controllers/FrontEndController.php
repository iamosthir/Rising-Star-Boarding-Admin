<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Pets;
use App\Models\User;
use App\Notifications\AdminNotifyOnBooking;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Notification;

class FrontEndController extends Controller
{
    // Pets
    public function uploadPetFiles(Request $req)
    {
        $photoName = null;
        $vaccineName = null;

        if ($req->hasFile("photo")) {

            // upload new photo
            $petPhoto = $req->file("photo");
            $new_name = $req->petName . "_" . "photo_" . rand() . "." . $petPhoto->getClientOriginalExtension();
            $petPhoto->move(public_path("uploads/customer/$req->customerId/"), $new_name);
            $photoName = $new_name;
        }

        if ($req->hasFile("vaccine")) {

            // upload new photo
            $petPhoto = $req->file("vaccine");
            $new_name = $req->petName . "_" . "vac_" . rand() . "." . $petPhoto->getClientOriginalExtension();
            $petPhoto->move(public_path("uploads/customer/$req->customerId/"), $new_name);
            $vaccineName = $new_name;
        }

        return [
            "photo" => $photoName,
            "vaccine" => $vaccineName,
        ];
    }
    public function deletePetPhoto(Request $req)
    {
        if($req->petPhoto != "")
        {
            if(file_exists(public_path("uploads/customer/$req->customerId/$req->petPhoto")))
            {
                unlink(public_path("uploads/customer/$req->customerId/$req->petPhoto"));
            }
        }

        if ($req->vacRecord != "") {
            if (file_exists(public_path("uploads/customer/$req->customerId/$req->vacRecord"))) {
                unlink(public_path("uploads/customer/$req->customerId/$req->vacRecord"));
            }
        }
    }
    public function updatePetPhoto(Request $req)
    {
        $photoName = null;
        $vaccineName = null;

        if ($req->hasFile("photo")) {

            if (file_exists(public_path("uploads/customer/$req->customerId/$req->oldPhoto"))) {
                unlink(public_path("uploads/customer/$req->customerId/$req->oldPhoto"));
            }

            // upload new photo
            $petPhoto = $req->file("photo");
            $new_name = $req->petName . "_" . "photo_" . rand() . "." . $petPhoto->getClientOriginalExtension();
            $petPhoto->move(public_path("uploads/customer/$req->customerId/"), $new_name);
            $photoName = $new_name;
        }

        if ($req->hasFile("vaccine")) {

            if (file_exists(public_path("uploads/customer/$req->customerId/$req->oldVacRecord"))) {
                unlink(public_path("uploads/customer/$req->customerId/$req->oldVacRecord"));
            }

            // upload new photo
            $petPhoto = $req->file("vaccine");
            $new_name = $req->petName . "_" . "vac_" . rand() . "." . $petPhoto->getClientOriginalExtension();
            $petPhoto->move(public_path("uploads/customer/$req->customerId/"), $new_name);
            $vaccineName = $new_name;
        }

        return [
            "newPhoto" => $photoName,
            "newVac" => $vaccineName,
        ];
    }
    // End

}
