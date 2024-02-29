import styled from "styled-components";

export const HistoryStyle = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
  padding: 25px 25px;
  gap: 25px;
  background: var(--light-green);
  border-radius: 27px 27px 0 0;
  transition: margin 0.4s ease;

  &.visible {
    margin-bottom: 0;
  }

  &.hidden {
    margin-bottom: -100%;
  }

  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .btn-container {
    display: flex;
    gap: 12px;
  }

  .history-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .row {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .names-container {
    display: flex;
    gap: 10px;
    align-items: center;
  }
`;
