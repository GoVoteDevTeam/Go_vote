import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import Header from "../components/Header";
import TmpFooter from "../components/TmpFooter";
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

//   return (
//     <>
//         <Helmet>
//             //npm install react-helmet
//             //上記の文を打ってshellにインストールしてください
//             <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         </Helmet>
//       <Header />
//         <LoginPage>
//             <main>
//                 <div className="text-login">ログイン</div>
//                 <img src="../../../img/login.png" alt="" />
//                 <form onSubmit={(e) => loginSubmit(e)} style={{ textAlign: 'center' }}>
//                 <div className="input-text">
//                     <div className="user-emil" >
//                             <p>メールアドレス</p>
//                             <input
//                             type="text"
//                             name="email"
//                             id="email"
//                             onChange={(e) => inputChange(e)}
//                             required
//                             />
//                     </div>
//                     <div className="user-password">
//                         <p>パスワード</p>
//                             <input
//                             type="text"
//                             name="password"
//                             id="password"
//                             onChange={(e) => inputChange(e)}
//                             required
//                             />
//                     </div>
//                     <div className="user-password">
//                         <p>パスワード[確認]</p>
//                             <input
//                             type="text"
//                             name="confirmPassword"
//                             id="confirmPassword"
//                             required
//                             onChange={(e) => inputChange(e)}
//                             />
//                     </div>
//                 </div>
                
                
//                 <div className="err-msg">
//                     {passwordMatchError && <div>パスワードが一致しません</div>}
//                     {errors &&
//                     Object.keys(errors).map((key) => <div key={key}>{errors[key]}</div>)}
//                 </div>
//                 <button type="submit">ログイン</button>
//                 </form>
//             </main>
//         </LoginPage>
//       <TmpFooter />
//     </>
//   );
// };

// export default Login;




// const LoginPage = styled.div`
//     background-color: #BDC3CD;
//     width: 100vw;
//     height: calc(100vh - 92px - 80px);
//     overflow-y: auto;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     position: relative;
//     main {
//         margin: 10px 0 10px 0;
//         padding: 40px 0 0 0;
//         background-color: #FFFFFF;
//         width: 50vw;
//         height: calc(100vh - 92px - 140px);
//         border-radius: 10px;
        
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         align-items: center;
//         text-align: center;

        
        
//         .text-login{
//             width: 100vw;
//             height: 5vh;
//             color: #36375F;
//             font-size: 36px;
//             font-weight: 700;
//         }
//         @media screen and (max-width: 391px){
//             .text-login{
//                 margin: 20px 0 10px 0;
//                 /* padding: 10px 0 10px 0; */
//                 font-size: 32px;
//             }
//         }
        
//         img{
//             width:100px;
//             height: 100px;
//         }
    
//         form {
//             width: 100%;
//             height: 100vh;
//             color: #36375F;
//             .input-text{
//                     width: 100%;
//                     height: 35vh;
//                     margin: 20px 0;
//                     .user-emil, .user-password {
//                         width: 100%;
//                         height: 7vh;
//                         margin: 10px 0;
//                     p {
//                         margin: 0 auto;
//                         padding: 0 0 0 40px;
//                         font-size: 16px;
//                         font-weight: 700;
//                         }
//                         @media screen and (max-width: 391px){
//                             p {
//                                 padding: 0 0 0 60px;
//                                 font-size: 8px;
//                             }
//                         }
//                     input {
//                             width: 80%;
//                             height: 4vh; 
//                         }
//                         @media screen and (max-width: 391px){
//                         input {
//                             width: 60%;
//                             height: 3vh;  
//                         }
//                     }
//                 }
//             }
//             @media screen and (max-width: 391px){
//                 .input-text{
//                     height: 25vh;
//                     margin: 20px 0 0 0;
//                 }
//             }
            
            
//             .err-msg {
//                 color: #FF0000;
//                 font-size: 12px;
//                 margin: 10px 0 0 0;
//             }
//             @media screen and (max-width: 391px){
//                 .err-msg{
//                     width: 70vw;
//                     height: 40px;
//                     font-size: 8px;
//                 }
//             }

//             button{
//                 width: 140px;
//                 height: 40px;
//                 margin: 0px auto;
//                 padding: 8px;
//                 font-size: 16px;
//                 font-weight: 700;
//                 color: #ffffff;
//                 background-color: #36375F;
//                 border-radius: 10px;
//             }
//             @media screen and (max-width: 391px){
//                 button{
//                     width: 110px;
//                     height: 35px;
//                     padding: 5px;
//                     font-size: 12px;
//                 }
//             }
//         }
//     }
//     @media screen and (max-width: 391px){
//         main{
//             margin: 0 auto;
//             padding: 0 0 0 0;
//             width: 70vw;
//             height: calc(100vh - 92px - 100px);
//         }
//     }

// `;


return (
    <>
        <Helmet>
            //npm install react-helmet
            //上記の文を打ってshellにインストールしてください
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Helmet>
      <Header />
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
        width: 50vw;
        height: calc(100vh - 92px - 140px);
        border-radius: 10px;
        
        /* display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center; */
        display: grid;
        grid-template:
            "header" 100px
            "img" 100px
            "form" 1fr
            "button-login" 100px
            /1fr;
        
        
        .text-login {
            width: min(100% - 10rem);
            margin-inline: auto;
            height: 5vh;
            color: #36375F;
            font-size: 36px;
            font-weight: 700;
        }
        @media screen and (max-width: 391px){
            .text-login{
                margin: 20px 0 10px 0;
                font-size: 32px;
                grid-area: header;
            }
        }
        
        img {
            width:100px;
            height: 100px;
            grid-area: img;
        }
    
        form {
            width: 100vw;
            height: 40vh;
            color: #36375F;
            grid-area: form;
            /* display: grid;
            grid-template:
            "input-emil" 100px
            "input-pass" 100px
            "input-conf" 100px
            /1fr; */
                    /* .user-emil {
                        grid-area: input-user;
                    }
                    .user-password {
                        grid-area: input-pass;
                        grid-area: input-conf;
                    } */
                    .user-emil, .user-password, .user-confPassword {
                        width: 100vw;
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
                            width: 240px;
                            height: 40px;
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
            
            
            .err-msg {
                width: 100vw;
                height: 40px;
                color: #FF0000;
                font-size: 12px;
                /* margin: 10px 0 0 0; */
            }
            @media screen and (max-width: 391px){
                .err-msg{
                    width: 70vw;
                    height: 40px;
                    font-size: 8px;
                }
            }

            .button-login{
                width: 100vw;
                height: 100px;
                grid-area: button-login;
                button{
                width: 100vw;
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
                button{
                    width: 30vw;
                    height: 35px;
                    padding: 5px;
                    font-size: 12px;
                }
            }
            }

    }
    @media screen and (max-width: 391px){
        main{
            margin: 0 auto;
            padding: 0 0 0 0;
            width: 70vw;
            height: calc(100vh - 92px - 100px);
            display: grid;
            grid-template:
                ".text-login" 100px
                "img" 100px
                "form" 1fr
                "button" 100px
                /40px 1fr 40px;
        }
    }

`;