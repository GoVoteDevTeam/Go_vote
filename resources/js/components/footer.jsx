import { InertiaLink } from "@inertiajs/inertia-react";
import styled from "styled-components";

const Footer = () => {
    return(
        <FooterElement>
          <div className="footer_nav_box">
            <ul className="footer_nav">
              <li><InertiaLink href={"/news"} className="footer_link">ニュース</InertiaLink></li>
              <li><InertiaLink href={"/"} className="footer_link">政党診断</InertiaLink></li>
              <li><InertiaLink href={"/politics"} className="footer_link">政党一覧</InertiaLink></li>
              <li><InertiaLink href={"/demo_vote/start"} className="footer_link">デモ選挙</InertiaLink></li>
            </ul>
        </div>  
        </FooterElement>
    )
}

export default Footer;

const FooterElement = styled.footer`
  width: 100%;
  height: 80px;
  text-align: center;
  position: absolute;
  bottom: 0;
  margin: 0;
  padding: 0;
  background-color: #36375f;
  .footer_nav_box{
    width: 100%;
    height: 80px;
    display: flex;

    .footer_nav{
      width: 100%;
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      text-align: center;

      li{
        margin: auto;

        .footer_link{
          font-size: 15px;
          color: white;
          text-decoration: none;
        }
      }
    }
  }
`;