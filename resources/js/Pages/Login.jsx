import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import Header from "../components/Header";
import Footer from "../components/footer";
import styled from "styled-components";
import { Helmet } from 'react-helmet';

const Login = ({ errors }) => {
  // 入力されるデータを定義
  const [inputUserInfomation, setInfomation] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  // パスワードチェック
  const [passwordMatchError, passwordSetMatchError] = useState(false);

  // 変更が加えられた際に、元データを展開し、再代入
  const inputChange = (e) => {
    setInfomation({ ...inputUserInfomation, [e.target.name]: e.target.value });
    // console.log(inputUserInfomation)
  };

  // ログインボタンが押された場合
  const loginSubmit = (e) => {
    e.preventDefault();

    //二回入力したpassword一致していない場合
    if (inputUserInfomation.password !== inputUserInfomation.confirmPassword) {
      passwordSetMatchError(true);
      return;
    } else {
      passwordSetMatchError(false);
    }

    // /loginにPOST
    Inertia.post("/login", inputUserInfomation, { onFinish });
  };
  const onFinish = () => {
    console.log("finish");
  };


  
return (
    <>
        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Helmet>
        <LoginPage>
            <main>
                <div className="text-login">ログイン</div>
                <img src="img/login.png" alt="" />
                <form onSubmit={(e) => loginSubmit(e)}>
                    <div className="user-emil" >
                            <p>メールアドレス</p>
                            <input
                            type="text"
                            name="email"
                            id="email"
                            onChange={(e) => inputChange(e)}
                            required
                            />
                    </div>
                    <div className="user-password">
                        <p>パスワード</p>
                            <input
                            type="text"
                            name="password"
                            id="password"
                            onChange={(e) => inputChange(e)}
                            required
                            />
                    </div>
                    <div className="user-confPassword">
                        <p>パスワード[確認]</p>
                            <input
                            type="text"
                            name="confirmPassword"
                            id="confirmPassword"
                            required
                            onChange={(e) => inputChange(e)}
                            />
                    </div>
                
                
                <div className="err-msg">
                    {passwordMatchError && <div>パスワードが一致しません</div>}
                    {errors &&
                    Object.keys(errors).map((key) => <div key={key}>{errors[key]}</div>)}
                </div>
                <div className="button-login">
                    <button type="submit">ログイン</button>
                </div>
                </form>
            </main>
        </LoginPage>
    </>
  );
};

export default Login;




const LoginPage = styled.div`
    background-color: #BDC3CD;
    width: 100vw;
    height: calc(100vh - 92px - 80px);
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: hidden;
    overflow-x: hidden;
    main {
        margin: 10px 0 10px 0;
        background-color: #FFFFFF;
        width: 50vw;
        height: calc(100vh - 92px - 140px);
        border-radius: 10px;
        text-align: center;
        align-items: center;
        display: grid;
        grid-template:
            "header" 100px
            "img" 100px
            "form" 340px
            "button-login" 1fr
            /1fr;
        
        
        .text-login {
            width: 273.27px;
            margin-inline: auto;
            height: 5vh;
            color: #36375F;
            font-size: 36px;
            font-weight: 700;
        }
        @media screen and (max-width: 391px){
            .text-login{
                margin: 40px 0 10px 0;
                font-size: 32px;
                grid-area: header;
            }
        }
        
        img {
            width:100px;
            height: 100px;
            margin: 0 auto;
            grid-area: img;
        }
    
        form {
            width: 50vw;
            height: 50vh;
            color: #36375F;
            grid-area: form;
                    .user-emil, .user-password, .user-confPassword {
                        width: 100%;
                        height: 7vh;
                        margin: 20px 0;
                    p {
                        margin: 0 auto;
                        font-size: 16px;
                        font-weight: 700;
                        }
                        @media screen and (max-width: 391px){
                            p {
                                font-size: 8px;
                            }
                        }
                    input {
                            width: 350px;
                            height: 35px;
                            border: none;
                            background-color: #eeeeee;
                            border-radius: 10px;
                        }
                        @media screen and (max-width: 391px){
                        input {
                            width: 240px;
                            height: 35px;
                        }
                    }
                }
            }
            @media screen and (max-width: 391px){
                form {
                    width: 70vw;
                    height: 35vh;
                    margin: 20px 0 0 0;
                    padding: 20px 0 0 0;
                }
            }
            
            .err-msg {
                width: 100%;
                height: 40px;
                color: #FF0000;
                font-size: 12px;
            }
            @media screen and (max-width: 391px){
                .err-msg {
                    width: 70vw;
                    height: 30px;
                    font-size: 8px;
                    padding: 0 0 23px 0;
                }
            }

            .button-login {
                width: 50vw;
                height: auto;
                grid-area: button-login;
                    button {
                    width: 20vw;
                    height: 40px;
                    margin: 0px auto;
                    padding: 8px;
                    font-size: 16px;
                    font-weight: 700;
                    color: #ffffff;
                    background-color: #36375F;
                    border-radius: 10px;
                }
                @media screen and (max-width: 391px){
                    button {
                        width: 30vw;
                        height: 35px;
                        grid-area: button-login;
                        padding: 5px;
                        font-size: 12px;
                    }
                }
            }
            @media screen and (max-width: 391px){
                .button-login {
                    width: 70vw;
                }
            }

    }
    @media screen and (max-width: 391px){
        main {
            margin: 0 auto;
            padding: 0 0 0 0;
            width: 70vw;
            height: calc(100vh - 92px - 100px);
        }
    }

`;