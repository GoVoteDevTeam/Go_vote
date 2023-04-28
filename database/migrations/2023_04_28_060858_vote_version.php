<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     * 投票の開催数を格納する
     * @return void
     */
    public function up()
    {
        Schema::create("vote_version", function (Blueprint $table) {
            $table->bigIncrements("version_id");
            $table->dateTime("start_date");
            $table->dateTime("finish_date");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists("vote_version");
    }
};
