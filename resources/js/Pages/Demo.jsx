import { useState } from "react";
import styled from "styled-components";

const Demo = () => {
    const [count, setCount] = useState(0);

    const handleClick = () =>  {
        let counts = count + 1;
        setCount(counts);
    }

    return (
        <>
            <HeaderElement>

            </HeaderElement>
            <DemoPage>
                <div className="title">
                    ニュース count: {count}
                </div>
                <button onClick={handleClick}>
                    ここをクリック
                </button>
            </DemoPage>
        </>
    )

}

export default Demo;

const HeaderElement = styled.header`
    width: 100%;
    height: 92px;
    background-color: #36375F;
    margin-bottom: 100px;
`;

const DemoPage = styled.div`
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