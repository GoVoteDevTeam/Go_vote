import styled from "styled-components";

const Footer = () => {
    return(
        <FooterElement>
          <div className="footer_nav_box">
            <ul className="footer_nav">
              <li><a href="">ニュース</a></li>
              <li><a href="">政党診断</a></li>
              <li><a href="">政党一覧</a></li>
              <li><a href="">デモ選挙</a></li>
            </ul>
        </div>  
        </FooterElement>
    )
}

export default Footer;

const FooterElement = styled.footer`
  width: 100%;
  height: 60px;
  text-align: center;
  margin: 0;
  padding: 0;
  background-color: #36375f;
  .footer_nav_box{
    width: 100%;
    height: 60px;
    display: flex;
  }
  .footer_nav{
    width: 100%;
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: center;
  }li{
    margin: auto;
    }a{
      font-size: 15px;
      color: white;
      text-decoration: none;
      }
`;