import { useState } from "react";
import styled from "styled-components";
import { Inertia } from "@inertiajs/inertia";

const Login = ({ errors }) => {
      // 入力されるデータを定義
    const [inputUserInfomation, setInfomation] = useState({
        confirmEmail: "",
        password: "",
        confirmPassword: "",
    })
  
    // パスワードチェック
    const [emailMatchError, emailSetMatchError] = useState(false);
    const [passwordMatchError, passwordSetMatchError] = useState(false);
    
    
    // 変更が加えられた際に、元データを展開し、再代入
    const inputChange = (e) => {
        setInfomation(
            { ...inputUserInfomation, [e.target.name]: e.target.value }
        );
        // console.log(inputUserInfomation)
    }
  
  
      // ログインボタンが押された場合
      const loginSubmit = (e) => {

        e.preventDefault();
        
        
        //登録されていないemailまたは一致していないpasswordが送信された場合
        if (inputUserInfomation.email !== inputUserInfomation.confirmEmail || inputUserInfomation.password !== inputUserInfomation.confirmPassword) {
            
            //登録されていないemailかつ一致していないpasswordが、同時に入力された場合、すべてのエラー文を返す
            if (inputUserInfomation.email !== inputUserInfomation.confirmEmail && inputUserInfomation.password !== inputUserInfomation.confirmPassword) {
                emailSetMatchError(true);
                passwordSetMatchError(true);
                return;
            } else {
                            // 一致していない場合はtureしている場合はfalse(email)
                if (inputUserInfomation.email !== inputUserInfomation.confirmEmail ) {
                    emailSetMatchError(true);
                    return;
                } else {
                    emailSetMatchError(false);
                }
            }
            
                            // 一致していない場合はtureしている場合はfalse(password)
                if (inputUserInfomation.password !== inputUserInfomation.confirmPassword) {
                    passwordSetMatchError(true);
                    return;
                } else {
                    passwordSetMatchError(false);
                }
        }

        
        
        // "/demo"パスに遷移
        Inertia.post("/login", inputUserInfomation, {onFinish})
    }
    const onFinish = () => {
        console.log("finish");
    }
  
  
    return (
        <>
            <LoginPage>
                <div className="">ログインページ</div>
                {emailMatchError && <p>無効なメールアドレスです</p>}
                {passwordMatchError && <p>パスワードが一致しません</p>}
                {errors && Object.keys(errors).map((key) => (
                    <div key={key}>{errors[key]}</div>
                ))}
                <form onSubmit={(e) => loginSubmit(e)}>
                    <div className="user-emil">
                        <p>e-mail</p>
                        <input type="text" name="confirmEmail" id="confirmEmail" onChange={(e) => inputChange(e)} required />
                    </div>
                    <div className="user-password">
                        <p>パスワード</p>
                        <input type="text" name="password" id="password" onChange={(e) => inputChange(e)} required />
                    </div>
                    <div className="user-password">
                        <p>再度入力</p>
                        <input type="text" name="confirmPassword" id="confirmPassword" required onChange={(e) => inputChange(e)} />
                    </div>
                    <button type="submit">送信</button>
                </form>
            </LoginPage>
        </>
    )
}

export default Login;

const LoginPage = styled.div`
    form {
        .user-password {
            input {
                -webkit-text-security:disc;
            }
        }
    }
`;