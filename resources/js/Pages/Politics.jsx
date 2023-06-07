import styled from "styled-components";
import data from "../components/Politics_data";
import Modal from "../components/Modal";
import Header from "../components/Header";
import TmpFooter from "../components/TmpFooter";
import VoteNotice from '../components/VoteNotice';

const Politics = () => {

    data.forEach((data)=> {
        console.log(data.name) ;
    });

    return (

        <>
            <Header />
            
            <PoliticsPage>
                <VoteNotice />
                <div className="politics">
                    <div className="title">
                        政党早見表
                    </div>;
                    {data.map((item, index) => (
                        <div key={index} className="political_party">
                            <div className="item">
                            <div className="icon">
                                <img className="img" src={`./img/${item.img}`} />
                            </div>
                            <div className="name">{item.name}</div>
                            </div>
                            <div className="item2">
                            <Modal Politics_data={item} />
                            </div>
                        </div>
                    ))}
                </div>
            </PoliticsPage>
            <TmpFooter />
        </>
    )

}

export default Politics;

const PoliticsPage = styled.div`
    width: 100%;
    height: calc(100vh - 92px - 70px);
    background-color: #BDC3CD;
    padding-bottom: 20px;
    overflow-y: auto;
    .politics{
        background-color: #36375F;
        border-radius: 35px 35px 0px 0px;
        margin-top: 20px;
        .title {
            padding: 20px;
            text-align: center;
            color: #fff;
            font-size:40px;
        }
        .political_party{
            display: flex;
            margin: 10px;
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
                    .img{
                        border-radius:50%;
                        height: 60px;
                        width: 60px;
                    }
                }
                .name{
                    text-align: center;
                }
            }
            .item2{
                display: flex;
                align-items: center;
                width: 80%;
                height: 100px;
                margin-right: 10px;
                background-color: #fff;
                white-space: pre-wrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
`;
