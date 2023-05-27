<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class LoginController extends Controller
{
    public function index () {
        return Inertia::render("Login");
    }

    public function login (Request $input_user) {

        // バリデーションチェック
        /**
         * user_name: 必須
         * email: 必須, メールアドレス型, 重複無し
         * pasword: 必須, 3文字以上
         */
        $validator = Validator::make($input_user->all(), [
            "email" => "required|email|unique:users",
            "password" => "required|min:3",
        ]);

        // エラーの場合はlogin画面に戻す
        if ($validator->fails()) {
            return Inertia::render('Login', [
                'errors' => $validator->errors()->getMessages(),
            ]);
        }

        // insert
        User::create([
            "email" => $input_user->email,
            "password" => $input_user->password
        ]);

        // リダイレクト
        // return redirect()->route('login');
    }
}
