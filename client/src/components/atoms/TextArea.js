import React from "react";
import styled from "styled-components";

const TextArea = ({ label, name, onChange }) => {
  return (
    <Layout>
      <label>{label}</label>
      <textarea name={name} onChange={onChange} />
    </Layout>
  );
};

export default TextArea;

const Layout = styled.div`
  margin: 10px 0;

  textarea {
    width: 100%;
    height: 150px;
    padding: 10px;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    font-size: 13px;
    resize: none;
    margin-top: 5px;
  }

  label {
    font-size: 13px;
    font-weight: bold;
  }

  div {
    display: flex;
  }
`;
