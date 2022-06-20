<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class AdminNotifyOnBooking extends Notification implements ShouldQueue
{
    use Queueable;
    private $data = array();
    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct(array $data)
    {
        $this->data = $data;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        if($this->data["type"] == "Grooming")
        {
            return (new MailMessage)
            ->subject("Rising Star Boarding - Grooming Reminder")
                ->greeting("Hello, " . $this->data["adminName"])
                ->line('There is a new grooming appointment which needs your approval.')
                ->line("Customer Name : ".$this->data["customer"])
                ->line("Booking Type: " . $this->data["type"])
                ->line("Requested Schedule: " . $this->data["time"])
                ->action('Show booking details', url('admin/grooming-list/edit-grooming-data/' . $this->data["id"]));
        }
        elseif($this->data["type"] == "Boarding")
        {
            return (new MailMessage)
            ->subject("Rising Star Boarding - Boarding Reminder")
                ->greeting("Hello, " . $this->data["adminName"])
                ->line('There is a new boarding reservation which needs your approval.')
                ->line("Customer Name : " . $this->data["customer"])
                ->line("Booking Type: " . $this->data["type"])
                ->line("Booking Range: " . $this->data["range"])
                ->line("Requested Kennel: " . $this->data["kennel"])
                ->line("Total Days: " . $this->data["totalDay"])
                ->action('Show booking details', url('admin/boarding-list/edit/' . $this->data["id"]));
        }
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
