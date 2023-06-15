import React, { useState } from 'react';
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

  
const MyPage = () => {
  return (
    <>
      <Header />
      <MypageElement>
          <div className="mypage">
            <div className="title">
              マイページ
            </div>

            <div className='profile'>
              プロフィール
            </div>

            <div className='rireki'>
              <div className='riretitle'>
                政党診断履歴
              </div>
              <hr></hr>
            </div>

          </div>
    </MypageElement>
    <Footer />
    </>
  );
}
 
export default MyPage;

const MypageElement = styled.div`
  width: 100%;
  height: calc(100vh - 92px - 70px);
  background-color: #BDC3CD;
  padding-bottom: 20px;
  overflow-y: auto;

.mypage{
  margin: 0 auto;
  width: 90%;
  height: calc(100vh - 92px - 70px);
  align-items: center;
  background-color: #FFFFFF;
  overflow-y: auto;
  margin-top: 30px;
  border-radius: 15px;
  }

.title{
  margin: 20px 0px 0px 20px;
  font-size: 32px;
  font-weight: bold;
}

.profile{
  margin: 30px 0px 20px 20px;
}

.rireki{
  margin: 0 auto;
  width: 90%;
  height: 45%;
  align-items: center;
  background-color: #BDC3CD;
  border-radius: 15px;
}

.riretitle{
  margin-left: 20px;
  padding-top: 20px;
  font-size: 23px;
  font-weight: bold;
}
`