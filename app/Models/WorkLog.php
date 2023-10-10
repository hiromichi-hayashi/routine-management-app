<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class WorkLog extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'todo_id',
        'date',
        'content',
    ];

    /**
     * Get the user associated with the work log.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo('App\Models\User', 'user_id');
    }

    /**
     * Get the todo associated with the work log.
     */
    public function todo(): BelongsTo
    {
        return $this->belongsTo('App\Models\Todo', 'todo_id');
    }
}
