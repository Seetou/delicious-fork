import styled from "styled-components";
import { GiFullPizza } from "react-icons/gi";

const Loader = () => {
  return (
    <LoaderWrapper>
      <GiFullPizza />
    </LoaderWrapper>
  );
};

const LoaderWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    font-size: 5rem;
    color: var(--pm-clr);
    animation: spinner 5s infinite linear;

    @keyframes spinner {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`;

export default Loader;
