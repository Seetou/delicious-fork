import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  return (
    <CartWrapper>
      <span>0</span>
      <button>
        <FaShoppingCart />
      </button>
    </CartWrapper>
  );
};

export default Cart;

const CartWrapper = styled.div`
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
