<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BookingStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('booking_statuses')->truncate();
        // 
        DB::table('booking_statuses')->insert([
            "id" => 1,
            "boarding_status" => "true",
            "grooming_status" => "true",
        ]);
    }
}
