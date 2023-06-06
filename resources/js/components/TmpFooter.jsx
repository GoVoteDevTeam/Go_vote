import styled from "styled-components";
const TmpFooter = () => {
	return (
		<TmpNav>
			<ul>
				<li>ニュース</li>
				<li>政党診断</li>
				<li>政党一覧</li>
				<li>デモ選挙</li>
			</ul>
		</TmpNav>
	)
}
export default TmpFooter;

const TmpNav = styled.nav`
	width: 100%;
	height: 80px;
	background-color: #36375F;
	position: absolute;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	ul {
		display: flex;
		list-style: none;
		justify-content: center;
		padding: 0;
		li {
			color: #fff;
			margin: 0 15px;
		}
	}
`;