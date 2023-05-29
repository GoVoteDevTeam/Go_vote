import styled from "styled-components";
import logo from "../../../public/logo.png"


const Header = () => {
    return(
    

        <HeaderElement>
          <div class="logo-container">
            <img className="logo" src={logo}/>
          </div>

          <div class="icon-container">
            <div className="icon"></div>
          </div>
        </HeaderElement>
    )
}

export default Header;

const HeaderElement = styled.header`
        width: 100%;
        height: 100px;
        position: relative;
        text-align: center;
        align-items: center;
        margin: 0;
        padding: 0;
        background-color: #36375f;
        display: flex;
        .logo-container{
          width: 100%;
          text-align: center;
          position: absolute;
        }
        .logo {
          height: 100px;
        }
        .icon-container{
          width: 100%;
          position: absolute;
        }
        .icon {
          float: right;
          width: 50px;
          height: 50px;
          margin-right: 15px;
          padding: 0;
          border-radius: 50%;
          background-color: white;
        }
        
`;