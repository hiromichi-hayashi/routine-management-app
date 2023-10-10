<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterRequest;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(RegisterRequest $request): RedirectResponse
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

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'icon' => $icons[array_rand($icons)],
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }
}
