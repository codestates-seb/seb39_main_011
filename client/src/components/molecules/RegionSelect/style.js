import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  justify-content: space-between;
  flex: 1 0 100px;
  border-bottom: 1px solid #e5e5e5;
  padding: 5px;

  &:nth-child(2n-1) {
    margin-right: 10px;
  }

  > label {
    cursor: pointer;
  }
`;
