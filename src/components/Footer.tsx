import styled from "styled-components";
import { FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";

const Footer = () => {
  return ( 
    <FooterWrapper>
      <span className="tag-w-16">// Лемешев Артем //</span>
      <Socials>
        <a href="https://t.me/insaneluvvv" target="_blank"><FaTelegram size={30} color="#fff" /></a>  
        <a href="https://github.com/insaneluvvv" target="_blank"><FaGithub size={30} color="#fff" /></a>
        <a href="mailto:lemeshev.artem@insaneluv.ru" target="_blank"><ImMail4 size={30} color="#fff" /></a>
      </Socials>
    </FooterWrapper>
   );
}

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  height: 100px;
  background-color: #151515;
  color: #909090;
  padding: 0 5%;
  margin-top: 50px;
  @media (max-width: 800px) {
    flex-direction: column;
    padding: 20px 5%;
  }
`;

const Socials = styled.div`
  display: flex;
  justify-content: space-between;
  width: 110px;
`;

export default Footer;