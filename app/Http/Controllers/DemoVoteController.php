<?php

namespace App\Http\Controllers;

use App\Models\Politics;
use App\Models\Vote;
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
        // 最新の選挙情報を取得
        $latestVote = VoteVersion::getLatestVote();

        $requestData = $request->request->all();

        Vote::create([
            "user_id" => Auth::id(),
            "version_id" => $latestVote->version_id,
            "politics_id" => json_decode($requestData["politics"])->politics_id
        ]);

        return Inertia::location("/demo_vote/completed");
    }
}
