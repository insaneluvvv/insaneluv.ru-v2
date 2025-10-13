import styled from "styled-components";
import { NavLink } from "react-router-dom";

import InsaneLuvLogo from "./../assets/media/insaneluv-white-logo.png"

const NotFounPage = () => {
  return ( 
    <NotFoundWrapper>
      <HomeLogo><NavLink to="/"><img src={InsaneLuvLogo}/></NavLink></HomeLogo>
      <NotFoundContent>
        <p className="roboto-w-24">404</p>
        <span className="roboto-w-24">Not Found</span>
        <NavLink to="/">
          <button>Вернуться на главную</button>
        </NavLink>
      </NotFoundContent>
    </NotFoundWrapper>
   );
}

const NotFoundWrapper = styled.div`
	padding: 40px 10% 0 10%;
	width: 80%;
  display: flex;
  flex-direction: column;
	align-items: center;
  justify-content: center;
  
`;
const HomeLogo = styled.div`
  margin-bottom: 40px;
  img{
    display: flex;
    justify-content: center;
    width: 200px;
  }
`;
const NotFoundContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 20px;
  p{
    font-size: 64px;
  }
`;
 
export default NotFounPage;