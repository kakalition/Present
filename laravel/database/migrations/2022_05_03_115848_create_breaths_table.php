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
        Schema::create('breaths', function (Blueprint $table) {
            $table->id();
            $table->string('duration_json');
            $table->string('short_description');
            $table->string('author_name');
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
        Schema::dropIfExists('breaths');
    }
};
