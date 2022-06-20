<?php

namespace App\Console\Commands;

use App\Models\BoardingBookings;
use App\Models\GroomingBooking;
use App\Models\User;
use App\Notifications\AdminNotifyOnBooking;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Notification;

class AdminNotify extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'BookingNotify:admin';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This command will send all admins a notification via email that a new booking has arrived';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        
        // Notification::route("mail","mdeasinislam6@gmail.com")->notify(new AdminNotifyOnBooking());

        // Get admin list who can recieve notifications
        $admins = User::where("allow_emails","true")->get();
        // End

        // First get all new groomings without Notified
        $newGroomings = GroomingBooking::where("status","pending")->where("notified",null)->with("customer:id,first_name,last_name")->get();
        // End

        // Get New Boarding
        $newBoardings = BoardingBookings::where("status","pending")->where("notified",null)->with("customer:id,first_name,last_name")->get();
        // End

        // Now send emails for Groomings
        if(count($newGroomings) > 0)
        {
            foreach ($newGroomings as $grooming) {
                foreach ($admins as $admin) {
                    $data = array(
                        "id" => $grooming->id,
                        "customer" => $grooming->customer["first_name"] . " " . $grooming->customer["last_name"],
                        "type" => "Grooming",
                        "time" => Carbon::parse($grooming->appointment_date)->format("d M Y - h:i A"),
                        "adminName" => $admin->name
                    );

                    Notification::route("mail", $admin->email)->notify(new AdminNotifyOnBooking($data));
                }
                $grooming->notified = "true";
                $grooming->save();
            }
        }


        if(count($newBoardings) > 0)
        {
            foreach($newBoardings as $boarding)
            {
                foreach($admins as $admin)
                {
                    $data = array(
                        "id" => $boarding->id,
                        "customer" => $boarding->customer["first_name"] . " " . $boarding->customer["last_name"],
                        "type" => "Boarding",
                        "range" => "From ".Carbon::parse($boarding->start_date)->format("d M Y"). " To ". Carbon::parse($boarding->ending_date)->format("d M Y"),
                        "totalDay" => $boarding->stay_day. " Days",
                        "kennel" => $boarding->requested_kennel,
                        "adminName" => $admin->name
                    );
                    Notification::route("mail", $admin->email)->notify(new AdminNotifyOnBooking($data));
                }
                $boarding->notified = "true";
                $boarding->save();
            }
            
        }
        // End

        $this->info(count($newGroomings) . " Grooming Appointment alerted");
        $this->info(count($newBoardings) . " Boarding Reservation alerted");
        
    }
}
