import React, { useState, useContext, useRef, useEffect } from "react";
import { AppContext } from "./GlobalContext";
import styled from "styled-components";
import GoogleButton from "react-google-button";
import UserAccount from "../assets/Pages/UserAccount";
import { useNavigate, Navigate } from "react-router-dom";

const LoginModal = () => {
  const [activeTab, setActiveTab] = useState(true);
  const [isActive, setisActive] = useState(true);
  const [useremail, setUserEmail] = useState("");
  const [userpassword, setUserPassword] = useState("");
  const emailField = useRef();
  const passwordField = useRef();
  const [ugc, setUGC] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const {
    showModal,
    setShowModal,
    createNewUser,
    logExistantUserIn,
    userIsLogged,
    setUserIsLogged,
    GoogleSignIn_,
  } = useContext(AppContext);

  const handleLoginTab = () => {
    setActiveTab(true);
    setisActive(true);
  };

  const handleSignUpTab = () => {
    setActiveTab(false);
    setisActive(false);
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    if (!useremail || !userpassword) {
      setErrorMessage("All fields are required");
      emailField.current.focus();
      return;
    }
    try {
      await logExistantUserIn(useremail, userpassword);
      // setShowModal(false);
      // navigate("/account");
    } catch (error) {
      setErrorMessage(error.message.slice(10));
      setUserEmail("");
      setUserPassword("");
      emailField.current.focus();
    }
  };

  const submitSignup = async (e) => {
    e.preventDefault();
    if (!useremail || !userpassword || !ugc) {
      setErrorMessage("All fields are required");
      emailField.current.focus();
      return;
    }
    try {
      await createNewUser(useremail, userpassword);
      // navigate("/account");
      // setShowModal(false);
    } catch (error) {
      setErrorMessage(error.message.slice(10));
      // setUserEmail("");
      // setUserPassword("");
      // passwordField.current.focus();
    }
  };

  const GoogleSignInAccount = async () => {
    await GoogleSignIn_();
    // await setShowModal(false);
    // <Navigate to={"/account"} />;
  };

  const closeModal = (e) => {
    if (e.target.dataset.name === "modal-backdrop") {
      setShowModal(false);
    }
  };
  // REDIRECT USER TO ACCOUNT AFTER LOGGED IN****************************
  useEffect(() => {
    if (showModal && userIsLogged) {
      setShowModal(false);
      navigate("/account");
    }
  }, [userIsLogged]);
  return (
    showModal && (
      <ModalWrapper data-name="modal-backdrop" onClick={closeModal}>
        <div className="modal-content">
          <div className="tabs-btns-container">
            <button
              className={`${isActive ? "actived" : null}`}
              onClick={handleLoginTab}
            >
              Login
            </button>
            <button
              className={`${!isActive ? "actived" : null}`}
              onClick={handleSignUpTab}
            >
              Sign Up
            </button>
          </div>
          {/************************* LOGIN FORM ************************ */}
          <div className="tabs-form-container">
            {activeTab && (
              <form onSubmit={submitLogin}>
                <p>Log to your account</p>
                <p className="error-alert">
                  {errorMessage ? errorMessage : ""}
                </p>
                <label htmlFor="useremail">Email</label>
                <input
                  type="email"
                  name="useremail"
                  value={useremail}
                  ref={emailField}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
                <label htmlFor="userpassword">Password</label>
                <input
                  type="password"
                  name="userpassword"
                  value={userpassword}
                  ref={passwordField}
                  onChange={(e) => setUserPassword(e.target.value)}
                />
                <button type="submit">LOG IN</button>
                <GoogleBtn onClick={GoogleSignInAccount} />
              </form>
            )}

            {/************************** SIGNUP FORM *****************************/}

            {!activeTab && (
              <form onSubmit={submitSignup}>
                <p>Create a free account !</p>
                <p className="error-alert">
                  {errorMessage ? errorMessage : ""}
                </p>
                <label htmlFor="useremail">Email</label>
                <input
                  type="email"
                  name="useremail"
                  value={useremail}
                  ref={emailField}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
                <label htmlFor="userpassword">Password</label>
                <input
                  type="password"
                  name="userpassword"
                  value={userpassword}
                  ref={passwordField}
                  onChange={(e) => setUserPassword(e.target.value)}
                />
                <div className="checkbox-wrapper">
                  <input
                    type="checkbox"
                    name="UGC"
                    id="UGC"
                    value={ugc}
                    required={true}
                    onChange={(e) => setUGC(e.target.value)}
                  />
                  <label htmlFor="UGC">I accept the terms and conditions</label>
                </div>
                <button type="submit">Sign up</button>
                <GoogleBtn onClick={GoogleSignInAccount} />
              </form>
            )}
          </div>
        </div>
      </ModalWrapper>
    )
  );
};

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.8);
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 9;

  button[type="submit"] {
    background: var(--bg-clr);
    padding: 1rem 0;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    text-transform: uppercase;

    &:hover {
      background: var(--pm-clr);
      color: white;
    }
  }

  .modal-content {
    background: white;
    padding: 2rem;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 300px;
    max-width: 10%;
    z-index: 10;

    /* @media (max-width: 100em) {
      min-width: 300px;
    } */
  }

  .tabs-btns-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    button {
      width: 100vh;
      outline: none;
      border: none;
      padding: 1rem 0;
      border-bottom: 2px solid var(--pm-clr);
      font-size: 1.5rem;
      text-decoration: none;
      color: var(--pm-clr);
      text-align: center;
      margin-bottom: 2rem;
      cursor: pointer;

      &.actived {
        background: var(--sd-clr);
      }
    }
  }

  .tabs-form-container {
    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 1.5rem;
      color: var(--pm-clr);

      .checkbox-wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 2rem;

        label {
          font-size: 1rem;
          margin: 0 0 0 1rem;
        }

        input {
          margin: 0;
        }
      }

      p {
        text-align: center;
        /* margin-bottom: 2rem; */
      }

      .error-alert {
        font-size: 1rem;
        color: red;
        margin-top: 2rem;
      }

      label {
        margin-top: 2rem;
      }

      input {
        padding: 1rem 0;
        outline: none;
        border: none;
        border-bottom: 2px solid var(--pm-clr);
        margin-bottom: 1rem;

        &:focus {
          border-bottom: 2px solid var(--sd-clr);
        }
      }
    }
  }
`;

const GoogleBtn = styled(GoogleButton)`
  margin-top: 2rem;
`;

export default LoginModal;
