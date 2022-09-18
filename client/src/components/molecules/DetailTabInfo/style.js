import styled from "styled-components";

export const Content = styled.div`
  padding: 20px;
`;

export const EssentialInfo = styled.div`
  display: flex;
  gap: 20px;

  .important_img {
    width: 200px;
    height: 130px;
    border: 1px solid red;
  }

  .important_content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;
