import styled from "styled-components";


import { InertiaLink, usePage } from '@inertiajs/inertia-react';


const DemoVote = ({ vote, history, lastVote }) => {

    const checkAlreadyVote = (history) => {
        return history.length !== 0;
    }

    let isAlreadyVote = checkAlreadyVote(history);

	console.log(lastVote)

    return (
        <>
            <DemoVoteStartPage>
                <InertiaLink href={"/demo_vote/result_list"} className="tmp"> 結果表示</InertiaLink>
                <div className="title">
                    <h1>デモ選挙</h1>
                    <p>あなたの投票が、若者の意識を変える</p>
                </div>

                {isAlreadyVote ?
                    <div className="finish-button" tabIndex={-1}>
                        <div className="try-button">
                            <span>投票済み</span>
                        </div>
                    </div>
                    :
                    <InertiaLink className="start-button" href={"/demo_vote/ballots"} >
                        <div className="try-button">
                            <span>TRY !</span>
                        </div>
                    </InertiaLink>
                }


                <div className="date">
                    <div className="election-day">
                        <h3>投票日</h3>
                        <p>{vote.start_date}~</p>
                    </div>
                    <div className="vote-counting-day">
                        <h3>開票日</h3>
                        <p>{vote.finish_date}</p>
                    </div>
                </div>

            </DemoVoteStartPage>
        </>
    );
}
export default DemoVote;

const DemoVoteStartPage = styled.div`
	background-color: #BDC3CD;
	width: 100%;
	height: calc(100vh - 92px - 80px);
	overflow-y: auto;
    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-thumb {
        background: rgb(232, 232, 232, 0.5);
        border-radius: 10px;
    }
    .tmp {
        display: block;
        opacity: 0.2;
    }

    .title {
		width: 80%;
		height: 15vh;
		margin: 0 auto;
		text-align: center;
		display: block;
		padding: 100px 0px 0px 0;
		h1 {
			margin: 0;
		}
	}

    .start-button {
		text-decoration: none;
		color: #000;
		.try-button {
			width: 110px;
			height: 110px;
			border: 4px solid #000;
			background-color: #FFFFFF;
			margin: 0 auto;
			display: flex;
			justify-content: center;
			align-items: center;
			transform: translate(-2px, -2px);
			box-shadow: 3px 3px 3px rgba(0, 0, 0, 1);

			span {
				color: #000;
				font-size: 20px;
				font-weight: 700;
			}

			:hover {
				transform: translate(0px, 0px);
				box-shadow: none;
			}
		}
	}
    .finish-button {
		text-decoration: none;
		color: #000;
		.try-button {
			width: 110px;
			height: 110px;
			border: 4px solid #000;
			background-color: #8d8d8d;
			margin: 0 auto;
			display: flex;
			justify-content: center;
			align-items: center;

			span {
				color: #000;
				font-size: 20px;
				font-weight: 700;
			}
		}
	}

	.date {
		width: 70%;
		height: 20vh;
		margin: 50px auto;
		text-align: center;
		.election-day {
			h3 {
				margin: 30px 0 10px 0;
			}
		}
		.vote-counting-day {
			h3 {
				margin-bottom: 20px 0 10px 0;
			}
		}
	}
	@media all and (min-width: 500px) {
		height: 100vh;
	}
`;
