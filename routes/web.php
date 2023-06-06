<?php

use App\Http\Controllers\DemoController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\DemoVoteController;
use App\Http\Controllers\SignUpController;
use App\Http\Controllers\TmpLoginController;
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


Route::get('/demo', function () {
    return Inertia::render('Demo', [
        "user" => Auth::user(),
    ]);
});

Route::get('/signup', [SignUpController::class, "index"])->name('signup');

Route::post('signup', [SignUpController::class, "signup"]);

Route::get('/login', [LoginController::class, "index"])->name("login");

Route::get('/check-login',  [LoginController::class, "checkLogin"]);

Route::post("/login", [LoginController::class, "login"]);

Route::post('/logout', [LoginController::class, 'logout'])->name('logout');

Route::get("/demo_vote/start", [DemoVoteController::class, "index"])->name("demovote_start");

Route::get("/demo_vote/result", function() {
    return Inertia::render("VoteResult");
})->name("demovote_result");

Route::middleware('auth')->group(function () {
    Route::get("/demo_vote/ballots", [DemoVoteController::class, "handingOutBallots"])->name("ballots");

    Route::get("/demo_vote/party_based_election", [DemoVoteController::class, "markOnBallotPaper"])->name("markon");

    Route::get("/demo_vote/to_vote", function () {
        return Inertia::render("ToVote");
    });

    Route::post("/demo_vote/vote", [DemoVoteController::class, "vote"]);

    Route::get("/demo_vote/completed", function() {
        return Inertia::render("VotingCompleted");
    } );
});
