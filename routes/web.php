<?php

use App\Mail\BoardingConfirm;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get("/mail",function(){

    // Send demo mail
    Mail::to("sajjadhossain075@gmail.com")->send(new BoardingConfirm(array("msg" => "Hi")));
    return "MAIL SENT";
});



Route::any("/", "HomeController@index")->where("any", '^(?!admin$).*$');


Route::get("/admin",function(){
    return redirect()->to("/admin/home");
});


Route::group(["prefix"=>"admin"],function(){

    Route::any("{any}", "HomeController@admin")->where("any", "^(?!api/.*$).*$");

    Route::group(["prefix" => "api"],function () {

        ####### Get booking statuses ############
        // Get statys
        Route::get("/get-all-booking-statuses","BookingStatusController@getData");

        // Update boarding
        Route::post("/update-boarding-status","BookingStatusController@updateBoarding");

        // Update grooming
        Route::post("/update-grooming-status", "BookingStatusController@updateGrooming");


        ########## End ######################

        ##### Customer ######
        // Get Customer List
        Route::get("/customer-list","CustomerController@getlist");

        // Create new Customer
        Route::post("/create-customer","CustomerController@create");

        // Get customer details
        Route::get("/get-customer-data","CustomerController@getdata");

        // Delete Customer
        Route::post("/delete-customer","CustomerController@delete");

        // Search Customer
        Route::get("/search-customer","CustomerController@search");
        
        // Update Customer
        Route::post("/update-customer-profile","CustomerController@update");
        ##### Customer End######

        // ---------------- //

        ##### Grooming Appointment #####
        // New Appointment
        Route::post("/make-appointment-grooming","GroomingBookingController@new");
        Route::post("/update-appointment-grooming","GroomingBookingController@updateData");

        // Get grooming data
        Route::get("/get-grooming-data","GroomingBookingController@getData");

        // Get lists of appointment
        Route::get("/get-all-grooming-booking","GroomingBookingController@list");

        // Change Status
        Route::post("/change-grooming-status","GroomingBookingController@update");
        
        // Calendar API
        Route::get("/grooming-list-calendar-data","GroomingBookingController@calendar");

        // Delete
        Route::post("/delete-grooming-booking","GroomingBookingController@delete");
        ##### Grooming Appointment End #####


        ##### Kennel ##########
        // Create kennel
        Route::post("/create-kennel","KennelController@create");
        Route::get("/get-available-kennels","KennelController@availableList");
        Route::get("/list-all-kennels","KennelController@list");
        Route::post("/delete-kennel","KennelController@delete");
        ####### END ###########


        ######## Boarding ##########
        // Book new boarding
        Route::post("/submit-boarding-order","BoardingBookingsController@create");
        // Get Calendar Events
        Route::get("/get-boarding-events","BoardingBookingsController@getEvents");
        // Get List 
        Route::get("/get-all-boarding-booking","BoardingBookingsController@list");
        // Approve Boarding
        Route::post("/approve-boarding","BoardingBookingsController@approve");
        // Change Status
        Route::post("/change-boarding-status","BoardingBookingsController@changeStatus");
        // Get single data
        Route::get("/get-boarding-data","BoardingBookingsController@data");
        // Update Date Range
        Route::post('/update-boarding-date-range',"BoardingBookingsController@updateDateRange");
        // Check In
        Route::post('/boarding-check-in',"BoardingBookingsController@checkIn");
        // Check out
        Route::post('/boarding-check-out', "BoardingBookingsController@checkOut");
        // Calculate Price
        Route::post("/calculate-price","BoardingBookingsController@priceCalculate");
        // Print Boarding Contract
        Route::get("/print-boarding-contract", "BoardingBookingsController@printContract");
        // Update price
        Route::post("/update-boarding-price","BoardingBookingsController@updatePrice");
        // Update kennel
        Route::post("/update-kennel","BoardingBookingsController@updateKennel");
        // Delete booking
        Route::post("/delete-boardng-booking","BoardingBookingsController@delete");

        ######## End ###############

        ######## PET ##########
        // Print pet info
        Route::get("/print-pet-info","PetsController@print");
        // Get pet list
        Route::get("/get-pet-list","PetsController@list");
        // Search Pets
        Route::get("/search-pet-from-list","PetsController@search");
        // Delete Pet
        Route::post("/delete-pet","PetsController@delete");
        // Get Single Pet Data
        Route::get("/get-single-pet-data","PetsController@singleData");
        // Update pet
        Route::post("/update-pet","PetsController@update");
        // Create Pet
        Route::post("/create-pet","PetsController@create");
        ######## End PET ######

        ########## Pricing ###############
        // Get pricing
        Route::get("/get-pricing","PriceController@getData");
        // Update price
        Route::post("/update-price","PriceController@update");
        // Discount Add
        Route::post("/add-discount-price", "DiscoutnController@add");
        // Discount List
        Route::get("/get-discount-list","DiscoutnController@list");
        // Delete discount
        Route::post('/delete-discount' ,"DiscoutnController@delete");
        ########## END ###################


        ######## DAHBOARD DATA ############
        // Get new bookings, grooming,customer, earning information
        Route::get("/get-utils-info","DashboardDataController@utils");
        Route::get("/get-utils-boarding","DashboardDataController@boarding");
        Route::get("/get-earning-chart-info","DashboardDataController@earningChart");
        ######### END #####################

        ######## Admin #########
        Route::get("/get-admin-info","AdminController@adminInfo");
        Route::get("/get-admin-data","AdminController@getAdminData");
        Route::post("/update-my-profile","AdminController@updateMyProfile");
        Route::post("/change-my-password","AdminController@changePass");
        Route::post("/create-admin","AdminController@create");
        Route::post("/update-admin", "AdminController@update");
        Route::post("/delete-admin", "AdminController@delete");
        ######### END ##########



        ############ SITE OPTIONS ################
        // get banner data
        Route::get("/site-banner-data","SiteDataController@getBannerData");
        // Update banner data
        Route::post("/update-banner-data","SiteDataController@updateBannerData");

        // Get About us
        Route::get("/get-about-us","SiteDataController@getAboutUs");
        // Update Contract Form Data
        Route::post('/update-contract',"SiteDataController@updateContract");
        // Update about us
        Route::post('/update-about-us',"SiteDataController@updateAboutUs");

        // Get pricings lists
        Route::get("/get-pricings","SiteDataController@getPricingList");
        // Create new pricing
        Route::post("/create-pricing","SiteDataController@addPricing");
        // Delete package
        Route::post("/delete-pricing","SiteDataController@deletePricing");
        // Get pricing data
        Route::get('/get-pricing-data',"SiteDataController@getPricing");
        // Update Pricing
        Route::post("/update-pricing","SiteDataController@updatePricing");
        // End

        // Get Terms Data
        Route::get("/get-terms-data","TermConditionController@index");
        // Update terms
        Route::post("/update-terms","TermConditionController@update");

        // Get Privacy Data
        Route::get("/get-privacy-data", "PrivacyController@index");
        // Update Privacy
        Route::post("/update-privacy", "PrivacyController@update");
        ########### END ##########################

        ############## Notification ##################
        // Get notification
        Route::get("/get-all-notifications","BookingNotificationController@get");
        // Get All notification
        Route::get("/get-all-notifications-list", "BookingNotificationController@getAll");
        // Delet notification
        Route::post("/delete-notification","BookingNotificationController@delete");
        // Clear All
        Route::post('/clear-all-notification',"BookingNotificationController@clearAll");
        // Seen notification
        Route::post("/seen-notification","BookingNotificationController@makeSeen");



        // Get All Pending counts
        Route::get('/get-pending-counts',"BookingNotificationController@getPendingCount");
        // Get Boarding Booking list
        Route::get("/get-pending-bookings-boarding","BoardingBookingsController@pendingList");
        // Get grooming pending list
        Route::get("/get-pending-grooming-booking","GroomingBookingController@pendingList");
        // End
        ############## END ###########################

        ####### ADMIN LIST #############
        // Get Admin List 
        Route::get('/get-admin-list',"AdminController@list");
        ######## END ###################


        ########### Contact Information ##############
        // Get Contact Data
        Route::get("/get-contact-data","ContactInformationController@index");
        // 

        // Update contact data
        Route::post("/update-contact-data","ContactInformationController@update");
        // End
        ########### END ##############################

        ########## SEO #############
        // Get SEO
        Route::get('/get-seo', "SeoController@index");
        // 
        // Update SEO
        Route::post("/update-seo", "SeoController@update");
        ########## END #############



        ################ EMAIL SETUP ###################

        // Create mail configure
        Route::post("/create-email-setup","EmailSetupController@create");

        // Get Emails
        Route::get('/get-emails',"EmailSetupController@getList");

        // Delete Email
        Route::post('/delete-email',"EmailSetupController@delete");

        // Set Default Email
        Route::post("/set-default-email", "EmailSetupController@setDefault");

        // Get email Data
        Route::get('/get-email-data', "EmailSetupController@getSingleData");

        // Update
        Route::post("/update-email", "EmailSetupController@update");
        // End
        ################## END #########################




        ############## Draft Booking ###################
        // Get booking info
        Route::get("/draft-booking-details","BoardingBookingsController@draftData");
        
        Route::post("/submit-draft-boarding-order","BoardingBookingsController@draftUpdate");
        ############## END #############################



    });

});

Route::group(["prefix" => "users"],function(){
    // Pet operations
    Route::post("/upload-pet-file", "FrontEndController@uploadPetFiles");
    Route::post("/delete-pet-file","FrontEndController@deletePetPhoto");
    Route::post("/update-pet-file","FrontEndController@updatePetPhoto");
    // End

});

Auth::routes(["register"=>false]);