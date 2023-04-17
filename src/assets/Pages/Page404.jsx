import { MainWrapper } from "../../Components";
import styled from "styled-components";

const Page404 = () => {
  return (
    <MainWrapper>
      <Container>
        <h1>Page not found</h1>
      </Container>
    </MainWrapper>
  );
};

export default Page404;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;

  h1 {
    font-size: 5rem;
    font-weight: 400;
    color: var(--pm-clr);
  }
`;
