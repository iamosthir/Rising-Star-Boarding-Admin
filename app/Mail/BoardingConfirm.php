<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class BoardingConfirm extends Mailable
{
    use Queueable, SerializesModels;
    public $data = array();
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($data)
    {
        $this->data = $data;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $data = $this->data;

        return $this->subject("Boooking Confirmation")->view("auth.login");
        // ->view('mail.boarding-confirm')->with(compact("data"));
    }
}
