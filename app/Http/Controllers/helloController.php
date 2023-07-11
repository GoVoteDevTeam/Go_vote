<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class helloController extends Controller
{
    public function index()
    {
        $greeting = "hello";

        return Inertia::render("hello-world", [
            "data" => $greeting
        ]);
    }

    //
}
