<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     * 政党を格納する
     * @return void
     */
    public function up()
    {
        Schema::create("politics", function (Blueprint $table) {
            $table->bigIncrements("politics_id");
            $table->string("politics_name");
            $table->text("information");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists("politics");
    }
};
