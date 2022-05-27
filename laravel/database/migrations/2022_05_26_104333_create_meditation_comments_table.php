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
    Schema::create('meditation_comments', function (Blueprint $table) {
      $table->id();
      $table->foreignId('meditation_id')
        ->references('id')
        ->on('meditations')
        ->onDelete('cascade');
      $table->foreignId('user_id')
        ->references('id')
        ->on('users')
        ->onDelete('cascade');
      $table->string('comment');
      $table->integer('rating');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('meditation_comments');
  }
};
