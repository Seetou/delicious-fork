import heroCta from "../assets/images/delicious-hero-2.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";
const HeroCTA = () => {
  return (
    <HeroCTAWrapper>
      <div className="heroCta-info">
        <h3>
          Receive daily recipes carefully
          <br /> selected by our team.
        </h3>
        <Link className="cta-btn" to={""}>
          Subscribe
        </Link>
      </div>
      {/* <img src={heroCta} alt="Out of ideas?Let us surprise you!" /> */}
    </HeroCTAWrapper>
  );
};

export default HeroCTA;

const HeroCTAWrapper = styled.section`
  margin-top: 3rem;
  margin-bottom: 10rem;
  padding: 5rem;
  background-image: linear-gradient(
      180deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(255, 183, 3, 0.1) 90%
    ),
    url(${heroCta});
  background-position: left bottom;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
    rgba(0, 0, 0, 0.05) 0px 5px 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  @media (max-width: 56.875em) {
    flex-direction: column;

    .heroCta-info {
      padding: 4rem;
    }
  }

  @media (max-width: 30.625em) {
    padding: 5rem 1rem;

    .heroCta-info {
      h3 {
        font-size: 3rem !important;
      }

      .cta-btn {
        width: 100% !important;
      }
    }
  }

  .heroCta-info {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;

    h3 {
      font-size: 4rem;
      line-height: 50px;
      font-family: var(--ff-lg);
      font-weight: 200;
      text-align: center;
      /* color: var(--pm-clr); */
      color: white;
    }

    .cta-btn {
      width: 50%;
      padding: 1rem 2rem;
      text-transform: uppercase;
      background: var(--pm-clr);
      outline: none;
      border: 1px solid white;
      color: white;
      border-radius: 5px;
      font-size: 1.5rem;
      text-align: center;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      &:hover {
        background: var(--sd-clr);
        color: var(--pm-clr);
        box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
          rgba(0, 0, 0, 0.05) 0px 5px 10px;
      }
    }
  }
`;
