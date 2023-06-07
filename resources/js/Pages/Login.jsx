import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import Header from "../components/Header";
import TmpFooter from "../components/TmpFooter";
import styled from "styled-components";

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
      <Header />
        <LoginPage>
            <main>
                <div className="text-login">ログイン</div>
                <div className="err-msg">
                    {passwordMatchError && <p>パスワードが一致しません</p>}
                    {errors &&
                    Object.keys(errors).map((key) => <div key={key}>{errors[key]}</div>)}
                </div>

                <form onSubmit={(e) => loginSubmit(e)} style={{ textAlign: 'center' }}>
                <div className="input-text">
                    <div className="user-emil" >
                            <p style={{ textAlign: 'left'}}>メールアドレス</p>
                            <input
                            type="text"
                            name="email"
                            id="email"
                            onChange={(e) => inputChange(e)}
                            required
                            style={{ width: '80%', height: '4vh' }}
                            />
                    </div>
                    <div className="user-password">
                        <p style={{ textAlign: 'left'}}>パスワード</p>
                            <input
                            type="text"
                            name="password"
                            id="password"
                            onChange={(e) => inputChange(e)}
                            required
                            style={{ width: '80%', height: '4vh' }}
                            />
                    </div>
                    <div className="user-password">
                        <p style={{ textAlign: 'left'}}>パスワード[確認]</p>
                            <input
                            type="text"
                            name="confirmPassword"
                            id="confirmPassword"
                            required
                            onChange={(e) => inputChange(e)}
                            style={{ width: '80%', height: '4vh' }}
                            />
                    </div>
                </div>
                <button type="submit" style={{ width: '120px', height: '40px' }}>ログイン</button>
                </form>
            </main>
        </LoginPage>
      <TmpFooter />
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
    position: relative;
    main {
        margin: 10px 0 10px 0;
        padding: 40px 0 0 0;
        background-color: #FFFFFF;
        width: 40vw;
        height: calc(100vh - 92px - 140px);
        border-radius: 10px;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;

        
        
        .text-login{
            color: #36375F;
            font-size: 36px;
            font-weight: 700;
        }
        .err-msg {
            position: absolute;
            bottom: 30px;
            color: #FF0000;
            font-size: 12px;
        }
    
        form {
            width: 100%;
            height: 100vh;
            color: #36375F;
            margin: 10px 0;
            .input-text{
                    width: 100%;
                    height: 35vh;
                    margin: 20px 0;
                    .user-emil, .user-password {
                        width: 100%;
                        height: 10vh;
                        margin: 10px 0;
                    p {
                        margin: 0 auto;
                        padding: 0 0 0 40px;
                        font-size: 16px;
                        font-weight: 700;
                    } 
                }
            }

            button{
                margin: 0px auto;
                padding: 10px;
                font-weight: 700;
                color: #ffffff;
                background-color: #36375F;
                border-radius: 10px;
            }
        }
    }

`;
