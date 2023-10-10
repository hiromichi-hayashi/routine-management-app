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
        Schema::create('work_logs', function (Blueprint $table) {
          $table->id();
          $table->unsignedBigInteger('user_id')->comment('ユーザーID');
          $table->unsignedBigInteger('todo_id')->nullable()->comment('todoID');
          $table->date('date')->comment('作業日');
          $table->text('content')->nullable()->comment('作業内容');
          $table->timestamps();

          // 外部キー制約
          $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
          $table->foreign('todo_id')->references('id')->on('todos')->onDelete('cascade');

          // 一意キー制約
          $table->unique(['user_id', 'todo_id', 'date'], 'unique_work_logs');

          // index
          $table->index('user_id');
          $table->index('date');
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
        Schema::dropIfExists('work_logs');
    }
};
