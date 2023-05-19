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
                        <div className="modal-001__wrap">
                            <input type="radio" id="modal-001__open" className="modal-001__open-input" name="modal-001__trigger"/>
                            <label htmlFor="modal-001__open" className="modal-001__open-label">開く</label>
                            <input type="radio" id="modal-001__close" name="modal-001__trigger"/>
                            <div className="modal-001">
                                <div className="modal-001__content-wrap">
                                    {/* <label htmlFor="modal-001__close" className="modal-001__close-label">×</label> */}
                                    <div className="modal-001__content">
                                        <div className="nameModal">自民党</div>
                                        <div className="iconModal"></div>
                                        <div className="detailModal">自民党は日本の主要政党で、経済重視、保守主義、安全保障強化、憲法改正、社会保障政策などを重視する党です。</div>
                                    </div>
                                </div>
                                <label htmlFor="modal-001__close">
                                    <div className="modal-001__background"></div>
                                </label>
                            </div>
                        </div>
                    </div>
                    {/* <Modal/> */}
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
            .modal-001__wrap {
                display: flex;
                justify-content: center;
                height: 100px;
                /* margin-right: 10px;
                background-color: #fff; */
                input {
                    display: none;
                }
                .modal-001__open-input:checked + label + input + .modal-001 {
                    display: block;
                    animation: modal-001-animation .6s;
                }
                .modal-001 {
                    position: fixed;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 9999;
                    display: none;
                    .modal-001__content-wrap {
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                        width: 80%;
                        max-width: 650px;
                        background-color: #fefefe;
                        z-index: 2;
                        border-radius: 5px;
                        .modal-001__close-label {
                            background-color: #777;
                            color: #fff;
                            border: 2px solid #fff;
                            border-radius: 20px;
                            width: 36px;
                            height: 36px;
                            line-height: 1.5;
                            text-align: center;
                            display: table-cell;
                            position: fixed;
                            top: -15px;
                            right: -2%;
                            z-index: 99999;
                            font-size: 1.4em;
                        }
                        .modal-001__content {
                            max-height: 50vh;
                            overflow-y: auto;
                            padding: 39px 45px 40px;
                            .nameModal{
                                text-align: center;
                                margin-bottom: 15px;
                                font-size: 35px;
                            }
                            .iconModal{
                                background-color:#eaff4c;
                                border-radius: 50%;
                                height: 120px;
                                width: 120px;
                                margin:0px auto;
                                margin-bottom: 30px;
                            }
                        }
                    }
                    .modal-001__background {
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 100%;
                        height: 100%;
                        background-color: rgba(0, 0, 0, .45);
                        z-index: 1;
                    }
                }
            }
        }
    }

    @keyframes modal-001-animation {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @media only screen and (max-width: 520px) {
        .modal-001__open-label {
            max-width: 90%;
            padding: .94em 2.1em .94em 2.6em;
        }

        /* .modal-001__close-label {
            top: -17px;
            right: -4%;
        } */

        .modal-001__content-wrap {
            width: 90vw;
        }

        .modal-001__content {
            padding: 33px 21px 35px;
            max-width: 100%;
        }
    }
`;
