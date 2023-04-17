import React from "react";
import { MainWrapper } from "../../Components";
import image from "../../assets/images/page-under-preparation.jpg";
import styled from "styled-components";

const Simulator = () => {
  return (
    <MainWrapper>
      <SectionContainer>
        <h1>Page in preparation</h1>
        <img src={image} alt="page under construction" />
        <p>Come back later...</p>
      </SectionContainer>
    </MainWrapper>
  );
};

export default Simulator;

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 2rem;
  background: white;

  margin-top: 5rem;
  border-radius: 5px;
  gap: 2rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  img {
    width: 300px;
  }

  h1 {
    font-size: 4rem;
    color: var(--pm-clr);
    font-weight: 600;
  }

  p {
    font-weight: 400;
    font-size: 2rem;
    color: var(--pm-clr);
  }

  @media (max-width: 31.25em) {
    h1 {
      font-size: 3rem;
      text-align: center;
    }
  }
`;
