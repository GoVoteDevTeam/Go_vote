import styled from "styled-components";
import data from "../components/diagonos";
import Header from "../components/Header";
import { useState } from "react";

const questions = [
    {
        number: "1",     //政党名
        title: "経済",       //キャッチコピー
        question: "国民への給付金に対してどう思うか？", //詳細
        answer1: "国民一律に必要である。",
        answer2: "部分的に必要である。",
        answer3: "不要である",
        answer4: "特になし"
    },
    {
        number: "2",     //政党名
        title: "財政・税制",       //キャッチコピー
        question: "財政・税制に対してどう思うか？", //詳細
        answer1: "PB黒字化破壊",
        answer2: "PB黒字化見直し",
        answer3: "PB黒字化維持",
        answer4: "特になし"
    },
    {
        number: "3",     //政党名
        title: "子育て・教育",       //キャッチコピー
        question: "幼児教育の無償化", //詳細
        answer1: "完全無償化",
        answer2: "段階的無償化",
        answer3: "条件付き無償化",
        answer4: "特になし"
    },
    {
        number: "4",     //政党名
        title: "日米同盟",       //キャッチコピー
        question: "日米関係についてどう思うか？",      //詳細
        answer1: "対米自立",
        answer2: "同盟維持",
        answer3: "PB黒字化維持",
        answer4: "特になし"     
    },
];

const diagonose = () => {
    data.forEach((data) => {
        console.log(data.name);
    });

    const Politicses = () => {
        return data.map((data) => {
            return <div className="">{data.name}</div>;
        });
    };

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handleNextQuestion = () => {
        setCurrentQuestion(currentQuestion + 1);
    };

    return (
        <>
            <Header />
            <DiagonosPage>
                <div className="karioki"></div>
                <div className="title">政党診断</div>
                <div className="sub_title">Question!</div>

                <div className="question">
                    {currentQuestion < questions.length ? (
                        <>
                            <h1>{questions[currentQuestion].number}</h1>
                            <h2>{questions[currentQuestion].title}</h2>
                            <p>{questions[currentQuestion].question}</p>
                            <p><input type="radio" />{questions[currentQuestion].answer1}</p>
                            <p><input type="radio" />{questions[currentQuestion].answer2}</p>
                            <p><input type="radio" />{questions[currentQuestion].answer3}</p>
                            <button onClick={() => handleNextQuestion()}>
                                次の問題へ
                            </button>
                        </>
                    ) : (
                        <p>お疲れ様でした。問題は以上です。</p>
                    )}
                </div>
            </DiagonosPage>
            r
        </>
    );
};

export default diagonose;

const DiagonosPage = styled.div`
    width: 100%;
    height: calc(1300px - 200px);
    background-color: #36375f;
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
    
    .karioki {
        margin: 300px;
    }
    .question {
        text-align: center;
        color: #fff;
    }
`;