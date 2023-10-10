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
        Schema::create('likes', function (Blueprint $table) {
          $table->id();
          $table->unsignedBigInteger('user_id')->comment('ユーザーID');
          $table->unsignedBigInteger('habit_id')->comment('習慣化ID');
          $table->timestamps();

          // 外部キー制約
          $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
          $table->foreign('habit_id')->references('id')->on('habits')->onDelete('cascade');

          // 一意キー制約
          $table->unique(['user_id', 'habit_id'], 'unique_likes');

          // index
          $table->index('user_id');
          $table->index('habit_id');
          $table->index('created_at');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('likes');
    }
};
