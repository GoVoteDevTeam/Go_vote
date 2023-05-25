<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DemoVoteController extends Controller
{
    public function index() {
        return Inertia::render("DemoVoteStart");
    }

    public function handingOutBallots() {
        return Inertia::render("HandingOutBallots");
    }
}
