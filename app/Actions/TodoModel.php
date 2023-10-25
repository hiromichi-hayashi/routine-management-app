<?php

namespace App\Actions;

use App\Models\Todo;

class TodoModel
{
    public function create(array $input): Todo
    {
        return Todo::create($input);
    }
}
