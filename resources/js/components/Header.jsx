import styled from "styled-components";
import logo from "../../../public/logo.png"


const Header = () => {
    return(
    

        <HeaderElement>
          <img className="logo" src={logo}/>

          <div className="icon"></div>
          
        </HeaderElement>
    )
}

export default Header;

const HeaderElement = styled.header`
        width: 100%;
        height: 100px;
        text-align: center;
        align-items: center;
        margin: 0;
        padding: 0;
        background-color: #36375f;
        display: flex;
        .logo {
          height: 100px;
          margin-left: 45%;
        }
        .icon {
          top: 20px;
          right: 20px;
          width: 50px;
          height: 50px;
          margin: 0;
          margin-left: 32%;
          padding: 0;
          border-radius: 50%;
          background-color: white;
        }
        
`;