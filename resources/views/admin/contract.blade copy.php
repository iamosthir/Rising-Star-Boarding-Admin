<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Contract - 15</title>
    {{-- <link rel="stylesheet" href="{{ asset("css/app.css") }}"> --}}
    <style>
        :root{
            --text-color: rgb(97, 97, 97);
        }
        body{
            background: white;
            font-family: 'Segoe UI'
        }
        .title{
            text-align: center;
            width: 100%;
            border-bottom: 1px solid rgba(104, 104, 104,0.5);
        }
        .title img{
            width: 150px;
            height: auto;
            -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
            filter: grayscale(100%);
        }
        .title p{
            margin-top: 10px;
            font-weight: 600;
            color: var(--text-color)
        }
        .section-title{
            text-align: center;
            font-weight: 800;
            font-size: 20px;
            margin-top: 5px;
        }
        .left {
            float: left;
            font-weight: 600;
            font-size: 14px;
            color: rgb(58, 58, 58);
            margin-right: 10px;
        }
        .right {
            overflow: hidden;
            border-bottom: 1px solid rgb(126, 126, 126);
            border-bottom-style: dashed;
            font-size: 14px;
            color: rgb(58, 58, 58);
            font-weight: 600;
        }
        .dog-card{
            padding: 15px 0;
            position: relative;
        }
        .dog-card:nth-child(even){
            background-color: #ececec;
        }
        .dog-card:nth-child(odd){
            background-color: white;
        }
        .desc{
            color: black;
            font-size: 12px;
            text-align: center;
            margin-top: 15px;
        }
    </style>
