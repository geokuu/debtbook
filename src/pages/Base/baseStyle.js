import styled from "styled-components";

export const BaseStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  width: 360px;
  height: 640px;
  padding: 20px;
  background: var(--light-green);
  border-radius: 18px;
  overflow: hidden;
  margin: auto;
  top: calc(50vh - 320px);

  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .btn-container {
    display: flex;
    gap: 12px;
  }

  .background {
    z-index: 1;
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--transparent-black);
    backdrop-filter: blur(2px);
    visibility: hidden;
    transition:
      visibility 0.4s ease,
      opacity 0.4s ease;
    opacity: 0;
  }

  .show {
    visibility: visible;
    opacity: 1;
  }

  .instruction {
    color: hsl(240, 1%, 75%);
    margin: auto;
  }
`;
