import React, { useState } from "react";
import styled from "styled-components";
import data from "../components/Politics_data";
import Modal from "../components/Modal";

const Politics = () => {
    const [selectedParty, setSelectedParty] = useState(null);

    const openModal = (party) => {
      setSelectedParty(party);
    };
  
    const closeModal = () => {
      setSelectedParty(null);
    };

    return (
        <>       
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
y            </PoliticsPage>
        </>
    )
}

export default Politics;

const PoliticsPage = styled.div`
    .pc {
        display: none;
    }
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
            height: 600px;
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

const ModalWrap = styled.div`
  .modal__overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
  }

  .modal__content {
    background-color: #fefefe;
    border-radius: 5px;
    padding: 20px;
    max-width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 15;
  }

  .iconModal {
    border-radius: 50%;
    height: 120px;
    width: 120px;
    margin-bottom: 30px;
    overflow: hidden;
    border: solid 4px #ff6347;
        .img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
  }
  .modal__close {
    position: absolute;
    top: -18px;
    right: -18px;
    cursor: pointer;
    background-color: #777;
    border: 2px solid #fff;
    border-radius: 25px;
    width: 36px;
    height: 36px;
    line-height: 1.5;
    .modal__closetext{
        margin: 0px 0px 0px 9px;
        font-size: 1.4em;
        color: #fff;
    }
  }
`;
