import styled from "styled-components";
import data from "../components/Politics_data";
import Modal from "../components/Modal";

const Politics = () => {

    data.forEach((data)=> {
        console.log(data.name) ;
    });

    return (

        <>
            <HeaderElement>

            </HeaderElement>
            <PoliticsPage>
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
    height: 100%;
    background-color: #36375F;
    border-radius: 10px 10px 0 0;
    padding-bottom: 20px;
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

            // コメントアウト戻すと見た目は良くなるけどモーダルの中身もoverflow: hidden;で消えてしまう
            /* white-space: nowrap;
            text-overflow: ellipsis;    //機能してない
            overflow: hidden; */
        }
    }
`;
