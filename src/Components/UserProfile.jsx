import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";
import React, { useContext, useState } from "react";
import { AppContext } from "./GlobalContext";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import OverlayComponent from "./OverlayComponent";

const UserProfile = () => {
  const [show_profile_menu, set_Show_Profile_Menu] = useState(false);
  const {
    setShowModal,
    userIsLogged,
    setUserIsLogged,
    logUserOut,
    setShowOverlayComponent,
  } = useContext(AppContext);
  const navigate = useNavigate();

  const handleProfileChange = () => {
    if (userIsLogged) {
      // navigate("/account");
      set_Show_Profile_Menu(!show_profile_menu);
      {
        show_profile_menu
          ? setShowOverlayComponent(false)
          : setShowOverlayComponent(true);
      }
    } else {
      setShowModal(true);
    }
  };
  const SignOutUser = async () => {
    try {
      await logUserOut();
      setUserIsLogged(false);
      navigate("/");
      set_Show_Profile_Menu(false);
      setShowOverlayComponent(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <UserProfileWrapper>
      <button onClick={handleProfileChange}>
        <FaUserCircle />
      </button>
      <div className="user-info">
        {/* {userIsLogged && <button onClick={SignOutUser}>Log out</button>} */}
        {show_profile_menu && (
          <SideBar
            SignOutUser={SignOutUser}
            set_Show_Profile_Menu={set_Show_Profile_Menu}
          />
        )}

        {/* <button onClick={() => setShowModal(true)}>Login</button> */}
      </div>
    </UserProfileWrapper>
  );
};

export default UserProfile;

const UserProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  /* position: relative; */

  button {
    padding: 1rem;
    background: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    svg {
      font-size: 2.5rem;
      color: var(--svg-clr);
    }

    svg:hover {
      color: var(--svg-hover-clr);
    }
  }

  .user-info {
    /* h3 {
      font-weight: 600;
      font-size: 1.2rem;
    }

    button {
      background: var(--sd-clr);
      padding: 0.5rem 2rem;

      text-transform: uppercase;

      &:hover {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
          rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
      }
    } */
  }
`;
