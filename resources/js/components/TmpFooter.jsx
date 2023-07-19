import { InertiaLink } from "@inertiajs/inertia-react";
import styled from "styled-components";
const TmpFooter = () => {
	return (
		<TmpNav>
			<ul>
				<li>
					<InertiaLink href="/news" className="tmp-link">ニュース</InertiaLink>
				</li>
				<li>
					<InertiaLink className="tmp-link">政党診断</InertiaLink>
				</li>
				<li><InertiaLink className="tmp-link">政党一覧</InertiaLink></li>
				<li><InertiaLink href="/demo_vote/start" className="tmp-link">デモ選挙</InertiaLink></li>
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
			margin: 0 15px;
			.tmp-link {
				text-decoration: none;
				color: #fff;
			}
		}
	}
`;