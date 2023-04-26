<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HelloController extends Controller
{
    public function index ()
    {
        $data = "helloWorld";

        return Inertia::render('hello-world', [
            "name" => $data
        ]);
    }
}
