import styled from "styled-components";

export const Content = styled.div`
  padding: 20px 20px 60px 20px;

  display: flex;
  flex-wrap: wrap;
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
