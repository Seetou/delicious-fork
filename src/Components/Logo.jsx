import styled from "styled-components";
import { Link } from "react-router-dom";

const Logo = () => {
  return <LogoWrapper to={"/"}>Delicious-Fork</LogoWrapper>;
};

export default Logo;

const LogoWrapper = styled(Link)`
  color: var(--pm-clr);
  display: inline-block;
  width: 100%;
  justify-self: flex-start;
  font-weight: 400;
  font-size: 1.7rem;
  font-family: var(--ff-lg);

  @media (max-width: 25em) {
    display: none;
  }
`;
