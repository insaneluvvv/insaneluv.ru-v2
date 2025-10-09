import styled from "styled-components";

import TelegramIcon from "./../assets/media/telegram-icon.svg"
import InstagramIcon from "./../assets/media/instagram-icon.svg"
import EmailIcon from "./../assets/media/email-icon.svg"


const Footer = () => {
  return ( 
    <FooterWrapper>
      <span className="bookman-w-20">// Лемешев Артем //</span>
      <Socials>
        <a href="https://t.me/insaneluvvv" target="_blank"><img src={TelegramIcon} alt="TelegramIcon" /></a>  
        <a href="https://www.instagram.com/insaneluvvv/" target="_blank"><img src={InstagramIcon} alt="InstagramIcon" /></a> 
        <a href="mailto:lemeshev.artem@insaneluv.ru" target="_blank"><img src={EmailIcon} alt="EmailIcon" /></a>
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
  padding: 0 15%;
  @media (max-width: 1060px) {
    flex-direction: column;
    padding: 20px 5%;
    justify-content: center;
    gap: 20px;
  }
`;

const Socials = styled.div`
  display: flex;
  justify-content: space-between;
  width: 110px;
  img {
    width: 30px;
  }
`;

export default Footer;