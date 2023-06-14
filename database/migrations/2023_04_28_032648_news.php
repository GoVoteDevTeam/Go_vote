<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     * ニュース画面における、チャット情報を格納する際に用いる
     * @return void
     */
    public function up()
    {
        Schema::create("news", function(Blueprint $table){
            $table->bigIncrements("news_id");
            $table->unsignedBigInteger("user_id");
            $table->string("news_key");
            $table->dateTime("posted_date");
            $table->text("chat_data");

            $table->foreign("user_id")->references("user_id")->on("users");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists("news");
    }
};
