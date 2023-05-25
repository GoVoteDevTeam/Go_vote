<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class TmpLoginController extends Controller
{
    public function index()
    {
        return Inertia::render('LoginTmp');
    }

    public function checkLogin()
    {
        // テスト用にログインしておく
        if (Auth::check()) {
            // ログイン済みの場合の処理（画面遷移など）
            return Inertia::render("Demo");
        } else {
            // 未ログインの場合の処理（ログイン画面へのリダイレクトなど）
            return Inertia::location("/login");
        }
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            // 認証成功の処理
            $user = Auth::user();

            Session::put('redirectData', $user);

            return Inertia::location("/demo_vote/ballots");
        }
    }

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/login');
    }
}
