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
        ->onDelete('cascade');
      $table->foreignId('breath_id')
        ->references('id')
        ->on('breaths')
        ->onDelete('cascade');
      $table->bigInteger('user_id');
      $table->date('date');
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
