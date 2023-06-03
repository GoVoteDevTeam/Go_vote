import styled from "styled-components";
import React, {useState} from "react";


const Deagonos = () => {
    
    return (
        <>
            <HeaderElement>

            </HeaderElement>
            <DeagonosPage>
                <div className="title">
                    政党診断
                </div>
                <div className="qestion">
                    Qestion!
                </div>
                    <h2>質問1: 政府の役割についてどう考えますか？</h2>
                    <label>
                        <input type="radio" name="q1" value="1" /> 強力な中央集権が必要だ
                    </label>
                    <label>
                        <input type="radio" name="q1" value="2"  /> 適度な中央集権が必要だ
                    </label>
                    <label>
                        <input type="radio" name="q1" value="3" /> 分権化が必要だ
                    </label>
                    <br />
                
                    <h2>質問2: 税制についてどのように考えますか？</h2>
        <           label>
                        <input type="radio" name="q2" value="1" /> 高い税金を支持する
                    </label>
                    <label>
                        <input type="radio" name="q2" value="2" /> 適切な税金を支持する
                    </label>
                    <label>
                        <input type="radio" name="q2" value="3"/> 低い税金を支持する
                    </label>
                    <br />


                
            </DeagonosPage>
        </>
    )

}


export default Deagonos;

const HeaderElement = styled.header`
    width: 100%;
    height: 92px;
    background-color: #36375F;
    margin-bottom: 100px;
`;

const DeagonosPage = styled.div`
    width: 100%;
    height: calc(100vh - 200px);
    background-color: #36375F;
    border-radius: 10px 10px 0 0;
    .title {
        padding: 10px;
        text-align: center;
        color: #fff;
    }
    .qestion {
        text-align: center;
        color: #fff;
    }
`;
