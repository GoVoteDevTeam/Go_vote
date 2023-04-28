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
        // スキーマ定義
        Schema::create("users", function(Blueprint $table){
            // primary key
            $table->bigIncrements("user_id");
            $table->string("password");
            $table->string("user_name");
            $table->string("email");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::dropIfExists("users");
    }
};
