<!-- THIS EMAIL WAS BUILT AND TESTED WITH LITMUS http://litmus.com -->
<!-- IT WAS RELEASED UNDER THE MIT LICENSE https://opensource.org/licenses/MIT -->
@php
    $bookingData = $data['booking_data'];
    $dogs = $data["pets"];
    $bill = $data["bill"];
@endphp
<!DOCTYPE html>
<html>

<head>
    <title>Rising Star Booking Confirmation</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <style type="text/css">
        /* CLIENT-SPECIFIC STYLES */
        body,
        table,
        td,
        a {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
        }

        table,
        td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }

        img {
            -ms-interpolation-mode: bicubic;
        }

        /* RESET STYLES */
        img {
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
        }

        table {
            border-collapse: collapse !important;
        }

        body {
            height: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
        }

        /* iOS BLUE LINKS */
        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }

        /* MEDIA QUERIES */
        @media screen and (max-width: 480px) {
            .mobile-hide {
                display: none !important;
            }

            .mobile-center {
                text-align: center !important;
            }

            .align-center {
                max-width: initial !important;
            }

            h1 {
                display: inline-block;
                margin-right: auto !important;
                margin-left: auto !important;
            }
        }

        @media screen and (min-width: 480px) {
            .mw-50 {
                max-width: 50%;
            }
        }

        /* ANDROID CENTER FIX */
        div[style*="margin: 16px 0;"] {
            margin: 0 !important;
        }
    </style>
</head>

