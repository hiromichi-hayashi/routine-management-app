<?php

namespace App\Actions;

use App\Models\Habit;

class HabitModel
{
    public function create(array $input): Habit
    {
        return Habit::create($input);
    }
}
