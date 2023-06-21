import styled from "styled-components";
import data from "../components/Politics_data";
import Modal from "../components/Modal";
import Header from "../components/Header";
import Footer from "../components/Footer";
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
                    </div>
                    <div className="scroll">
                        {data.map((item, index) => (
                        <div key={index} className={`political_party ${index === data.length - 1 ? 'last' : ''}`}>
                            <div className="item">
                            <div className="icon">
                                <img className="img" src={`./img/${item.img}`} />
                            </div>
                            <div className="name">{item.name}</div>
                            </div>
                            <div id="item2" className="item2">
                            <Modal Politics_data={item} />
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </PoliticsPage>

            <Footer />
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
    overflow: hidden;
    .politics{
        background-color: #36375F;
        border-radius: 35px 35px 0px 0px;
        margin-top: 20px;
        .title {
            padding: 20px 20px 10px 20px;
            text-align: center;
            color: #fff;
            font-size:20px;
        }
        .scroll{
            overflow-y: scroll;
            max-height: 461px;
            ::-webkit-scrollbar {
                width: 5px;
            }
            ::-webkit-scrollbar-thumb {
                background: rgb(232, 232, 232, 0.5);
                border-radius: 10px;
            }
            .political_party{
                display: flex;
                margin: 10px;
                .item{
                    width: 190px;
                    height: 100px;
                    /* margin-right: 10px; */
                    margin-left: 10px;
                    background-color: #ffffffc3;
                    .icon{
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
                    width: 100%;
                    height: 100px;
                    margin-right: 10px;
                    background-color: #fff;
                    /* white-space: pre-wrap; */
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
            .political_party.last{
                display: flex;
                margin: 10px;
                margin-bottom: 11%;
            }
        }
    }

`;
