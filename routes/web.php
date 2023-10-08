<?php

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

  Route::get('/my_routing', function () {
    return Inertia::render('Home', [
      'user' => Auth::user(),
  ]);
  })->name('my_routing');

  Route::get('/share_routing', function () {
    return Inertia::render('Home', [
      'user' => Auth::user(),
  ]);
  })->name('share_routing');

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
