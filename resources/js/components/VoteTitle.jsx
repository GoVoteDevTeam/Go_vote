import styled from "styled-components";

const VoteTitle = ( { info } ) => {
	return (
		<TitleComponent>
			<h1>デモ選挙</h1>
			<div className="ballot-paper">
				<span>{info.title}</span>
			</div>
			<h3>{info.info}</h3>
		</TitleComponent>
	)
}

export default VoteTitle;

const TitleComponent = styled.div`
	text-align: center;
	h1 {
		margin: 0;
	}
	.ballot-paper {
		width: 110px;
  		height: 110px;
		border: 4px solid #000;
		background-color: #FFFFFF;
		margin: 0 auto;
		display: flex;
		justify-content: center;
		align-items: center;
		box-shadow: 3px 3px 3px rgba(0, 0, 0, 1);		
		span {
			color: #000;
			font-size: 20px;
			font-weight: 700;
		}
	}
`;