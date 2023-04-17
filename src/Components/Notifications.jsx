import styled from "styled-components";
import { FaBell } from "react-icons/fa";

const Notifications = () => {
  return (
    <NotificationsWrapper>
      <span>0</span>
      <button>
        <FaBell />
      </button>
    </NotificationsWrapper>
  );
};

export default Notifications;

const NotificationsWrapper = styled.div`
  position: relative;
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

  span {
    border-radius: 100%;
    background: var(--badge-clr);
    padding: 0 0.4rem;
    position: absolute;
    right: 0;
    top: 0;
    font-size: 1rem;
    color: white;
    background: var(--badge-clr);
  }
`;
