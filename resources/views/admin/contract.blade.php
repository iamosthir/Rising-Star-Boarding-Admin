<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <style>
        :root{
            --text-color: rgb(97, 97, 97);
        }
        body{
            background: white;
            font-family: 'Segoe UI'
        }
        .container{
            width: 1145px;
            margin: 0 auto;
        }
    </style>
</head>
<body>
    <div class="container">
        <div style="text-align: center">
            <img src="{{ public_path("images/logo.png") }}" alt="" style="width: 100px; margin: 0 auto;">
            <p style="font-size: 12px; color: #292929; font-weight: 600;">Contact Information & Waiver</p>
            <hr>
        </div>

        <table style="width: 100%">
            <tr>
                <td style="width: 50%;">
                    <label style="color: #292929; font-size: 12px; font-weight: 600;">Contract / Booking ID :</label>
                    <span style="font-size: 12px; font-weight: 600; border-bottom: 1px dashed #292929;">{{ $data->id }}</span>
                </td>
                <td style="width:50%; text-align: right;">
                    <label style="color: #292929; font-size: 12px; font-weight: 600;">Date :</label>
                    <span style="font-size: 12px; font-weight: 600; border-bottom: 1px dashed #292929;">{{ \Carbon\Carbon::now()->format("Y-m-d") }}</span>
                </td>
            </tr>
            <tr>
                <td colspan="2" align="center">
                <h2>Customer Information</h2></td>
            </tr>
        </table>

        <table style="margin-top: 15px; width: 100%; border-spacing: 5px;">
            <tr>
                <td style="width: 25%;">
                    <label style="color: #292929; font-size: 12px; font-weight: bold;">Name :</label>
                    <span style="width: 100%; font-size: 12px; font-weight: 600; border-bottom: 1px dashed #575757;">{{ $customer->first_name. " ". $customer->last_name }}</span>
                </td>
                <td style="width: 25%;">
                    <label style="color: #292929; font-size: 12px; font-weight: bold;">Address :</label>
                    <span style="width: 100%; font-size: 12px; font-weight: 600; border-bottom: 1px dashed #575757;">{{ $customer->address1. " ".$customer->address2 }}</span>
                </td>
                <td style="width: 25%;">
                    <label style="color: #292929; font-size: 12px; font-weight: bold;">Phone :</label>
                    <span style="width: 100%; font-size: 12px; font-weight: 600; border-bottom: 1px dashed #575757;">{{ $customer->cell_phone }}</span>
                </td>
                <td style="width: 25%;">
                    <label style="color: #292929; font-size: 12px; font-weight: bold;">Secondary Phone :</label>
                    <span style="width: 100%; font-size: 12px; font-weight: 600; border-bottom: 1px dashed #575757;">{{ $customer->home_phone??"N/A" }}</span>
                </td>
            </tr>
            <tr>
                <td style="width: 25%;">
                    <label style="color: #292929; font-size: 12px; font-weight: bold;">City :</label>
                    <span style="width: 100%; font-size: 12px; font-weight: 600; border-bottom: 1px dashed #575757;">{{ $customer->city??"N/A" }}</span>
                </td>
                <td style="width: 25%;">
                    <label style="color: #292929; font-size: 12px; font-weight: bold;">State :</label>
                    <span style="width: 100%; font-size: 12px; font-weight: 600; border-bottom: 1px dashed #575757;">{{ $customer->state??"N/A" }}</span>
                </td>
                <td style="width: 25%;">
                    <label style="color: #292929; font-size: 12px; font-weight: bold;">Zip :</label>
                    <span style="width: 100%; font-size: 12px; font-weight: 600; border-bottom: 1px dashed #575757;">{{ $customer->zip??"N/A" }}</span>
                </td>
            </tr>
            <tr>
                <td style="width: 50%;" colspan="2">
                    <label style="color: #292929; font-size: 12px; font-weight: bold;">Emergency Contact Person :</label>
                    <span style="width: 100%; font-size: 12px; font-weight: 600; border-bottom: 1px dashed #575757;">{{ $customer->emergency_person??'N/A' }}</span>
                </td>
                <td style="width: 50%;" colspan="2">
                    <label style="color: #292929; font-size: 12px; font-weight: bold;">Emergency Person Phone :</label>
                    <span style="width: 100%; font-size: 12px; font-weight: 600; border-bottom: 1px dashed #575757;">{{ $customer->emergency_contact??'N/A' }}</span>
                </td>
            </tr>
            <tr>
                <td style="width: 50%;" colspan="2">
                    <label style="color: #292929; font-size: 12px; font-weight: bold;">Veterinarian Name :</label>
                    <span style="width: 100%; font-size: 12px; font-weight: 600; border-bottom: 1px dashed #575757;">{{ $customer->vet_name??"N/A" }}</span>
                </td>
                <td style="width: 50%;" colspan="2">
                    <label style="color: #292929; font-size: 12px; font-weight: bold;">Veterinarian Phone :</label>
                    <span style="width: 100%; font-size: 12px; font-weight: 600; border-bottom: 1px dashed #575757;">{{ $customer->vet_number??"N/A" }}</span>
                </td>
            </tr>
        </table>

        <table style="margin-top: 15px; width: 100%; border-spacing: 5px;">
            <tr>
                <td colspan="4" align="center">
                    <h2>DOG(s)</h2>
                </td>
            </tr>
            @foreach($pets as $pet)
                <tr>
                    <td>
                        <label style="color: #292929; font-size: 12px; font-weight: bold;">Name :</label>
                        <span style="width: 100%; font-size: 12px; font-weight: 600; border-bottom: 1px dashed #575757;">{{ $pet->pet["name"] }}</span>
                    </td>
                    <td>
                        <label style="color: #292929; font-size: 12px; font-weight: bold;">Breed :</label>
                        <span style="width: 100%; font-size: 12px; font-weight: 600; border-bottom: 1px dashed #575757;">{{ $pet->pet["breed"] }}</span>
                    </td>
                    <td>
                        <label style="color: #292929; font-size: 12px; font-weight: bold;">Color :</label>
                        <span style="width: 100%; font-size: 12px; font-weight: 600; border-bottom: 1px dashed #575757;">{{ $pet->pet["color"] }}</span>
                    </td>
                    <td>
                        <label style="color: #292929; font-size: 12px; font-weight: bold;">Sex :</label>
                        <span style="width: 100%; font-size: 12px; font-weight: 600; border-bottom: 1px dashed #575757;">{{ $pet->pet["gender"] }}</span>
                    </td>
                </tr>
                <tr>
                    <td colspan="1">
                        <label style="color: #292929; font-size: 12px; font-weight: bold;">Current :</label>
                        <span style="width: 100%; font-size: 12px; font-weight: 600; border-bottom: 1px dashed #575757;">
                            @if ($pet->pet["rabies"])
                                @if(\Carbon\Carbon::parse($pet->pet["rabies"])->greaterThan(\Carbon\Carbon::now()))
                                        Yes
                                    @else
                                        No
                                    @endif 
                                @else
                                N/A
                            @endif
                        </span>
                    </td>
                    <td colspan="1">
                        <label style="color: #292929; font-size: 12px; font-weight: bold;">Rabies :</label>
                        <span style="width: 100%; font-size: 12px; font-weight: 600; border-bottom: 1px dashed #575757;">
                            {{ $pet->pet["rabies"]?\Carbon\Carbon::parse($pet->pet["rabies"])->format("y-m-d"):"N/A" }}
                        </span>
                    </td>
                    <td colspan="2">
                        <label style="color: #292929; font-size: 12px; font-weight: bold;">Kennel :</label>
                        <span style="width: 100%; font-size: 12px; font-weight: 600; border-bottom: 1px dashed #575757;">
                            {{ $pet->kennel_id }}
                        </span>
                    </td>
                </tr>
                <tr>
                    <td style="width: 100%;" colspan="4">
                        <label style="color: #292929; font-size: 12px; font-weight: bold;">Medications :</label>
                        <span style="width: 100%; font-size: 12px; font-weight: 600; border-bottom: 1px dashed #575757;">
                            {{ $pet->pet["medic"]??"N/A" }}
                        </span>
                    </td>
                </tr>
            @endforeach
        </table>
        <p style="text-align: center; font-size: 10px;">{{ $desc }}</p>

        <table style="margin-top: 15px; width: 100%; border-spacing: 5px;">
            <tr>
                <td>
                    <label style="color: #292929; font-size: 12px; font-weight: bold;">Days Boarding :</label>
                    <span style="width: 100%; font-size: 12px; font-weight: 600; border-bottom: 1px dashed #575757;">{{  $data->stay_day  }} days</span>
                </td>
                <td>
                    <label style="color: #292929; font-size: 12px; font-weight: bold;">Price Qutoed :</label>
                    <span style="width: 100%; font-size: 12px; font-weight: 600; border-bottom: 1px dashed #575757;">{{ $data->price }} USD</span>
                </td>
                <td>
                    <label style="color: #292929; font-size: 12px; font-weight: bold;">Price Paid  :</label>
                    <span style="width: 100%; font-size: 12px; font-weight: 600;">___________</span>
                </td>
                <td>
                    <label style="color: #292929; font-size: 12px; font-weight: bold;">Deposit Paid :</label>
                    <span style="width: 100%; font-size: 12px; font-weight: 600;">___________</span>
                </td>
                <td>
                    <label style="color: #292929; font-size: 12px; font-weight: bold;">Balance :</label>
                    <span style="width: 100%; font-size: 12px; font-weight: 600;">___________</span>
                </td>
            </tr>
        </table>
        <table style="width: 100%" style="margin-top: 15px">
            <tr>
                <td style="width: 50%; border-spacing: 10px;">
                    <label style="color: #292929; font-size: 12px; font-weight: 600;">Customer/Owner Signature :</label>
                    <span style="width: 200px; font-size: 12px; font-weight: 600;">____________________________</span>
                </td>
                <td style="width:50%; text-align: right;">
                    <label style="color: #292929; font-size: 12px; font-weight: 600;">Kennel Perssonel :</label>
                    <span style="width: 200px; font-size: 12px; font-weight: 600;">____________________________</span>
                </td>
            </tr>
            <tr>
                <td style="width: 50%; border-spacing: 10px;">
                    <label style="color: #292929; font-size: 12px; font-weight: 600;">Date :</label>
                    <span style="width: 200px; font-size: 12px; font-weight: 600;">_______________</span>
                </td>
                <td style="width:50%; text-align: right;">
                    <label style="color: #292929; font-size: 12px; font-weight: 600;">Date :</label>
                    <span style="width: 200px; font-size: 12px; font-weight: 600;">_______________</span>
                </td>
            </tr>
        </table>
    </div>
</body>
</html>