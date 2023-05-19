import styled from "styled-components";
import data from "../components/Politics_data";
import Modal from "../components/Modal";

const Politics = () => {
    // console.log(data);
    data.forEach((data)=> {
        console.log(data.name) ;
    });

    const Politicses = () => {
        return data.map((data)=>{
            return(
                <div className="">{data.name}</div>
            );
        })
    }

    return (

        <>
            {/* <Politicses /> */}
            <HeaderElement>

            </HeaderElement>
            <PoliticsPage>
                <div className="title">
                    政党早見表
                </div>
                <div className="political_party">
                    <div className="item">
                        <div className="icon"></div>
                        <div className="name">自民党</div>
                    </div>
                    <div className="item2">
                        <Modal/>
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
        padding: 20px;
        text-align: center;
        color: #fff;
        font-size:40px;
    }
    .political_party{
        display: flex;
        .item{
            width: 20%;
            height: 100px;
            /* margin-right: 10px; */
            margin-left: 10px;
            background-color: #ffffffc3;
            .icon{
                background-color:#eaff4c;
                border-radius: 50%;
                height: 60px;
                width: 60px;
                margin:8px auto;
            }
            .name{
                text-align: center;
            }
        }
        .item2{
            width: 80%;
            height: 100px;
            margin-right: 10px;
            background-color: #fff;
        }
    }
`;
