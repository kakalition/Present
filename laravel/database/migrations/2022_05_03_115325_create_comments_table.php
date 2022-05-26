<?php

use App\Models\Breath;
use App\Models\Meditation;
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
    Schema::create('comments', function (Blueprint $table) {
      $table->id();
      $table->foreignId('meditation_id')
        ->references('id')
        ->on('meditations')
        ->onDelete('cascade')
        ->nullable();
      $table->foreignId('breath_id')
        ->references('id')
        ->on('breaths')
        ->onDelete('cascade')
        ->nullable();
      $table->foreignId('user_id')
        ->references('id')
        ->on('users')
        ->onDelete('cascade');
      $table->string('comment');
      $table->decimal('rating', 2, 1, true);
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
    Schema::dropIfExists('comments');
  }
};
