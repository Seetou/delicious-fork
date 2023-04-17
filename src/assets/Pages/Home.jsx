import styled from "styled-components";
import {
  Header,
  Hero,
  SideBar,
  Reviews,
  PopularRecipes,
  MainWrapper,
  HeroCTA,
  Categories,
} from "../../Components";
import LoginModal from "../../Components/LoginModal";

const Home = () => {
  return (
    <MainContainer>
      <MainWrapper>
        <Hero />

        <PopularRecipes />
        <Categories />

        <HeroCTA />
        <Reviews />
      </MainWrapper>
    </MainContainer>
  );
};

export default Home;

const MainContainer = styled.main`
  max-width: 100%;
  position: relative;
`;
