import styled from "styled-components";

export const CalendarContainer = styled.section`
  width: 100%;
  height: 280px;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;

  input {
    width: 80px;
    text-align: center;
  }
`;

export const Table = styled.table`
  width: 100%;
  height: 85%;

  th,
  td {
    border: 1px solid black;
    padding: 5px;
  }

  .on:hover {
    background-color: #e5e5e5;
    cursor: pointer;
  }
`;
