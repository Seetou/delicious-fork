import React from "react";
import styled from "styled-components";

const FooterComp = () => {
  return (
    <Footer>
      <h3>Designed and developed by Sitou Agbanzo</h3>
      <p>{new Date().getFullYear()}</p>
    </Footer>
  );
};

export default FooterComp;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  background: var(--pm-clr);
  padding: 20rem;
  color: white;
  gap: 2rem;

  h3 {
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
  }

  p {
    font-size: 1.5rem;
  }

  @media (max-width: 34.6875em) {
    padding: 5rem;
    h3 {
      font-size: 1.8rem;
    }
  }
`;
