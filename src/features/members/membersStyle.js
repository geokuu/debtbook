import styled from "styled-components";

export const MembersStyle = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  width: 100%;

  .droppable {
    height: 76px;
    width: 153px;
    border-radius: 12px;
    position: relative;
    background: var(--green);
  }

  .transaction {
    width: 0;
    height: 0;
    z-index: 1;
  }

  .draggable--on {
    background-color: #e5d0cb;
    width: 70px;
    height: 45px;
    border-radius: 12px;
  }

  .draggable--off {
    opacity: 0;
    width: 153px;
    height: 76px;
    border-radius: 12px;
  }

  .drag-over {
    transform: scale(1.06);
    transition: transform 0.2s;
  }

  .content {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: -2px;
  }

  .blue {
    background: var(--blue);
  }

  .orange {
    background: var(--orange);
  }
`;
