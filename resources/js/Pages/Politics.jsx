import styled from "styled-components";
import data from "../components/Politics_data";
import Modal from "../components/Modal";

const Politics = () => {
    // console.log(data);
    const loopCount = 10;

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
            width: 80%;
            height: 100px;
            margin-right: 10px;
            background-color: #fff;
        }
    }
`;
