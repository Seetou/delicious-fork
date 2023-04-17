import React from "react";
import styled from "styled-components";

const OverlayComponent = () => {
  return <Overlay></Overlay>;
};

export default OverlayComponent;

const Overlay = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  z-index: 9;
  overflow-y: hidden;

  /* &.show-overlay-component {
    display: block;
  } */
`;
