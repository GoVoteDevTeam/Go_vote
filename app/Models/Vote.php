<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vote extends Model
{
    use HasFactory;
    protected $table = 'vote';

    public $timestamps = false;

    protected $fillable = [
        "user_id",
        "version_id",
        "politics_id"
    ];

}
