<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('todos', function (Blueprint $table) {
          $table->id();
          $table->unsignedBigInteger('user_id')->comment('ユーザーID');
          $table->unsignedBigInteger('habit_id')->nullable()->comment('習慣化ID');
          $table->string('title', 256)->comment('タイトル');
          $table->enum('task_type', ['habit_task', 'shared_habit_task'])->comment('タスク種別');
          $table->enum('category', ['study', 'exercise', 'work', 'daily'])->comment('カテゴリ');
          $table->time('work_time')->nullable()->comment('作業時間');
          $table->text('work_description')->nullable()->comment('作業内容');
          $table->boolean('status')->default(false)->comment('ステータス');
          $table->timestamps();

          // 外部キー制約
          $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
          $table->foreign('habit_id')->references('id')->on('habits')->onDelete('cascade');

          // 一意キー制約
          $table->unique(['user_id', 'habit_id','title', 'task_type', 'category'], 'unique_todos');

          // index
          $table->index('user_id');
          $table->index('habit_id');
          $table->index('category');
          $table->index('created_at');
          $table->index('updated_at');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('todos');
    }
};
