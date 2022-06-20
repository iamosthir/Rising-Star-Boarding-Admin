<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Pet Info</title>
        
        <style>
        body{
            background: white !important;
        }
        .img-dog{
            width: 120px;
            height: 120px;
            object-fit: contain;
            border: 1px solid rgba(0,0,0,0.1);
        }
        #print-area{
            width: 70%;
        }
        .print-msg{
            z-index: 999;
            background-color: rgb(163, 212, 163);
            width: 50%;
            margin: 0 auto;
            text-align: center;
            padding: 10px 25px;
            color: white;
            position: fixed;
            top: 0;
            left: 50%;
            transform: translate(-50%,0)
        }
        p{
            font-size: 14px;
            color: black !important;
            margin-bottom: 0rem !important;
        }
        .dog-name{
            font-size: 28px !important;
            font-weight: 800 !important;
        }
        .b-details{
            font-size: 18px;
            font-weight: 800;
        }
        .feeding{
            font-size: 18px;
            font-weight: 800;
            margin-bottom: 0;
        }
        #print{
            background: white;
        }
        .title{
            text-align: center;
        }
        .title h1{
            font-size: 20px !important;
            font-weight: bold !important;
            color: black;
        }
    </style>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    </head>
    <body>
        <div class="card-body" id="print">
            <div id="print-area">
                <div class="d-flex justify-content-start">
                    <div>
                        <h4 class="dog-name"><strong>{{ $petData->pet["name"] }}</strong></h4>
                        <p>Owner : <strong>{{ $boardingData->customer["first_name"]." ".$boardingData->customer["last_name"] }}</strong></p>
                        <p>Age : <strong>{{ $petData->pet["age"] }}</strong></p>
                        <p>Color : <strong>{{ $petData->pet["color"] }}</strong></p>
                    </div>
                    <div class="ml-3">
                        <h6><b>Booking Details :</b></h6>
                        <p>Booking ID : <strong>#{{ $boardingData->id }}</strong></p>
                        <p>Date Range : 
                        <strong>{{ \Carbon\Carbon::parse($boardingData->start_date)->format("d M Y") }} - {{ \Carbon\Carbon::parse($boardingData->ending_date)->format("d M Y") }}</strong></p>
                        <p>Assigned Kennel : <strong>{{ $petData->kennel_id }}</strong></p>
                        <p>Contact Owner : <strong>{{ $boardingData->customer["cell_phone"] }}</strong></p>
                    </div>
                </div>
                <h6 class="feeding"><u>Feeding Instruction</u></h6>
                <p>{{ $petData->pet["feeding"] }}</p>
                <h6 class="feeding"><u>Medication</u></h6>
                <p>{{ $petData->pet["medic"] }}</p>
            </div>
        </div>
        <script>
            window.addEventListener("load",function(){
                window.print();
            })
        </script>
    </body>
</html>
