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
        Schema::create('followers', function (Blueprint $table) {
          $table->id();
          $table->unsignedBigInteger('user_id')->comment('ユーザーID');
          $table->unsignedBigInteger('followed_user_id')->comment('フォローされるユーザーID');
          $table->timestamps();

          // 外部キー制約
          $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
          $table->foreign('followed_user_id')->references('id')->on('users')->onDelete('cascade');

          // 一意キー制約
          $table->unique(['user_id', 'followed_user_id'], 'unique_followers');

          // index
          $table->index('user_id');
          $table->index('followed_user_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('followers');
    }
};
