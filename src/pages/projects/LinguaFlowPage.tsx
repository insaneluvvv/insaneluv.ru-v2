import styled from "styled-components";
import { NavLink } from "react-router-dom";

import BackToTop from "../../components/BackToTopBtn";

import InsaneLuvLogo from "./../../assets/media/insaneluv-white-logo.png"

const LinguaFlowPage = () => {

  //ИМПОРТ ВСЕХ ИЗОБРАЖЕНИЙ
  const images: Record<string, string> = import.meta.glob(
    "./../../assets/media/projects/LinguaFlow/*.{jpg,png,webp}",
    {
      eager: true,
      import: "default",
      query: "?url",
    }
  );

  //СОРТИРОВКА ВСЕХ ИЗОБРАЖЕНИЙ ПО НАЗВАНИЮ
  const sortedImages = Object.entries(images)
  .sort(([pathA], [pathB]) => {
    const nameA = pathA.split("/").pop() || "";
    const nameB = pathB.split("/").pop() || "";
    return nameA.localeCompare(nameB, undefined, { numeric: true, sensitivity: "base" });
  })
  .map(([path, url]) => ({ path, url }));

  return (
    <HomeWrapper>
      <HomeLogo><NavLink to="/"><img src={InsaneLuvLogo}/></NavLink></HomeLogo>
      <PortfolioTitle>
        <span className="roboto-w-24">Презентация LinguaFlow</span>
      </PortfolioTitle>      
      <PortfolioDesc className="roboto-w-18-thin">
      Информационная презентация услуг онлайн-платформы для изучения иностранных языков — LinguaFlow.<br/><br/>
      "Учись говорить свободно"
      </PortfolioDesc>
      <ItemsList>
        {sortedImages.map(({ path, url }) => {
          const name = path.split("/").pop();
          return <img key={name} src={url} alt={name} loading="lazy" />;
        })}
      </ItemsList>
      <BackToTop />
    </HomeWrapper>

  )
}

const HomeWrapper = styled.div`
	padding: 40px 10%;
	width: 80%;
  display: flex;
  flex-direction: column;
	align-items: center;
`;
const HomeLogo = styled.div`
  margin-bottom: 40px;
  img{
    display: flex;
    justify-content: center;
    width: 200px;
  }
`;
const PortfolioTitle = styled.div`
	display: flex;
	justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 40px;
  span {
    text-align: center;
    margin-bottom: 5px;
    color: #fff;
  }
`;

const PortfolioDesc = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const ItemsList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  
  img {
    width: 60%;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 4px black;
    @media (max-width: 1080px) {
      width: 80%;
    }
    @media (max-width: 600px) {
      width: 100%;
    }
  }

`;

export default LinguaFlowPage