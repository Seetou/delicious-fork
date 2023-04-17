import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import OverlayComponent from "./OverlayComponent";
import { useContext } from "react";
import { AppContext } from "./GlobalContext";
import Logo from "./Logo";

const SideBar = ({ SignOutUser, set_Show_Profile_Menu }) => {
  const { setShowOverlayComponent, setShow } = useContext(AppContext);
  return (
    <>
      <SideBarWrapper>
        <ul>
          <Link
            to={"/"}
            onClick={() => {
              setShowOverlayComponent(false);
              set_Show_Profile_Menu(false);
            }}
          >
            Home
          </Link>
          <Link
            to={"/account"}
            onClick={() => {
              setShowOverlayComponent(false);
              set_Show_Profile_Menu(false);
            }}
          >
            my account
          </Link>
          <button onClick={SignOutUser}>Log out</button>
        </ul>
      </SideBarWrapper>
    </>
  );
};

export default SideBar;

const SideBarWrapper = styled.section`
  height: calc(100vh - 80px);
  position: absolute;
  top: 80px;
  right: 0;
  background: white;
  width: 300px;
  padding: 2rem;
  border-radius: 5px;
  z-index: 999;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  overflow-y: hidden;

  ul {
    display: flex;
    flex-direction: column;

    a {
      width: 100%;
      display: inline-block;
      border-bottom: 1px solid var(--sd-clr);
      text-decoration: none;
      text-transform: uppercase;
      font-size: 2rem;
      color: var(--pm-clr);
      padding: 2rem 0.5rem;

      &:hover {
        background: var(--bg-clr);
      }
    }

    button {
      background: var(--sd-clr);
      margin-top: 2rem;
      border-radius: 5px;
      text-transform: uppercase;

      &:hover {
        filter: brightness(95%);
      }
    }
  }
`;
