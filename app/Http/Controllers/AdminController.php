<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
    }

    public function adminInfo()
    {
        return response()->json(auth()->user());
    }

    public function updateMyProfile(Request $req)
    {
        $userId = auth()->user()->id;
        $photo = null;
        $this->validate($req,[
            'name' => "required",
            "email" => "required|unique:users,email,$userId,id",
            "photo" => "mimes:png,jpg,jpeg,PNG,JPG,JPEG|nullable"
        ]);

        $user = User::find($userId);
        $user->name = $req->name;
        $user->email = $req->email;
        $user->allow_emails = $req->allowEmail == true ? "true" : "false";

        if($req->hasFile("photo"))
        {
            // Delete Old FIle
            if($user->photo != "")
            {
                if(file_exists(public_path("uploads/admin/$user->photo")))
                {
                    unlink(public_path("uploads/admin/$user->photo"));
                }
            }
            // 

            $file = $req->file("photo");
            $new_name = "profile_".rand().".".$file->getClientOriginalExtension();
            $file->move(public_path("uploads/admin/"),$new_name);
            $user->photo = $new_name;
            $photo = asset("uploads/admin/$new_name");
        }
        $user->save();

        return ["status" => "ok", "photo" => $photo];
    }

    public function changePass(Request $req)
    {
        $this->validate($req,[
            "oldPass" => ["required", function($attr,$val,$fail){
                if(!Hash::check($val, auth()->user()->password)){
                    $fail("Old password is not matching");
                }
            }],
            "newPass" => "required|min:8|confirmed"
        ],[
            "oldPass.required" => "Please insert old password"
        ]);
        $user = User::find(auth()->user()->id);
        $user->password = bcrypt($req->newPass);
        $user->save();
        return ["status" => "ok", "msg" => "Password changed successfully"];
    }

    public function list(Request $req)
    {
        if (auth()->user()->role == "super") {
            $loggedInUser = auth()->user()->id;
            $data = User::whereNotIn("id", [$loggedInUser])->get();
            return [
                "status" => "ok",
                "data" => $data,
            ];
        } else {
            return ["status" => "fail"];
        }
    }

    public function create(Request $req)
    {
        $this->validate($req, [
            "name" => "required",
            "email" => "required|unique:users,email",
            "password" => "required|min:8",
            "photo" => "nullable|mimes:png,jpg,jpeg,JPG,PNG,JPEG",
        ]);

        $user = new User();
        $user->name = $req->name;
        $user->email = $req->email;
        $user->password = bcrypt($req->password);
        if ($req->role == true) {
            $user->role = "super";
        }
        $user->allow_emails = $req->allowEmail==true?"true":"false";
        if ($req->hasFile("photo")) {
            $file = $req->file("photo");
            $new_name = "profile_" . rand() . "." . $file->getClientOriginalExtension();
            $file->move(public_path("uploads/admin/"), $new_name);
            $user->photo = $new_name;
        }
        $user->save();
        return [
            "status" => "ok"
        ];
    }
    public function delete(Request $req)
    {
        $this->validate($req, [
            "adminId" => "required|exists:users,id",
        ]);

        if (Auth::check() && Auth::user()->id != $req->adminId && Auth::user()->role == "super") {
            $data = User::find($req->adminId);
            if ($data->photo != "") {
                if (file_exists(public_path("uploads/admin/$data->photo"))) {
                    unlink(public_path("uploads/admin/$data->photo"));
                }
            }
            $data->delete();
            return [
                "status" => "ok",
                "msg" => "Admin was deleted",
            ];
        } else {
            return [
                "status" => "fail"
            ];
        }
    }

    public function getAdminData(Request $req)
    {
        if(Auth::user()->role == "super")
        {
            if ($req->adminId && $data = User::find($req->adminId)) 
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
        else
        {
            return [
                "status" => "denied"
            ];
        }
    }

    public function update(Request $req)
    {
        $this->validate($req, [
            "name" => "required",
            "email" => "required|unique:users,email,$req->adminId,id",
            "password" => "nullable|min:8",
        ]);

        $user = User::find($req->adminId);
        $user->name = $req->name;
        $user->email = $req->email;
        if($req->password != "")
        {
            $user->password = bcrypt($req->password);
        }

        if ($req->role == true) {
            $user->role = "super";
        }
        else
        {
            $user->role = null;
        }

        $user->allow_emails = $req->allowEmail == true ? "true" : "false";

        $user->save();
        return [
            "status" => "ok"
        ];
    }
}
