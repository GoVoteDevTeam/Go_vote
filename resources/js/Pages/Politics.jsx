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
                    <div className="item"><div className="icon"></div></div>
                    <div className="item2"></div>
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
        padding: 20px;
        text-align: center;
        color: #fff;
        font-size:40px;
    }
    .political_party{
        display: flex;
    }
    .item{
        width: 20%;
        height: 100px;
        /* margin-right: 10px; */
        margin-left: 10px;
        background-color: #ffffffc3;
        .icon{
            background:
        }
    }
    .item2{
        width: 80%;
        height: 100px;
        margin-right: 10px;
        /* margin-left: 10px; */
        background-color: #fff;
    }
`;
