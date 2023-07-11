import { InertiaLink } from "@inertiajs/inertia-react";
import styled from "styled-components";
import logo from "../../../public/logo.png"

const Footer = () => {
    return(
        <FooterElement>
          <img className="footer-logo" src={logo} alt="" />
          <div className="footer-nav-box">
            <ul className="footer-nav">
              <li><InertiaLink href={"/news"} className="footer-link">ニュース</InertiaLink></li>
              <li><InertiaLink href={"/diagonose"} className="footer-link">政党診断</InertiaLink></li>
              <li><InertiaLink href={"/politics"} className="footer-link">政党一覧</InertiaLink></li>
              <li><InertiaLink href={"/demo_vote/start"} className="footer-link">デモ選挙</InertiaLink></li>
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
  .footer-logo {
    display: none;
  }
  .footer-nav-box{
    width: 100%;
    height: 80px;
    display: flex;

    .footer-nav{
      width: 100%;
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      text-align: center;

      li{
        margin: auto;

        .footer-link{
          font-size: 15px;
          color: white;
          text-decoration: none;
        }
      }
    }
  }
  
  @media all and (min-width: 500px) {
    width: 20%;
    position: static;
    height: 100vh;
    .footer-logo {
      width: 100px;
      display: block;
      margin: 0 auto;
    }
    .footer-nav-box {
      display: block; 
      .footer-nav{
        display: block;
        li {
          margin: 10px 0;
        }
      }
    }
  }
`;
