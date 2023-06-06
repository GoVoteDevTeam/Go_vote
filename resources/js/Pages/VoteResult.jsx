import styled from "styled-components";
import Header from "../components/Header";
import TmpFooter from "../components/TmpFooter";
import VoteTitle from "../components/VoteTitle";
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // 消さないで

const VoteResult = () => {
    const pageInfo = {
        title: "結果",
        info: ""
    }

    let mockData = [ 2008, 504, 1115, 823, 80, 20 ]

    const dataSum = mockData.reduce((accumulator, currentValue) => accumulator + currentValue)

    const data = {
        labels: ['自由民主党','公明党', '立憲民主党', '日本維新の会', '国民民主党', '共産党'],
        datasets: [
          {
            label: '得票数',
            data: mockData, // 仮の得票数
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 206, 86)',
              'rgb(75, 192, 192)',
              'rgb(153, 102, 255)',
              'rgb(153, 102, 255)',
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 206, 86)',
              'rgb(75, 192, 192)',
              'rgb(153, 102, 255)',
              'rgb(153, 102, 255)',
            ],
            borderWidth: 1,
          },
        ],
      };

      const options = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        indexAxis: 'y',
        maintainAspectRatio: false //これを追加

      };
    return (
        <>
            <Header />
            <ResultPage>
                <VoteTitle info={pageInfo} />
                <div className="result">
                    <div className="total-number">
                        <h3>得票数{dataSum}票</h3>
                    </div>
                    <div className="result-bar">
                        <Bar data={data} options={options} />
                    </div>
                </div>
            </ResultPage>
            <TmpFooter />
        </>
    )
}

export default VoteResult;

const ResultPage = styled.div`
    background-color: #BDC3CD;
	width: 100%;
	height: calc(100vh - 92px - 80px);
	overflow-y: auto;
    padding-top: 20px;
    .result {
        margin: 20px auto;
        background-color: #fff;
        width: 90%;
        margin-bottom: 40px;
        .total-number {
            padding: 5px;
            text-align: center;
        }
        .result-bar {
            height: 600px;
        }
    }
`

