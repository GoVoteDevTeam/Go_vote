<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class LoginController extends Controller
{
    public function index () {
        return Inertia::render("Login");
    }

    public function checkLogin()
    {
        if (Auth::check()) {
            // ログイン済みの場合の処理（画面遷移など）
            return Inertia::reder("Demo");
        } else {
            // 未ログインの場合の処理（ログイン画面へのリダイレクトなど）
            return Inertia::location("/login");
        }
    }
    


    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/login');
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
    
            return Redirect::route('demo')->with('success', 'ログインに成功しました。');
        } else {
            return Redirect::back()->with('error', 'メールアドレスまたはパスワードが正しくありません。')->withErrors(['email' => 'メールアドレスまたはパスワードが正しくありません。']);
        }
    }
}