<body style="margin: 0 !important; padding: 0 !important; background-color: #eeeeee;" bgcolor="#eeeeee">

    <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
            <td align="center" style="background-color: #eeeeee;" bgcolor="#eeeeee">
                <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%;">
                    <tr>
                        <td align="center" height="6"
                            style="background-image: linear-gradient(to right, #e40f19, #c93561); background-color: #ec0000;"
                            bgcolor="#b91bAb"></td>
                    </tr>
                </table>
                <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:800px;">
                    <tr>
                        <td valign="top"
                            style="background-color: #ffffff; font-size:0; padding: 35px 35px 0;" bgcolor="#ffffff">
                            <div class="align-center"
                                style="display:inline-block; max-width:50%; min-width:100px; vertical-align:top; width:100%;">
                                <table class="align-center" align="left" border="0" cellpadding="0" cellspacing="0"
                                    width="100%" style="max-width:800px;">
                                    <tr>
                                        <td align="left" height="48" valign="center"
                                            style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size:48px; font-weight: 800; line-height: 48px;"
                                            class="mobile-center">
                                            <h1
                                                style="font-size: 0; line-height: 0; font-weight: 600;  margin: 0; color: #ffffff;">
                                                <img src="{{ asset('images/logo.png') }}"
                                                    width="200" height="27" style="display: block; border: 0px;"
                                                    alt="HealthPlanG" /><span>Rising Star Boarding</span></h1>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="padding: 0 15px 20px 15px; background-color: #ffffff;"
                            bgcolor="#ffffff">
                            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"
                                style="max-width:600px;">
                                <tr>
                                    <td align="center"
                                        style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding-top: 25px;">
                                        <img src="{{ asset('images/icon-check-mark.png') }}"
                                            width="125" height="120" style="display: block; border: 0px;" /><br>
                                        <h2
                                            style="font-size: 30px; font-weight: 800; line-height: 50px; color: #333333; margin: 0;">
                                            Your Booking Was Successful. Thank You For Your Order!
                                        </h2>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center"
                                        style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding-top: 10px;">
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left" style="padding-top: 20px;">
                                        <table cellspacing="0" cellpadding="0" border="0" width="100%">
                                            <tr>
                                                <td width="75%" align="left" bgcolor="#eeeeee"
                                                    style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px;">
                                                    Booking ID #
                                                </td>
                                                <td width="25%" align="left" bgcolor="#eeeeee"
                                                    style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px;">
                                                    {{ $bookingData["id"] }}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width="45%" align="left"
                                                    style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 15px 10px 5px 10px;">
                                                    Booking Date
                                                </td>
                                                <td width="55%" align="left"
                                                    style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 600; line-height: 24px; padding: 15px 10px 5px 10px;">
                                                    {{ \Carbon\Carbon::parse($bookingData["created_at"])->format("d F Y") }}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width="75%" align="left"
                                                    style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 5px 10px;">
                                                    Customer
                                                </td>
                                                <td width="25%" align="left"
                                                    style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 600; line-height: 24px; padding: 5px 10px;">
                                                    {{ $bookingData["customer"]["first_name"]. " ".$bookingData["customer"]["last_name"] }}
                                                </td>
                                            </tr>
                                            
                                            <tr>
                                                <td colspan="2" align="left"
                                                    style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 700; line-height: 24px; padding: 20px 0px 5px 0px;">
                                                    <table style="width: 100%;">
                                                        <tr style="background-color: #eeeeee;">
                                                            <th>Pet</th>
                                                            <th>Assigned Kennel.</th>
                                                        </tr>

                                                        @foreach ($dogs as $dog)
                                                        <tr align="center" style="font-weight: lighter;">
                                                            <td>{{ $dog["pet"]["name"] }}</td>
                                                            <td>{{ $dog["kennel_id"] }}</td>
                                                        </tr>
                                                        @endforeach
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left" style="padding-top: 20px;">
                                        <table cellspacing="0" cellpadding="0" border="0" width="100%">
                                            <tr>
                                                <td width="75%" align="left"
                                                    style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px; border-top: 2px solid #eeeeee; border-bottom: 2px solid #eeeeee;">
                                                    TOTAL
                                                </td>
                                                <td width="25%" align="left"
                                                    style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px; border-top: 2px solid #eeeeee; border-bottom: 2px solid #eeeeee;">
                                                    $ {{ $bill }}
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" height="100%" valign="top" width="100%"
                            style="padding: 0 15px 5px 15px; background-color: #ffffff;" bgcolor="#ffffff">
                            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"
                                style="max-width:600px;">
                                <tr>
                                    <td align="center" valign="top" style="font-size:0;">
                                        <div class="mw-50"
                                            style="display:inline-block; padding-bottom: 15px; vertical-align:top; width:100%;">

                                            <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%"
                                                style="max-width:600px;">
                                                <tr>
                                                    <td align="left" valign="top"
                                                        style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 0 10px;">
                                                        <p style="font-weight: 600;">Reservation Start Date</p>
                                                        <p>{{ \Carbon\Carbon::parse($bookingData["start_date"])->format("d F Y") }}</p>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div class="mw-50"
                                            style="display:inline-block; padding-bottom: 15px; vertical-align:top; width:100%;">
                                            <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%"
                                                style="max-width:300px;">
                                                <tr>
                                                    <td align="left" valign="top"
                                                        style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 0 10px;">
                                                        <p style="font-weight:600;">Reservation End Date</p>
                                                        <p>{{ \Carbon\Carbon::parse($bookingData["ending_date"])->format("d F Y") }}</p>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style=" padding: 35px; background-color: #ff4141;" bgcolor="#b91bAb">
                            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"
                                style="max-width:1000px;">
                                <tr>
                                    <td align="center"
                                        style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding-top: 25px;">
                                        <h2
                                            style="font-size: 18px; font-weight: 800; line-height: 30px; color: #ffffff; margin: 0;">
                                            Make sure you pick up your dogs on {{ \Carbon\Carbon::parse($bookingData["ending_date"])->addDay()->format("d F Y") }}
                                        </h2>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="padding: 35px 35px 15px; background-color: #ffffff;"
                            bgcolor="#ffffff">
                            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"
                                style="max-width:600px;">
                                <tr>
                                    <td align="center" style="line-height: 0;">
                                        <img src="{{ asset("images/logo.png") }}"
                                            width="200" height="27" style="display: block; border: 0px;" />
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center"
                                        style="color: #ffffff; font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 24px;">
                                        <p
                                            style="color: #666666; font-size: 14px; font-weight: 600; line-height: 25px; margin-bottom: 0;">
                                            13051 E FG Ave, Augusta, MI 49012 <br>
                                            USA
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center"
                                        style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 24px;">
                                        <p
                                            style="font-size: 14px; font-weight: 400; line-height: 20px; color: #666666; padding: 0 25px; max-width: 400px;">
                                            <span
                                                style="color: #888888; display: block; font-size: 90%; font-weight: 600; padding-top: 15px;">&copy;
                                                2021 Rising Star Boarding .</span>
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>

</body>

</html>