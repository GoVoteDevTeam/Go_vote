<?php

namespace App\Http\Controllers;

// use Illuminate\Http\Request;

use App\Models\Politics;
// use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DemoVoteController extends Controller
{
    public function index() {
        return Inertia::render("DemoVoteStart");
    }

    public function handingOutBallots() {

        return Inertia::render("HandingOutBallots",[
            "auth"=> Auth::user()
        ]);
    }

    public function markOnBallotPaper() {

        $politics = Politics::all();

        return Inertia::render("MarkOnBallotPaper", [
            "politics" => $politics
        ]);
    }
}
