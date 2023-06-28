<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VoteVersion extends Model
{
    use HasFactory;
    protected $table = 'vote_version';

    public $timestamps = false;

    protected $fillable = [
        "start_date",
        "finish_date"
    ];

    public static function getLatestVote() {
        return self::latest("start_date")->first();
    }
}
