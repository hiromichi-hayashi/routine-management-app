<?php

namespace App\Actions\Habit;

use App\Models\Habit;

class CreateHabit
{
    protected $habitModel;

    public function __construct(Habit $habitModel)
    {
        $this->habitModel = $habitModel;
    }

    /**
     * Create a new habit.
     *
     * @param  array  $input
     * @return \App\Models\Habit
     */
    public function execute(array $input): Habit
    {
        $validatedData = [
            'user_id' => auth()->user()->id,
            'title' => $input['title'],
            'task_type' => $input['task_type'],
            'category' => $input['category'],
            'difficulty' => $input['difficulty'],
            'work_description' => $input['work_description'] ?? null,
        ];

        return $this->habitModel->create($validatedData);
    }
}
