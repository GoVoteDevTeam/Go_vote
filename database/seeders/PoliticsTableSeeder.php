<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PoliticsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("politics")->insert([
            [
                "politics_name" => "自由民主党",
                "information" => ""
            ],
            [
                "politics_name" => "公明党",
                "information" => ""
            ],
            [
                "politics_name" => "立憲民主党",
                "information" => ""
            ],
            [
                "politics_name" => "日本維新の会",
                "information" => ""
            ],
            [
                "politics_name" => "日本共産党",
                "information" => ""
            ],
            [
                "politics_name" => "わいわ新選組",
                "information" => ""
            ],
            [
                "politics_name" => "社会民主党",
                "information" => ""
            ],
            [
                "politics_name" => "政治家女子48党",
                "information" => ""
            ],
            [
                "politics_name" => "参政党",
                "information" => ""
            ],
        ]);
    }
}
