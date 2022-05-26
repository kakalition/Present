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
    Schema::create('meditations', function (Blueprint $table) {
      $table->id();
      $table->foreignId('author_id')
        ->references('id')
        ->on('users')
        ->onDelete('cascade');
      $table->foreignId('saved_by_id')
        ->references('id')
        ->on('users')
        ->onDelete('cascade');
      $table->string('name');
      $table->string('file_path');
      $table->string('short_description');
      $table->date('published_date');
      $table->bigInteger('total_saved');
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
    Schema::dropIfExists('meditations');
  }
};
