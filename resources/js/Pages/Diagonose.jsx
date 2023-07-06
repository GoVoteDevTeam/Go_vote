import React, { useState } from "react";
import styled from "styled-components";
import data from "../components/diagonos";
import VoteNotice from "../components/VoteNotice";

const questions = [
  {
    number: "1",
    title: "経済",
    question: "国民への給付金に対してどう思うか？",
    answer1: "国民一律に必要である。",
    answer2: "部分的に必要である。",
    answer3: "不要である",
    answer4: "特になし",
  },
  {
    number: "2", //政党名
    title: "財政・税制", //キャッチコピー
    question: "財政・税制に対してどう思うか？", //詳細
    answer1: "PB黒字化破壊",
    answer2: "PB黒字化見直し",
    answer3: "PB黒字化維持",
    answer4: "特になし",
  },
  {
    number: "3", //政党名
    title: "子育て・教育", //キャッチコピー
    question: "幼児教育の無償化", //詳細
    answer1: "完全無償化",
    answer2: "段階的無償化",
    answer3: "条件付き無償化",
    answer4: "特になし",
  },
  {
    number: "4", //政党名
    title: "日米同盟", //キャッチコピー
    question: "日米関係についてどう思うか？", //詳細
    answer1: "対米自立",
    answer2: "同盟維持",
    answer3: "PB黒字化維持",
    answer4: "特になし",
  },
];

const Diagnose = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [error, setError] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [result, setResult] = useState(null);

  const handleNextQuestion = () => {
    if (!selectedOptions[currentQuestion]) {
      setError(true);
      return;
    }

    setError(false);
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [currentQuestion]: selectedOptions[currentQuestion],
    }));

    if (currentQuestion === questions.length - 1) {
      setShowResults(true);
      calculateResult();
    } else {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    }
  };

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [currentQuestion]: value,
    }));
  };

  const calculateResult = () => {
    const answerCounts = {
      option1: 0,
      option2: 0,
      option3: 0,
      option4: 0,
    };

    // 選択されたオプションを数える
    Object.values(selectedOptions).forEach((option) => {
      answerCounts[option]++;
    });

    let maxCount = 0;
    let result = null;

    // 最も選択されたオプションを見つける
    Object.entries(answerCounts).forEach(([option, count]) => {
      if (count > maxCount) {
        maxCount = count;
        result = option;
      }
    });

    setResult(result);
  };

  return (
    <>
      <DiagnosePage>
        <VoteNotice />
        <div className="Diagnose">
          <div className="title">政党診断</div>
          <div className="sub_title">Question!</div>

          <div className="question">
            {showResults ? (
              <ResultContainer>
                <h1>診断結果</h1>
                <p>
                  あなたの選んだ政策にもっとも近い政党は{" "}
                  {result ? data[result]?.name : "ありません"} です。
                </p>
                <p>お疲れ様でした。問題は以上です。</p>
              </ResultContainer>
            ) : (
              <>
                <h1>{questions[currentQuestion].number}</h1>
                <h2>{questions[currentQuestion].title}</h2>
                <p>{questions[currentQuestion].question}</p>
                <OptionContainer>
                  <label>
                    <input
                      type="radio"
                      name="option"
                      value="option1"
                      checked={selectedOptions[currentQuestion] === "option1"}
                      onChange={handleOptionChange}
                    />
                    {questions[currentQuestion].answer1}
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="option"
                      value="option2"
                      checked={selectedOptions[currentQuestion] === "option2"}
                      onChange={handleOptionChange}
                    />
                    {questions[currentQuestion].answer2}
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="option"
                      value="option3"
                      checked={selectedOptions[currentQuestion] === "option3"}
                      onChange={handleOptionChange}
                    />
                    {questions[currentQuestion].answer3}
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="option"
                      value="option4"
                      checked={selectedOptions[currentQuestion] === "option4"}
                      onChange={handleOptionChange}
                    />
                    {questions[currentQuestion].answer4}
                  </label>
                </OptionContainer>
                {error && <ErrorText>一つ選んで下さい。</ErrorText>}
                <button onClick={handleNextQuestion}>次の問題へ</button>
              </>
            )}
          </div>
        </div>
      </DiagnosePage>
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
  .Diagnose{
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

const ResultContainer = styled.div`
  text-align: center;
  color: #fff;
  padding: 20px;
`;

const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  label {
    margin-bottom: 10px;

    input[type="radio"] {
      margin-right: 10px;
    }
  }
`;

const ErrorText = styled.p`
  color: red;
  margin-top: 10px;
`;
