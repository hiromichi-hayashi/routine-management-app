<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table = 'users';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'icon'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the todos associated with the user.
     */
    public function todos(): HasMany
    {
        return $this->hasMany(Todo::class, 'user_id', 'id');
    }

    /**
     * Get the habits associated with the user.
     */
    public function habits(): HasMany
    {
        return $this->hasMany(Habit::class, 'user_id', 'id');
    }

    /**
     * Get the work logs associated with the user.
     */
    public function workLogs(): HasMany
    {
        return $this->hasMany(WorkLog::class, 'user_id', 'id');
    }

    /**
     * Get the work logs associated with the user.
     */
    public function notificationSettings(): HasMany
    {
        return $this->hasMany(NotificationSetting::class, 'user_id', 'id');
    }

    /**
     * Get the likes associated with the user.
     */
    public function likedHabits(): BelongsToMany
    {
        return $this->belongsToMany(Habit::class, 'likes', 'user_id', 'habit_id')
            ->withTimestamps();
    }

    /**
     * Get the users that the user is following.
     */
    public function following(): BelongsToMany
    {
      return $this->belongsToMany(User::class, 'followers', 'user_id', 'followed_user_id')->withTimestamps();
    }

    /**
     * Get the users that are following the user.
     */
    public function followers(): BelongsToMany
    {
      return $this->belongsToMany(User::class, 'followers', 'followed_user_id', 'user_id')->withTimestamps();
    }
}
