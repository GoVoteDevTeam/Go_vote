<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Redirect;

class LoginController extends Controller
{
    public function index () {
        return Inertia::render('Login');
    }

    public function checkLogin()
    {
        if (Auth::check()) {
            // ログイン済みの場合の処理（画面遷移など）
            return Inertia::reder('Demo');
        } else {
            // 未ログインの場合の処理（ログイン画面へのリダイレクトなど）
            return Inertia::location('/login');
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
    
        
        if (Auth::attempt($credentials, true)) {
            // 認証成功の処理
            
            return Redirect::route('demo')->with('success', 'ログインに成功しました。');
        } else {
            
            return Redirect::back()->with('error', 'メールアドレスまたはパスワードが正しくありません。')->withErrors(['email' => 'メールアドレスまたはパスワードが正しくありません。']);
        }
    }
}
