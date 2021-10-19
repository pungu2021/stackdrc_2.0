<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStackdrcsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('stackdrcs', function (Blueprint $table) {
            $table->id();
            $table->string("titre",200);
            $table->text("contenu");
            $table->string("auteur",50);
            $table->string("photo",50);
            $table->dateTime("publier");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('stackdrc');
    }
}
