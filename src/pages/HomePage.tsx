import styled from "styled-components";
import { NavLink } from "react-router-dom";

import BackToTop from "../components/BackToTopBtn";

import Avatar from "./../assets/media/Avatar.png"
import InsaneLuvLogo from "./../assets/media/insaneluv-white-logo.png"
import BgMoon from "./../assets/media/bg-moon.png"
import BgBlack from "./../assets/media/bg-black.png"
import BgWhite from "./../assets/media/bg-white.png"
import TelegramIcon from "./../assets/media/telegram-icon.svg"
import InstagramIcon from "./../assets/media/instagram-icon.svg"
import EmailIcon from "./../assets/media/email-icon.svg"
import CrossWhiteIcon from "./../assets/media/cross-w-icon.svg"
import CrossBlackIcon from "./../assets/media/cross-b-icon.svg"

import initProject from "./../assets/data/DesignProjects";



const HomePage = () => {
  return ( 
    <HomeWrapper>
      <MainBlock>
        <img src={InsaneLuvLogo} alt="InsaneLuvLogo" className="logo"/>
        <img src={Avatar} alt="Avatar" className="avatar"/>
        <MainContent>
          <MainTitle>
            <Name>
              <span className="rocker-w-64">Lemeshev Artem</span>
              <span className="rocker-w-64">Insane Luv</span>
            </Name>
            <Profession>
              <span className="rocker-w-64">Designer</span>
            </Profession>
          </MainTitle>
          <BlockDescription>
            <span className="bookman-w-20">
              ♱ Digital дизайнер с опытом более 3-ех лет.<br/>
              <br/>
              ♱ Инструменты: Adobe Photoshop, Figma<br/>
              <br/>
              ♱ Спектр задач: Логотипы, Айдентика, Брендинг, Баннеры, Презентации, Турниры, Обложки, Инфографика, Интерфейсы.
            </span>
          </BlockDescription>
          <BlockFooter>
            <Links>
              <LinkItem href="https://t.me/insaneluvvv">
                <img src={TelegramIcon} alt="TelegramIcon" />
                <a className="roboto-w-16" href="https://t.me/insaneluvvv">@insaneluvvv</a>
              </LinkItem>
              <LinkItem href="https://www.instagram.com/insaneluvvv/">
                <img src={InstagramIcon} alt="InstagramIcon" />
                <a className="roboto-w-16" href="https://www.instagram.com/insaneluvvv/">@insaneluvvv</a>
              </LinkItem>
              <LinkItem href="mailto:lemeshev.artem@insaneluv.ru">
                <img src={EmailIcon} alt="EmailIcon" />
                <a className="roboto-w-16" href="mailto:lemeshev.artem@insaneluv.ru">lemeshev.artem@insaneluv.ru</a>
              </LinkItem>
            </Links>
            <img src={CrossWhiteIcon} alt="CrossWhiteIcon" />
          </BlockFooter>
        </MainContent>
      </MainBlock>
      <ProjectsBlock>
        <ProjectsContent>
          <ProjectsTitle>
            <span className="rocker-b-64">Projects</span>
            <img src={CrossBlackIcon} alt="CrossBlackIcon" />
          </ProjectsTitle>
          <ProjectsList>
            {initProject.map(el => 
            <NavLink className="nav-link" to={el.link} onClick={() => {window.scrollTo({ top: 0, behavior: "instant" });}}>
              <ProjectCard>
                <ProjectName className="roboto-w-24">{el.name}</ProjectName>
                <img src={el.img} alt={el.name} />
                <ProjectTags className="roboto-w-16">
                  {el.tag.map(ob => <div>{ob}</div>)}
                </ProjectTags>
                <ProjectDesc className="roboto-w-18">{el.desc}</ProjectDesc>
              </ProjectCard>
            </NavLink>
          )}
          </ProjectsList>
        </ProjectsContent>
      </ProjectsBlock>
    </HomeWrapper>
   );
}

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const MainBlock = styled.image`
  display: flex;
  height: 100vh;
  width: 100%;
  background-image: url(${BgMoon});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  @media (max-width: 1600px) {
    height: 100%;
  }
  @media (max-width: 1060px) {
    flex-direction: column;
    height: 100%;
  }
  .logo{
    height: 100px;
    position: absolute;
    top: 50px;
    left: 355px;
    transform: translate(-50%, 0);
    @media (max-width: 1600px) {
      height: 80px;
      top: 50px;
      left: 200px;
      transform: translate(-50%, 0);
    }
    @media (max-width: 1060px) {
      height: 80px;
      top: 50px;
      left: 50%;
      transform: translate(-50%, 0);
    }
  }
  .avatar{
    height: 100vh;
    max-width: 100%;
    object-fit: cover;
    object-position: center center;
    @media (max-width: 1600px) {
      height: 100vh;
      width: 400px;
    }
    @media (max-width: 1060px) {
      height: 100vh;
      width: 100%;
      object-position: center center;
    }
  }
`;
const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  margin: 80px 100px;
  z-index: 1;
  @media (max-width: 1060px) {
    margin: 30px 40px;
    justify-content: start;
    width: auto;
  }
`;
const MainTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 1060px) {
    flex-direction: column;
    min-width: 100%;
    position: absolute;
    align-items: end;
    top: 100vh;
    right: 30px;
    transform: translate(0, -200%);
  }
`;
const Name = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 1060px) {
    align-items: end;
  }
`;
const Profession = styled.div`
  display: flex;
`;
const BlockDescription = styled.div`
  display: flex;
  @media (max-width: 1060px) {
    margin-bottom: 40px;
  }
  
`;
const BlockFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  img{
    @media (max-width: 1300px) {
      display: none;
    }
  }
`;
const Links = styled.div`
  display: flex;
  align-items: end;
  gap: 20px;
  flex-wrap: wrap;
`;
const LinkItem = styled.a`
  display: flex;
  align-items: center;
  img{
    display: block;
    margin-right: 10px;
    @media (max-width: 1060px) {
      width: 20px;
    }
  }
  
`;
const ProjectsBlock = styled.div`
  width: 100%;
  background-image: url(${BgWhite});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;
const ProjectsContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 80px 100px;
  @media (max-width: 1060px) {
    margin: 40px 10%;
  }
`;
const ProjectsTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
  align-items: center;
  img{
    @media (max-width: 1060px) {
      height: 50px;
    }
  }
`;
const ProjectsList = styled.div`
	display: flex;
  justify-content: center;
	flex-wrap: wrap;
	gap: 50px;
`;
const ProjectCard = styled.div`
  display: flex;
	flex-direction: column;
  padding: 20px 20px;


	/* background-color: #404040; */
	img {
		object-fit: cover;
		width: 100%;
		height: 200px;
		border-radius: 10px;
		margin-bottom: 20px;
	}
`;
const ProjectName = styled.div`
	display: flex;
	margin-bottom: 20px;
`;
const ProjectTags = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 5px;
	div {
		background-color: 0;
		color: #fff;
		border: 1px solid #fff;
		padding: 2px 8px;
		margin-right: 5px;
		border-radius: 15px;
		margin-bottom: 5px;
	}
`;
const ProjectDesc = styled.div`
	color: #dadada;
`;
 
export default HomePage;