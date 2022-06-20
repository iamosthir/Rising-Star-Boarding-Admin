<?php

namespace Database\Factories;

use App\Models\Pets;
use Illuminate\Database\Eloquent\Factories\Factory;

class PetsFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Pets::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            "customer_id" => rand(1,100),
            "name" => $this->faker->name(),
            "breed" => $this->faker->word(),
            "color" => $this->faker->colorName(),
            "age" => rand(1,5),
            "feeding" => $this->faker->sentence(),
            "medic" => $this->faker->sentence(),
            "photo" => $this->faker->imageUrl(300,300,"pet"),
        ];
    }
}
