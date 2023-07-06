import React from "react";
import styled from "styled-components";
import { Inertia } from '@inertiajs/inertia';
import pro from "../../../public/img/pro.png";

const MyPage = ({ auth }) => {
    const profile_name = `${auth.user_name}さん`;
    const profile_Email = auth.email;

    const handleLogout = () => {
        Inertia.post('/logout'); // ログアウトリクエストを送信
    };

    return (
        <>
            <MypageElement>
                <div className="mypage">
                    <div className="title">マイページ</div>

                    <div className="logout" onClick={handleLogout}>
                        <p className="text">ログアウト</p>
                    </div>

                    <div className="profile">
                        <img className="pro" src={pro} />
                        <div className="profile-text">
                            <h4>{profile_name}</h4>
                            <p>{"E-mail : " + profile_Email}</p>
                        </div>
                    </div>

                    <div className="rireki">
                        <div className="riretitle">政党診断履歴</div>
                        <hr></hr>
                    </div>

                    <div className="rireki">
                        <div className="riretitle">政党診断履歴</div>
                        <hr></hr>
                    </div>
                </div>
            </MypageElement>
        </>
    );
};

export default MyPage;

const MypageElement = styled.div`
    width: 100%;
    height: calc(100vh - 92px - 70px);
    background-color: #bdc3cd;
    padding-bottom: 20px;
    overflow-y: auto;

    .mypage {
        margin: 0 auto;
        width: 90%;
        height: calc(130vh - 70px);
        align-items: center;
        background-color: #ffffff;
        margin-top: 30px;
        margin-bottom: 30px;
        border-radius: 15px;

        .logout{
            .text{
                margin: 0 auto;
                direction: rtl;
                margin-top: -35px;
                margin-right: 15px;
            }
        }

        .title {
            margin: 20px 0px 0px 20px;
            font-size: 32px;
            font-weight: bold;
            padding-top: 20px;
        }

        .profile {
            margin: 20px 0px 20px 20px;
            display: flex;
            align-items: flex-start;

            h4 {
                font-size: 18px;
                margin: 0 auto;
            }

            p {
                font-size: 17px;
                margin: 0 auto;
                color: #666666;
                font-weight: bold;
            }

            .pro {
                width: 50px;
                margin-bottom: 20px;
                margin-right: 20px;
            }
        }

        .rireki {
            margin: 0 auto;
            width: 90%;
            height: 40%;
            align-items: center;
            background-color: #bdc3cd;
            border-radius: 15px;
            margin-bottom: 20px;

            .riretitle {
                margin-left: 20px;
                padding-top: 20px;
                font-size: 23px;
                font-weight: bold;
            }
        }
    }
`;
