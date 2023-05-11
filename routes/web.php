<?php

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
<<<<<<< HEAD
    return Inertia::render('Politics');
});
=======
    return Inertia::render('hello-world');
});


Route::get('/demo', function () {
    return Inertia::render('Demo');
});
>>>>>>> f760f534794c9b755600273645294cbb006f8977
