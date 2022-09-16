import styled from "styled-components";

export const DetailMainContainer = styled.section`
  width: calc(100% - 320px);
  gap: 20px;
`;

export const Content = styled.div`
  padding: 20px;

  .important {
    display: flex;
    gap: 20px;
  }

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
