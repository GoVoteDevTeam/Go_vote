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
        "vote_id",
        "user_id",
        "start_date",
        "finish_date"
    ];

    public static function getLatestVote() {
        return self::latest("start_date")->first();
    }

    public static function getAllVoteVersion() {
        return self::pluck('version_id')->all();
    }
}
