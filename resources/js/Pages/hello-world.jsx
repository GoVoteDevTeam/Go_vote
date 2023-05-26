import styled from "styled-components";
import Header from "../components/Header"

export default function HelloWorld() {
    return (
        <>
            <Header />
            <BodyElement>
            <div>
                <div className="testCakse"></div>
            </div>
            </BodyElement>
        </>
    );
}

const BodyElement = styled.body`
    width: 100%;
    height: 700px;
`