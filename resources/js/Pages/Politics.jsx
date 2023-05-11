import { useState } from "react";
import styled from "styled-components";

const Politics = () => {
    const [count, setCount] = useState(0);

    const handleClick = () =>  {
        let counts = count + 1;
        setCount(counts);
    }

    return (
        <>
            <HeaderElement>

            </HeaderElement>
            <PoliticsPage>
                <div className="title">
                    政党早見表
                </div>
                <button onClick={handleClick}>
                    ここをクリック
                </button>
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
        padding: 10px;
        text-align: center;
        color: #fff;
    }
`;
