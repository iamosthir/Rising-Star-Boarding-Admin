<?php

namespace Database\Factories;

use App\Models\Customer;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

class CustomerFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Customer::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            "first_name" => $this->faker->firstName(),
            "last_name" => $this->faker->lastName(),
            "address1" => $this->faker->address(),
            "city" => $this->faker->city(),
            "state" => $this->faker->state(),
            "zip" => $this->faker->postcode(),
            "cell_phone" => $this->faker->phoneNumber(),
            "email" => $this->faker->email(),
            "created_at" => Carbon::now(),
            "updated_at" => Carbon::now(),
        ];
    }
}
