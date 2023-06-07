import styled from "styled-components";
import { InertiaLink } from "@inertiajs/inertia-react";

const VoteNotice = () => {

	return (
		<>
			<NoticeElement>
				<div className="title">
					<h1>デモ選挙</h1>
				</div>
				<InertiaLink className="start-button" href={"/demo_vote/start"}>
					<div className="try-button">
						<span>TRY !</span>
					</div>
				</InertiaLink>
			</NoticeElement>
		</>
	)
}
export default VoteNotice;

const NoticeElement = styled.div`
	.title {
		text-align: center;
		h1 {
			margin: 5px;
		}
	}
	.start-button {
		text-decoration: none;
		color: #000;
		.try-button {
			width: 75px;
			height: 75px;
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
`