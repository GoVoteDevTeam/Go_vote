<?php

use App\Http\Controllers\SignUpController;
use App\Http\Controllers\TmpLoginController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

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
    return Inertia::render('Demo');
});

Route::get('/login', function () {
    return Inertia::render('LoginTmp');
})->name("login");

Route::get('/signup', [SignUpController::class, "index"])->name('signup');

Route::post('signup', [SignUpController::class, "signup"]);

Route::get("/demo_vote/start", function () {
    return Inertia::render("DemoVoteStart");
})->name("demovote_start");

Route::get('/check-login',  [TmpLoginController::class, "checkLogin"]);

Route::post("/login", [TmpLoginController::class, "login"]);

Route::post('/logout', [TmpLoginController::class, 'logout'])->name('logout');
