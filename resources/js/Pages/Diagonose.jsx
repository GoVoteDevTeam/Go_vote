import styled from "styled-components";
import React, {useState} from "react";
import data from "../components/diagonos";
import Header from "../components/Header"


const diagonose = () => {

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
            <Header />
            <DiagonosPage>
                <div className="title">
                    政党診断
                </div>
                <div className="sub_title">
                    Question!
                </div>
                {data.map((item, index) => (
                    <div key={index} className="question_date">
                        <div className="question">{item.number}</div>
                        <div className="question_title">{item.title}</div>
                        <div className="quetion">{item.question}</div>
                        <div className="answer1"><button></button>{item.answer1}</div>
                        <div className="answer2"><button></button>{item.answer2}</div>
                        <div className="answer3"><button></button>{item.answer3}</div>
                    </div>
                ))}
            </DiagonosPage>
        </>
    )

}


export default diagonose;

const DiagonosPage = styled.div`
    width: 100%;
    height: calc(1500px - 200px);
    background-color: #36375F;
    border-radius: 10px 10px 0 0;
    .title {
        padding: 10px;
        text-align: center;
        color: #fff;
    }
    .sub_title {
        text-align: center;
        color: #fff;
    }
    .question_date {
        text-align: center;
        color: #fff;
        padding-bottom: 50px;
    }
`;
