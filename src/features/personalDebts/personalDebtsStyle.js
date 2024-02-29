import styled from "styled-components";

export const PersonalDebtsStyle = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
  bottom: 0;

  &.visible {
    margin-bottom: 0;
  }

  &.hidden {
    margin-bottom: -100%;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
  padding: 25px 25px;
  gap: 20px;
  background: var(--light-green);
  border-radius: 27px 27px 0 0;
  transition: margin 0.4s ease;

  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .credit-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 10px 14px;
    border-radius: 12px;
    background: var(--blue);
  }

  .row {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .debt-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 10px 14px;
    border-radius: 12px;
    background: var(--orange);
  }
`;