</head>
<body>
    <div class="container pb-4">
        <div class="row">
            <div class="col-md-12 mt-2">
                <div class="title">
                    <img src="{{ asset("images/logo.png") }}" alt="">
                    <p>Contact Information & Waiver</p>
                </div>
            </div>
            <div class="col-md-12 mt-2">


                <div class="row">
                    <div class="col-6">
                        <p class="text-muted"><strong>Contract/Booking ID : <span style="border-bottom: 1px solid rgb(126,126,126); border-bottom-style: dashed;">{{ $data->id }}</span></strong></p>
                    </div>
                    <div class="col-6 text-right">
                        <p class="text-muted"><strong>Booking Date : <span style="border-bottom: 1px solid rgb(126,126,126); border-bottom-style: dashed;">
                            {{ \Carbon\Carbon::parse($data->created_at)->format("Y-m-d - h:i A") }}</span></strong></p>
                    </div>
                </div>


                {{-- Customer Info --}}
                <h4 class="section-title">Customer Information</h4>
                <div class="row">
                    <div class="col-md-4 mt-3">
                        <div>
                            <div class="left">Name :</div>
                            <div class="right">{{ $customer->first_name. " ". $customer->last_name }}</div>
                        </div>
                    </div>
                    <div class="col-md-8 mt-3">
                        <div>
                            <div class="left">Address :</div>
                            <div class="right">{{ $customer->address1. " ".$customer->address2 }}</div>
                        </div>
                    </div>
                    <div class="col-md-4 mt-3">
                        <div>
                            <div class="left">Phone :</div>
                            <div class="right">{{ $customer->cell_phone }}</div>
                        </div>
                    </div>
                    <div class="col-md-4 mt-3">
                        <div>
                            <div class="left">Secondary Phone :</div>
                            <div class="right">{{ $customer->home_phone }}</div>
                        </div>
                    </div>
                    <div class="col-md-4 mt-3"></div>
                    <div class="col-md-6 mt-3">
                        <div>
                            <div class="left">Emergency Contact Person :</div>
                            <div class="right">{{ $customer->emergency_person??'N/A' }}</div>
                        </div>
                    </div>
                    <div class="col-md-4 mt-3">
                        <div>
                            <div class="left">Phone :</div>
                            <div class="right">{{ $customer->emergency_contact??'N/A' }}</div>
                        </div>
                    </div>
                    <div class="col-md-6 mt-3">
                        <div>
                            <div class="left">Veterinarian Name :</div>
                            <div class="right">{{ $customer->vet_name??"N/A" }}</div>
                        </div>
                    </div>
                    <div class="col-md-4 mt-3">
                        <div>
                            <div class="left">Phone :</div>
                            <div class="right">{{ $customer->vet_number??"N/A" }}</div>
                        </div>
                    </div>
                </div>
                {{-- End --}}

                {{-- DOG INFO --}}
                <h4 class="section-title mt-3">DOG(s)</h4>

                @foreach ($pets as $pet)
                    <div class="row dog-card">
                        <div class="col-md-2">
                            <div>
                                <div class="left">Name :</div>
                                <div class="right">{{ $pet->pet["name"] }}</div>
                            </div>
                        </div>

                        <div class="col-md-2">
                            <div>
                                <div class="left">Breed :</div>
                                <div class="right">{{ $pet->pet["breed"] }}</div>
                            </div>
                        </div>

                        <div class="col-md-2">
                            <div>
                                <div class="left">Color :</div>
                                <div class="right">{{ $pet->pet["color"] }}</div>
                            </div>
                        </div>

                        <div class="col-md-2">
                            <div>
                                <div class="left">Sex :</div>
                                <div class="right">{{ $pet->pet["gender"] }}</div>
                            </div>
                        </div>

                        <div class="col-md-2">
                            <div>
                                <div class="left">Current :</div>
                                <div class="right">
                                    @if ($pet->pet["rabies"])
                                        @if(\Carbon\Carbon::parse($pet->pet["rabies"])->greaterThan(\Carbon\Carbon::now()))
                                            Yes
                                        @else
                                            No
                                        @endif 
                                    @else
                                    N/A
                                    @endif
                                </div>
                            </div>
                        </div>

                        <div class="col-md-2">
                            <div>
                                <div class="left">Rabies :</div>
                                <div class="right">{{ $pet->pet["rabies"]?\Carbon\Carbon::parse($pet->pet["rabies"])->format("y-m-d"):"N/A" }}</div>
                            </div>
                        </div>

                        <div class="col-md-10 mt-2">
                            <div>
                                <div class="left">Medications :</div>
                                <div class="right">{{ $pet->pet["medic"] }}</div>
                            </div>
                        </div>
                        <div class="col-md-2 mt-2">
                            <div>
                                <div class="left">Kennel ID :</div>
                                <div class="right">{{ $pet->kennel_id }}</div>
                            </div>
                        </div>

                    </div>
                @endforeach

                {{-- End --}}

                {{-- Description --}}
                <p class="desc">{{ $desc }}</p>
                {{-- End --}}

                <div class="row justify-content-center">
                    <div class="col-md-4 mt-3">
                        <div>
                            <div class="left">Days Boarding :</div>
                            <div class="right">{{ $data->stay_day }} days</div>
                        </div>
                    </div>
                    <div class="col-md-4 mt-3">
                        <div>
                            <div class="left">Price Qutoed :</div>
                            <div class="right">{{ $data->price }} USD</div>
                        </div>
                    </div>
                    <div class="col-md-4 mt-3">
                        <div>
                            <div class="left">Price Paid :</div>
                            <div class="right">.</div>
                        </div>
                    </div>

                    <div class="col-md-4 mt-3">
                        <div>
                            <div class="left">Deposit Paid :</div>
                            <div class="right">.</div>
                        </div>
                    </div>
                    <div class="col-md-4 mt-3">
                        <div>
                            <div class="left">Balance :</div>
                            <div class="right">.</div>
                        </div>
                    </div>

                </div>

                {{-- Signature --}}
                <div class="row" style="margin-top: 150px;">
                    <div class="col-6">
                        <div>
                            <div class="left">Customer/Owner Signature :</div>
                            <div class="right">.</div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div>
                            <div class="left">Date :</div>
                            <div class="right">.</div>
                        </div>
                    </div>
                </div>

                <div class="row mt-5">
                    <div class="col-6">
                        <div>
                            <div class="left">Kennel Perssonel :</div>
                            <div class="right">.</div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div>
                            <div class="left">Date :</div>
                            <div class="right">.</div>
                        </div>
                    </div>
                </div>
                {{-- End --}}

            </div>
        </div>
    </div>
</body>
</html>