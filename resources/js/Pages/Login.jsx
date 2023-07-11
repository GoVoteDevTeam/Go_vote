import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { Link } from "@inertiajs/inertia-react";

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
          <div className="text-login">
            <p>ログイン</p>
          </div>
          <img src="img/login.png" alt="" />
          <form onSubmit={(e) => loginSubmit(e)}>
            <div className="user-emil">
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
                Object.keys(errors).map((key) => (
                  <div key={key}>{errors[key]}</div>
                ))}
            </div>

            <div className="button-login">
              <button type="submit">ログイン</button>
              <div className="to-sign-up">
                アカウントをお持ちでない方は
                <Link href="/signup">こちら</Link>
                から新規登録してください。
              </div>
              <div className="to-sign-up-mobile">
                初めての方は
                <Link href="/signup">こちら</Link>
                から。
              </div>
            </div>
          </form>
        </main>
      </LoginPage>
    </>
  );
};

export default Login;

const LoginPage = styled.div`
  background-color: #bdc3cd;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
  overflow-x: hidden;
  @media screen and (max-width: 500px) {
    width: 100%;
    height: calc(100vh - 20vh);
  }
  main {
    background-color: #ffffff;
    width: 80%;
    height: 90%;
    border-radius: 5px;
    text-align: center;
    align-items: start;
    display: grid;
    grid-template:
      "header" 100px
      "img" 100px
      "form" 1fr
      /1fr;

    .text-login {
      width: 100%;
      height: 100%;
      color: #36375f;
      font-weight: 700;
      grid-area: header;
      p {
        height: 50px;
        margin: 25px 0;
        font-size: 36px;
      }
      @media screen and (max-width: 500px) {
        p {
          height: 40px;
          margin: 10px 0;
          font-size: 30px;
        }
      }
    }
    @media screen and (max-width: 500px) {
      .text-login {
        font-size: 30px;
      }
    }

    img {
      width: 100px;
      height: 100px;
      margin: 0 auto;
      grid-area: img;
    }
    @media screen and (max-width: 500px) {
      img {
        width: 60px;
        height: 60px;
      }
    }

    form {
      width: 100%;
      color: #36375f;
      grid-area: form;
      .user-emil,
      .user-password,
      .user-confPassword {
        width: 100%;
        height: 7vh;
        margin: 20px 0;
        p {
          margin: 0 auto;
          font-size: 12px;
          font-weight: 700;
        }
        @media screen and (max-width: 500px) {
          p {
            font-size: 8px;
          }
        }
        input {
          width: 65%;
          height: 5vh;
          border: none;
          background-color: #eeeeee;
          border-radius: 5px;
        }
        @media screen and (max-width: 500px) {
          input {
            width: 60%;
            height: 28px;
          }
        }
      }
      @media screen and (max-width: 500px) {
        .user-emil,
        .user-password,
        .user-confPassword {
          margin: 13px 0;
        }
      }
      .err-msg {
        width: 100%;
        height: 40px;
        color: #ff0000;
        font-size: 12px;
      }
      @media screen and (max-width: 500px) {
        .err-msg {
          height: 35px;
          font-size: 8px;
        }
      }

      .button-login {
        width: 100%;
        height: 13.1vh;
        button {
          width: 40%;
          height: 40px;
          margin: 0px auto;
          padding: 8px;
          font-size: 16px;
          font-weight: 700;
          color: #ffffff;
          background-color: #36375f;
          border-radius: 5px;
        }
        @media screen and (max-width: 500px) {
          button {
            width: 30vw;
            height: 35px;
            padding: 5px;
            font-size: 12px;
          }
        }
        .to-sign-up {
          width: 100%;
          height: 3vh;
          font-size: 12px;
          margin: 10px 0 0 0;
          Link {
            margin: 0 auto;
          }
        }
        @media screen and (max-width: 500px) {
          .to-sign-up {
            display: none;
          }
        }
        .to-sign-up-mobile {
          width: 100%;
          height: 3vh;
          font-size: 8px;
          margin: 10px 0 0 0;
          Link {
            margin: 0 auto;
          }
        }
        @media screen and (min-width: 500px) {
          .to-sign-up-mobile {
            display: none;
          }
        }
      }
    }
    @media screen and (max-width: 500px) {
      form {
        width: 100%;
        height: 35vh;
      }
    }
  }
  @media screen and (max-width: 500px) {
    main {
      /* margin: 107.2px 0 0 0; */
      padding: 0;
      width: 80%;
      height: 92%;
      grid-template:
        "header" 60px
        "img" 60px
        "form" 1fr
        /1fr;
    }
  }
`;
