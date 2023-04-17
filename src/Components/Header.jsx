import styled from "styled-components";
import {
  Logo,
  Form,
  Cart,
  UserProfile,
  Notifications,
  UserUIWrapper,
  SideBar,
} from "../Components";

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="header__container">
        <Logo />
        <Form />
        <UserUIWrapper>
          <Notifications />
          <UserProfile />
        </UserUIWrapper>
      </div>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  padding: 1.5rem 2rem;
  background: white;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  .header__container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;
