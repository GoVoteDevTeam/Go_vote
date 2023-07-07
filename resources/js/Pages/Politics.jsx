import styled from "styled-components";
import data from "../components/Politics_data";
import Modal from "../components/Modal";
import VoteNotice from '../components/VoteNotice';

const Politics = () => {

    data.forEach((data)=> {
        console.log(data.name) ;
    });

    return (

        <>
            <PoliticsPage>
                <VoteNotice />
                <div className="mobile">
                    <div className="politics">
                        <div className="title">
                        政党早見表
                        </div>
                        <div className="scroll">
                            {data.map((item, index) => (
                            <div key={index} className="political_party">
                                <div className="item">
                                <div className="icon">
                                    <img className="img" src={`./img/${item.img}`} />
                                </div>
                                <div className="name">{item.name}</div>
                                </div>
                                <div id={`item2-${item.id}`} className="item2">
                                <Modal Politics_data={item} />
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="pc">
                    <div className="pc-politics">
                        <div className="pc-title">
                        政党早見表
                        </div>
                        <div className="pc-politics-box">
                            {data.map((item, index) => (
                            <div key={index} className="pc-political_party">
                                <div className="pc-item">
                                <div className="pc-icon">
                                    <img className="pc-img" src={`./img/${item.img}`} />
                                </div>
                                <div className="pc-name">{item.name}</div>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </PoliticsPage>
        </>
    )

}

export default Politics;

const PoliticsPage = styled.div`
    .pc {
        display: none;
    }
    width: 100%;
    height: calc(100vh - 92px - 80px);
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
            overflow-y: auto;
            height: calc(100vh - 390px);
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
                    overflow: hidden;
                }
            }
        }
    }
	@media all and (min-width: 500px) {
        height: 100vh;
        padding-bottom: 0px;
        overflow: auto;
        .mobile {
            display: none;
        }
        .pc {
            display: block;
            .pc-politics{
                .pc-title {
                    padding: 20px 20px 10px 20px;
                    text-align: left;
                    font-size:30px;
                    font-weight: bold;
                    color: #36375F;
                }
                .pc-politics-box{
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    .pc-political_party{
                        display: flex;
                        margin: 10px;
                        .pc-item{
                            width: 250px;
                            height: 250px;
                            border-radius: 30px;
                            margin-left: 10px;
                            background-color: #ffffffc3;
                            .pc-icon{
                                border-radius: 50%;
                                height: 60px;
                                width: 60px;
                                margin:8px auto;
                                .pc-img{
                                    border-radius:50%;
                                    height: 60px;
                                    width: 60px;
                                }
                            }
                            .pc-name{
                                text-align: center;
                            }
                        }
                    }
                }
            }
        }
    }
`;
