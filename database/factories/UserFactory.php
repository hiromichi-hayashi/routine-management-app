<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
      $icons = [
        'blue-cute-little-monster-baby-teeth.svg',
        'cute-baby-monster-with-smile-and-cute-horns.svg',
        'green-cute-monster-with-baby-teeth.svg',
        'huge-monster-with-baby-teeth.svg',
        'kid-robot-monster-with-huge-smile-and-one-eye-and-horn.svg',
        'skinny-green-monster-with-big-legs-and-one-eye.svg',
        'three-eye-robot-monster.svg',
        'two-horn-one-eye-pink-monster.svg'
      ];

        return [
            'name' => fake()->name(),
            'email' => fake()->unique()->safeEmail(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10),
            'icon' => $icons[array_rand($icons)],
        ];
    }
}
