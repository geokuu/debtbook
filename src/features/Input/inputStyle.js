import styled from "styled-components";

export const InputStyle = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
  padding: 34px 25px;
  gap: 25px;
  background: var(--light-green);
  border-radius: 27px 27px 0 0;
  transition: margin 0.4s ease;

  &.visible {
    margin-bottom: 0;
  }

  &.hidden {
    margin-bottom: -120%;
  }

  .text-field-container {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    height: 44px;
  }

  .buttons-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 227px;
    width: 100%;
    align-content: space-between;
  }

  .row {
    display: flex;
    justify-content: space-between;
  }

  .names-container {
    display: flex;
    align-items: center;
    gap: 16px;
  }
`;
