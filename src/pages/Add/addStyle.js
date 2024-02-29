import styled from "styled-components";

export const AddStyle = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  width: 360px;
  height: 640px;
  padding: 25px 25px 25px 30px;
  background: var(--light-green);
  border-radius: 18px;
  margin: auto;
  top: calc(50vh - 320px);

  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .content-container {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;
