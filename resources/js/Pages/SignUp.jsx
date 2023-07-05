import { useState } from "react";
import Header from "../components/Header"
import styled from "styled-components";
import { Inertia } from "@inertiajs/inertia";
import PropTypes from 'prop-types';
import Footer from "../components/footer"

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
                    <div className="login-gazou">
                        <h1>新規登録</h1>
                        <img src="img/signup.png" alt="" />
                    </div>
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
            <Footer />
        </>
    )

}

SignUp.PropTypes = {
    errors: PropTypes.string
}

export default SignUp;

const SignUPPage = styled.div`
    background-color: #BDC3CD;
    width: 100%;
    /* height: 100vh; */
    margin: 0 auto;
    padding-top: 15px;
    padding-bottom: 15px;
    .main {
        border-radius: 10px;
        margin: 0 auto;
        width: 80%;
        padding-top: 5px;
        padding-bottom: 5px;
        background-color: #FFFFFF;
        text-align: center;
        .login-gazou {
            text-align: center;
        }
        .login-gazou img {
            width: 100px;
            height: 100px;
        }
        form {
            margin: 0 auto;

            .user-input , .user-email , .user-password {
                input {
                    width: 240px;
                    height: 40px;
                    background-color: #eeeeee
                    ;
                    border: none;
                    border-radius: 20px;
                }
            }
       
            .user-submit {

                button {
                    margin-top: 20px;
                    width: 100px;
                    height: 30px;
                    border-radius: 10px;
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 15px;
                    line-height: 18px;
                    text-align: center;
                    letter-spacing: -0.01em;
                    color: #fff;
                    background-color: #36375F;
                }
            }
        }
    }
`;

