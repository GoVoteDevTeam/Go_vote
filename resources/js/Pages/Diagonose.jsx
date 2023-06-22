import styled from "styled-components";
import data from "../components/diagonos";
import Header from "../components/Header";
import { useState } from "react";
import Footer from "../components/footer";
import VoteNotice from '../components/VoteNotice';

const questions = [
  {
    number: "1",
    title: "経済",
    question: "国民への給付金に対してどう思うか？",
    answer1: "国民一律に必要である。",
    answer2: "部分的に必要である。",
    answer3: "不要である",
    answer4: "特になし"
  },
  {
    number: "2",
    title: "財政・税制",
    question: "財政・税制に対してどう思うか？",
    answer1: "PB黒字化破壊",
    answer2: "PB黒字化見直し",
    answer3: "PB黒字化維持",
    answer4: "特になし"
  },
  {
    number: "3",
    title: "子育て・教育",
    question: "幼児教育の無償化",
    answer1: "完全無償化",
    answer2: "段階的無償化",
    answer3: "条件付き無償化",
    answer4: "特になし"
  },
  {
    number: "4",
    title: "日米同盟",
    question: "日米関係についてどう思うか？",
    answer1: "対米自立",
    answer2: "同盟維持",
    answer3: "PB黒字化維持",
    answer4: "特になし"
  },
];

const Diagnose = () => {
  data.forEach((data) => {
    console.log(data.name);
  });

  const Politicses = () => {
    return data.map((data) => {
      return <div className="">{data.name}</div>;
    });
  };

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");

  const handleNextQuestion = () => {
    setSelectedOption("");
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <Header />
      <DiagnosePage>
        <VoteNotice />
        <div className="Diagnose">
          <div className="title">政党診断</div>
          <div className="sub_title">Question!</div>

          <div className="question">
            {currentQuestion < questions.length ? (
              <>
                <h1>{questions[currentQuestion].number}</h1>
                <h2>{questions[currentQuestion].title}</h2>
                <p>{questions[currentQuestion].question}</p>
                <p>
                  <input
                    type="radio"
                    name="option"
                    value="option1"
                    checked={selectedOption === "option1"}
                    onChange={handleOptionChange}
                  />
                  {questions[currentQuestion].answer1}
                </p>
                <p>
                  <input
                    type="radio"
                    name="option"
                    value="option2"
                    checked={selectedOption === "option2"}
                    onChange={handleOptionChange}
                  />
                  {questions[currentQuestion].answer2}
                </p>
                <p>
                  <input
                    type="radio"
                    name="option"
                    value="option3"
                    checked={selectedOption === "option3"}
                    onChange={handleOptionChange}
                  />
                  {questions[currentQuestion].answer3}
                </p>
                <button onClick={() => handleNextQuestion()}>次の問題へ</button>
              </>
            ) : (
              <p>お疲れ様でした。問題は以上です。</p>
            )}
          </div>
        </div>
      </DiagnosePage>
      <Footer />
    </>
  );
};

export default Diagnose;

const DiagnosePage = styled.div`
  width: 100%;
  height: calc(100vh - 92px - 70px);
  background-color: #bdc3cd;
  padding-bottom: 20px;
  overflow-y: auto;
  .Diagnose {
    background-color: #36375f;
    border-radius: 35px 35px 0px 0px;
    margin-top: 20px;
    padding-bottom: 20px;
    .title {
      padding: 10px;
      text-align: center;
      color: #fff;
    }
    .sub_title {
      text-align: center;
      color: #fff;
    }

    .question {
      text-align: center;
      color: #fff;
    }
  }
`;
