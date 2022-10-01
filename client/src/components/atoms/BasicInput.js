import React from "react";
import styled from "styled-components";

const BasicInput = ({ value, onChange }) => {
  return (
    <Layout>
      <input value={value} onChange={onChange} />
    </Layout>
  );
};

export default BasicInput;

const Layout = styled.div`
  input {
    border: 2px solid var(--main-color-4);
    border-radius: 5px;
    width: ${(props) => props.width || "auto"};
    height: ${(props) => props.height || "auto"};
    padding: ${(props) => props.padding || "10px"};
    font-size: ${(props) => props.fontSize || "14px"};

    &:focus {
      outline: none;
      border-color: var(--main-color-3);
    }
  }
`;
