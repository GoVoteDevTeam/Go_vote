import { useState } from "react";
import Header from "../components/Header"
import styled from "styled-components";
import { Inertia } from "@inertiajs/inertia";
import PropTypes from 'prop-types';

const SignUp = ({ errors }) => {
    // 入力されるデータを定義
    const [inputUserInformation, setInformation] = useState({
        user_name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    // パスワードチェック
    const [passwordMatchError, setMatchError] = useState(false);

    // 変更が加えられた際に、元データを展開し、再代入
    const inputChange = (e) => {
        setInformation(
            { ...inputUserInformation, [e.target.name]: e.target.value }
        );
        // console.log(inputUserInformation)
    }

    // サインインボタンが押された場合
    const signUpSubmit = (e) => {

        e.preventDefault();

        // 一致していない場合はtureしている場合はfalse
        if (inputUserInformation.password !== inputUserInformation.confirmPassword) {
            setMatchError(true);
            return;
        } else {
            setMatchError(false);
        }

        Inertia.post("signup", inputUserInformation, { onFinish })
    }
    const onFinish = () => {
        console.log("finish");
    }



    return (
        <>
            <Header />

            <SignUPPage>
                {passwordMatchError && <p>パスワードが一致しません</p>}
                {errors && Object.keys(errors).map((key) => (
                    <div key={key}>{errors[key]}</div>
                ))}
                <div className="main">
                    <h1>ログイン画面</h1>
                    <form onSubmit={(e) => signUpSubmit(e)}>
                        <div className="user-input">
                            <p>ユーザ名</p>
                            <input type="text" name="user_name" id="user_name" onChange={(e) => inputChange(e)} required />
                        </div>
                        <div className="user-email">
                            <p>e-mail</p>
                            <input type="text" name="email" id="email" onChange={(e) => inputChange(e)} required />
                        </div>
                        <div className="user-password">
                            <p>パスワード</p>
                            <input type="text" name="password" id="password" onChange={(e) => inputChange(e)} required />
                        </div>
                        <div className="user-password">
                            <p>再度入力</p>
                            <input type="text" name="confirmPassword" id="confirmPassword" required onChange={(e) => inputChange(e)} />
                        </div>
                        <div className="user-submit">
                            <button type="submit">送信</button>
                        </div>
                    </form>
                </div>
            </SignUPPage>
        </>
    )

}

SignUp.PropTypes = {
    errors: PropTypes.string
}

export default SignUp;

const SignUPPage = styled.div`
    background-color: #bcd3cd;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    padding-top: 30px;
    .main {
        margin: 0 auto ;
        padding: 10px;
        width: 80%;
        height: 70%;
        background-color: #f5f5f5;
        text-align: center;
    }
    
        form {
            margin: 0 auto;
            .user-input {
                input {  
                width: 240px;
                height: 40px;
                background: #D9D9D9;
                border-radius: 20px;
            }
        }
        .user-email {
            input {
                width: 240px;
                height: 40px;
                background: #D9D9D9;
                border-radius: 20px;
            }
        }
            .user-password {
                input {
                    -webkit-text-security:disc;
                    width: 240px;
                    height: 40px;
                    background: #D9D9D9;
                    border-radius: 20px;
                }
            }
            .user-submit {
                button {
                margin-top: 20px;
                width: 30px;
                height: 18px;
                font-family: 'Inter';
                font-style: normal;
                font-weight: 700;
                font-size: 15px;
                line-height: 18px;
                text-align: center;
                letter-spacing: -0.01em;
                color: #000000;
            }
        } 
    }

`;

