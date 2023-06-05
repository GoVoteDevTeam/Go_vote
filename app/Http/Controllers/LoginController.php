<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

class LoginController extends Controller
{
    public function index()
    {
        return Inertia::render('Login', [
            "user" => Auth::user(),
        ]);
    }

    public function checkLogin()
    {
        // テスト用にログインしておく
        if (Auth::check()) {
            // ログイン済みの場合の処理（画面遷移など）
            return Inertia::location("/ballots");
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
        if (Auth::attempt($credentials, true)) {
            // 認証成功の処理
            
            return Inertia::location('/demo');
        } else {
            
            return Redirect::back()->withErrors(['メールアドレスまたはパスワードが正しくありません。']);
        }
    }

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Inertia::location('/login');
    }
}
