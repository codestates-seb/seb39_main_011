import React from "react";
import styled from "styled-components";

const BasicInput = ({ value, onChange, width }) => {
  return (
    <Layout>
      <input value={value} onChange={onChange} width={width} />
    </Layout>
  );
};

export default BasicInput;

const Layout = styled.div`
  input {
    border: 2px solid var(--main-color-4);
    border-radius: 5px;
    width: 190px;
    height: auto;
    padding: 10px;
    font-size: 14px;

    &:focus {
      outline: none;
      border-color: var(--main-color-3);
    }

    @media ${(props) => props.theme.mobile} {
      width: 150px;
    }
  }
`;
