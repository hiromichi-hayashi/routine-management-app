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
      Schema::create('users', function (Blueprint $table) {
          $table->id();
          $table->string('name', 20)->comment('ユーザー名');
          $table->string('email', 256)->unique()->comment('メールアドレス');
          $table->string('password', 128)->comment('パスワード');
          $table->string('icon')->nullable()->comment('アイコン');
          $table->rememberToken()->comment('記憶トークン');
          $table->timestamps();

          // index
          $table->index('email');
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
