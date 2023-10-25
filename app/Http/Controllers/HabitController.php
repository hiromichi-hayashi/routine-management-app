<?php

namespace App\Http\Controllers;

use App\Actions\Habit\CreateHabit;
use App\Actions\Todo\CreateTodo;
use App\Http\Requests\HabitRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HabitController extends Controller
{
    protected $createHabit;

    protected $createTodo;

    public function __construct(CreateHabit $createHabit, CreateTodo $createTodo)
    {
        $this->createHabit = $createHabit;
        $this->createTodo = $createTodo;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = [
            'study' => '勉強',
            'exercise' => '運動',
            'work' => '仕事',
            'daily' => '日常',
        ];

        $difficulties = [
            'easy' => '簡単',
            'medium' => '普通',
            'hard' => '難しい',
        ];

        $taskTypes = [
            'habit_task' => 'My Routing',
            'shared_habit_task' => 'Share Routing',
        ];

        return Inertia::render('Habit/Create', [
            'categories' => $categories,
            'difficulties' => $difficulties,
            'task_types' => $taskTypes,
            'user' => Auth::user(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(HabitRequest $request): RedirectResponse
    {
        // habitを作成
        $input = $request->only(['title', 'task_type', 'category', 'difficulty', 'work_description']);
        $habit = $this->createHabit->execute($input);

        // todoを作成
        $todos = $request->input('todos');
        foreach ($todos as $todo) {
            // $todoのhabit_idに$habit->idをセット
            $todo['habit_id'] = $habit->id;
            $this->createTodo->execute($todo);
        }

        // 作成後の処理を書く
        return redirect()->route('my_habit')->with('success', '習慣化を作成しました');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
