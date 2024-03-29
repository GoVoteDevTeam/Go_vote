<?php

use App\Http\Controllers\DemoController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\DemoVoteController;
use App\Http\Controllers\MypageController;
use App\Http\Controllers\SignUpController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use function Termwind\render;

// use Illuminate\Support\Facades\Session;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('hello-world');
});

Route::get('/news', function () {
    return Inertia::render('News');
});

Route::get('/demo', function () {
    return Inertia::render('Demo', [
        "user" => Auth::user(),
    ]);
});

Route::get('/diagonose', function () {
    return Inertia::render('Diagonose');
});

Route::get('/politics', function () {
    return Inertia::render('Politics');
});
// Route::get('/login', function () {
//     return Inertia::render('Login');
// })->name("login");

Route::get('/signup', [SignUpController::class, "index"])->name('signup');

Route::post('signup', [SignUpController::class, "signup"]);

Route::get('/login', [LoginController::class, "index"])->name("login");

Route::get('/check-login',  [LoginController::class, "checkLogin"]);

Route::post("/login", [LoginController::class, "login"]);

Route::post('/logout', [LoginController::class, 'logout'])->name('logout');

Route::get("/demo_vote/start", [DemoVoteController::class, "index"])->name("demovote_start");

Route::get("/demo_vote/result", [DemoVoteController::class, "result"])->name("demovote_result");

Route::get("/demo_vote/result_list", [DemoVoteController::class, "resultVoteList"]);

Route::middleware('auth')->group(function () {
    Route::get("/mypage", [MypageController::class, "index"])->name("mypage");

    Route::get("/demo_vote/ballots", [DemoVoteController::class, "handingOutBallots"])->name("ballots");

    Route::get("/demo_vote/party_based_election", [DemoVoteController::class, "markOnBallotPaper"])->name("markon");

    Route::get("/demo_vote/to_vote", function () {
        return Inertia::render("ToVote");
    });

    Route::post("/demo_vote/set_vote_version", [DemoVoteController::class, "setVoteVersion"]);

    Route::get("/demo_vote/vote_version", [DemoVoteController::class, "voteVersion"]);

    Route::post("/demo_vote/to_vote", [DemoVoteController::class, "vote"]);

    Route::get("/demo_vote/completed", function () {
        return Inertia::render("VotingCompleted");
    });
});
