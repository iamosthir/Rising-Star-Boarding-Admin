<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGroomingBookingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('grooming_bookings', function (Blueprint $table) {
            $table->id();
            $table->integer("customer_id");
            $table->dateTime("appointment_date");
            $table->dateTime("end_time")->nullable();
            $table->mediumText("note")->nullable();
            $table->string("price")->nullable();
            $table->json("pets");
            $table->string("status")->default("ongoing");
            $table->string("notified")->nullable();
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
        Schema::dropIfExists('grooming_bookings');
    }
}
