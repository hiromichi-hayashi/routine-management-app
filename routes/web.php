<?php

use App\Http\Controllers\HabitController;
use App\Http\Controllers\TodoController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::fallback(function () {
  return redirect('/home');
});

Route::middleware('auth')->group(function () {
  Route::get('/home', function () {
      return Inertia::render('Home', [
        'user' => Auth::user(),
    ]);
  })->name('home');

  Route::get('/todo', function () {
    return Inertia::render('Home', [
      'user' => Auth::user(),
  ]);
  })->name('todo');

  Route::post('/todo_store', [TodoController::class, 'store'])->name('todo.store');

  Route::get('/my_habit', function () {
    return Inertia::render('Home', [
      'user' => Auth::user(),
  ]);
  })->name('my_habit');

  Route::get('/habit_create', [HabitController::class, 'create'])->name('habit.create');

  Route::get('/share_habit', function () {
    return Inertia::render('Home', [
      'user' => Auth::user(),
  ]);
  })->name('share_habit');

  Route::get('/work_log', function () {
    return Inertia::render('Home', [
      'user' => Auth::user(),
  ]);
  })->name('work_log');

  Route::get('/calendar', function () {
    return Inertia::render('Home', [
      'user' => Auth::user(),
  ]);
  })->name('calendar');

  Route::get('/account', function () {
    return Inertia::render('Home', [
      'user' => Auth::user(),
  ]);
  })->name('account');
});

require __DIR__.'/auth.php';
