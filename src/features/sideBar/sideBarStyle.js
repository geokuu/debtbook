import styled from "styled-components";

export const SideBarStyle = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 640px;
  padding: 18px;
  gap: 18px;
  background: var(--light-green);
  border-radius: 27px 0 0 27px;
  transition: margin 0.4s ease;

  &.visible {
    margin-right: 0;
  }

  &.hidden {
    margin-right: -80%;
  }

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
`;
