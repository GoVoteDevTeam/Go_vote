<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     * 投票結果を格納する
     * @return void
     */
    public function up()
    {
        Schema::create("vote", function (Blueprint $table) {
            $table->bigIncrements("vote_id");
            $table->unsignedBigInteger("user_id");
            $table->unsignedBigInteger("version_id");
            $table->unsignedBigInteger("politics_id");

            $table->foreign("user_id")->references("user_id")->on("users");
            $table->foreign("version_id")->references("version_id")->on("vote_version");
            $table->foreign("politics_id")->references("politics_id")->on("politics");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists("vote");
    }
};
