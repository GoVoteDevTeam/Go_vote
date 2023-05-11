import { useState } from "react";
import styled from "styled-components";

const Politics = () => {
    return (
        <>
            <HeaderElement>

            </HeaderElement>
            <PoliticsPage>
                <div className="title">
                    政党早見表
                </div>
                <div className="political_party">
                    <div className="item">
                        ajfdfsn
                    </div>
                </div>
            </PoliticsPage>
        </>
    )

}

export default Politics;

const HeaderElement = styled.header`
    width: 100%;
    height: 92px;
    background-color: #36375F;
    margin-bottom: 100px;
`;

const PoliticsPage = styled.div`
    width: 100%;
    height: calc(100vh - 200px);
    background-color: #36375F;
    border-radius: 10px 10px 0 0;
    .title {
        padding: 30px;
        text-align: center;
        color: #fff;
        font-size:40px;
    }
    .item{
        height: 150px;
        width: 95%;
        background-color: #fff;
        margin:auto;
    }
`;
