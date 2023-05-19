<?php

use App\Http\Controllers\SignUpController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
    return Inertia::render('Login');
})->name("login");

Route::get('/signup', [SignUpController::class, "index"])->name('signup');

Route::post('signup', [SignUpController::class, "signup"]);
