<?php

namespace App\Actions\Todo;

use App\Models\Todo;

class CreateTodo
{
    protected $todoModel;

    public function __construct(Todo $todoModel)
    {
        $this->todoModel = $todoModel;
    }

    /**
     * Create a new todo.
     *
     * @param  array  $input
     * @return \App\Models\Todo
     */
    public function execute(array $input): Todo
    {
        $validatedData = [
            'user_id' => auth()->user()->id,
            'habit_id' => $input['habit_id'],
            'title' => $input['title'],
            'work_time' => $input['work_time'],
            'work_description' => $input['work_description'] ?? null,
        ];

        return $this->todoModel->create($validatedData);
    }
}
