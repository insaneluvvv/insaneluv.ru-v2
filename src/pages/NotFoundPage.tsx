import styled from "styled-components";
import { NavLink } from "react-router-dom";

import InsaneLuvLogo from "./../assets/media/insaneluv-white-logo.png"

const NotFounPage = () => {
  return ( 
    <NotFoundWrapper>
      <NavLink to="/"><HomeLogo><img src={InsaneLuvLogo}/></HomeLogo></NavLink>
      <NotFoundContent>
        <p className="roboto-w-24">404</p>
        <span className="roboto-w-24">Not Found</span>
        <NavLink to="/">
          <button><span className="roboto-w-18">Вернуться на главную</span></button>
        </NavLink>
      </NotFoundContent>
    </NotFoundWrapper>
   );
}

const NotFoundWrapper = styled.div`
	display: flex;
  flex-direction: column;
	align-items: center;
  padding: 40px 10%;
	width: 80%;

`;
const HomeLogo = styled.div`
  margin-bottom: 100px;
  img{
    height: 120px;
  }
`;
const NotFoundContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  p{
    font-size: 64px;
  }
  button{
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #fff;
    border: 0;
    cursor: pointer;
    span{
      color: #151515;
    }
  }
`;
 
export default NotFounPage;