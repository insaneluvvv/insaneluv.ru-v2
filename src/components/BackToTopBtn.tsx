import styled from 'styled-components';
import { useState, useEffect } from "react";

import { MdKeyboardArrowUp } from "react-icons/md";

const BackToTop = () => {

  const [showTopBtn, setShowTopBtn] = useState(false); // Кнопка Back to Top

  // Отслеживаем скролл
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { // показываем кнопку после 300px прокрутки
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showTopBtn && (
        <BackToTopBtn onClick={scrollToTop}>
          <MdKeyboardArrowUp size={30} />
        </BackToTopBtn>
      )}
    </>

  )
}

const BackToTopBtn = styled.div`
  position: fixed;
  bottom: 120px;
  right: 50px;
  background-color: #21A049;
  color: #202020;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  padding: 10px;
  cursor: pointer;
  box-shadow: 2px 3px 5px black;
  transition: transform 0.3s, opacity 0.3s;
  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 600px) {
    bottom: 20px;
    right: 20px;
    transform: scale(0.9)
  }
`;

export default BackToTop