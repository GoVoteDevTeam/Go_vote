<?php

namespace App\Http\Controllers;

use App\Models\Politics;
use App\Models\VoteVersion;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Request;

class DemoVoteController extends Controller
{
    public function index() {
        $latestVote = VoteVersion::getLatestVote();
        return Inertia::render("DemoVoteStart",[
            "vote" => $latestVote
        ] );
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

    public function vote(Request $request) {
        return Inertia::render("VotingCompleted");
    }
}
