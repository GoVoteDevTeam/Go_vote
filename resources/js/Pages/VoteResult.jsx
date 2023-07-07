import styled from "styled-components";
import VoteTitle from "../components/VoteTitle";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto"; // 消さないで

const VoteResult = ({ vote_id, vote_data, politics }) => {
    const pageInfo = {
        title: "結果",
        info: "",
    };
    console.log(vote_id, vote_data, politics)

    let labelData = [];

    politics.forEach((element)=> {
        labelData = [...labelData, element.politics_name] ;
    })

    let mockData = [2008, 504, 1115, 823, 80, 20, 200, 10, 39, 59];

    const dataSum = mockData.reduce(
        (accumulator, currentValue) => accumulator + currentValue
    );

    const colorData = [
        "rgb(255, 99, 132)",     // Red
        "rgb(54, 162, 235)",     // Blue
        "rgb(255, 206, 86)",     // Yellow
        "rgb(75, 192, 192)",     // Teal
        "rgb(153, 102, 255)",    // Purple
        "rgb(255, 159, 64)",     // Orange
        "rgb(255, 255, 0)",      // Lime
        "rgb(128, 0, 128)",      // Magenta
        "rgb(0, 128, 128)",      // Aqua
        "rgb(128, 128, 0)"       // Olive
    ]

    const data = {
        labels: labelData,
        datasets: [
            {
                label: "得票数",
                data: mockData, // 仮の得票数
                backgroundColor: colorData,
                borderColor: colorData,
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
        indexAxis: "y",
        maintainAspectRatio: false, //これを追加
    };
    return (
        <>
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
        </>
    );
};

export default VoteResult;

const ResultPage = styled.div`
    background-color: #bdc3cd;
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
    @media all and (min-width: 500px) {
		height: 100vh;
	}
`;
