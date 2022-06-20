<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBoardingBookingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('boarding_bookings', function (Blueprint $table) {
            $table->id();
            $table->integer("customer_id");
            $table->date("start_date");
            $table->integer("stay_day");
            $table->date("ending_date");
            $table->string("color")->default("#000000");
            $table->dateTime("checkIn")->nullable();
            $table->dateTime("checkOut")->nullable();
            $table->integer("price")->nullable();
            $table->string("status")->default("onprogress");
            $table->string("notified")->nullable();
            $table->string("requested_kennel");
            $table->text("note")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('boarding_bookings');
    }
}
