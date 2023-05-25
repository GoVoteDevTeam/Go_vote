import { useState } from "react";
import styled from "styled-components";
import { Inertia } from "@inertiajs/inertia";

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

        Inertia.post("signup", inputUserInformation, {onFinish})
    }
    const onFinish = () => {
        console.log("finish");
    }



    return (
        <>
            <SignUPPage>
                {passwordMatchError && <p>パスワードが一致しません</p>}
                {errors && Object.keys(errors).map((key) => (
                    <div key={key}>{errors[key]}</div>
                ))}
                <form onSubmit={(e) => signUpSubmit(e)}>
                    <div className="user-input">
                        <p>ユーザ名</p>
                        <input type="text" name="user_name" id="user_name" onChange={(e) => inputChange(e)} required />
                    </div>
                    <div className="user-emil">
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
                    <button type="submit">送信</button>
                </form>
            </SignUPPage>
        </>
    )

}

export default SignUp;

const SignUPPage = styled.div`
    form {
        .user-password {
            input {
                -webkit-text-security:disc;
            }
        }
    }
`;
