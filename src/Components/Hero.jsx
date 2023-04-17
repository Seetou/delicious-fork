import banner from "../assets/images/delicious-fork-banner.jpg";
import styled from "styled-components";
import React, { useContext } from "react";
import { AppContext } from "./GlobalContext";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const { setShowModal, userIsLogged } = useContext(AppContext);
  const navigate = useNavigate();

  const handleProfileChange = () => {
    if (userIsLogged) {
      navigate("/account");
    } else {
      setShowModal(true);
    }
  };
  return (
    <HeroWrapper>
      <div className="hero-content">
        <h1>
          76 382 cooking recipes! <br />{" "}
        </h1>
        <p>
          Commented and rated recipes for all cuisines. <br />
          Share your recipes, give your opinion and progress in the kitchen.
        </p>

        {/* <div className="hero-info"> */}

        <button onClick={handleProfileChange}>Share your recipe</button>
        {/* </div> */}
      </div>
    </HeroWrapper>
  );
};

export default Hero;

const HeroWrapper = styled.section`
  background-image: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(255, 183, 3, 0.1) 90%
    ),
    url(${banner});
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  max-width: 100%;
  border-radius: 5px;
  padding: 8rem 2rem;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
    rgba(0, 0, 0, 0.05) 0px 5px 10px;

  .hero-content {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    h1 {
      font-size: 5rem;
      color: white;
      font-weight: 600;
    }

    p {
      font-weight: 400;
      font-size: 2rem;
      color: white;
    }

    button {
      border: 1px solid var(--pm-clr);
      background: var(--sd-clr);
      padding: 1rem 2rem;
      margin-top: 2rem;
      text-transform: uppercase;
      border-radius: 5px;
      font-weight: 600;
      color: var(--pm-clr);
      cursor: pointer;
      transition: all 0.4s ease-in-out;

      &:hover {
        background: var(--pm-clr);
        color: var(--sd-clr);
        border: 1px solid white;
      }
    }

    @media (max-width: 30.625em) {
      align-items: center;
      text-align: center;
    }
  }
`;
