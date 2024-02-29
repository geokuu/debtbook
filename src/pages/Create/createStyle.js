import styled from "styled-components";

export const CreateStyle = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  width: 360px;
  height: 640px;
  padding: 45px 20px 20px 30px;
  background: var(--light-green);
  border-radius: 18px;
  overflow: hidden;
  margin: auto;
  top: calc(50vh - 320px);

  .container {
    display: flex;
    flex-direction: column;
    gap: 35px;
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
