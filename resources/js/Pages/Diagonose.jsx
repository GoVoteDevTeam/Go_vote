import styled from "styled-components";

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
