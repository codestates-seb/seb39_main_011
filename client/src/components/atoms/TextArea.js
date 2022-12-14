import React from "react";
import styled from "styled-components";

const TextArea = ({ value, label, name, onChange, rows }) => {
  return (
    <Layout>
      <label>{label}</label>
      <textarea value={value} name={name} onChange={onChange} rows={rows} />
    </Layout>
  );
};

export default TextArea;

const Layout = styled.div`
  width: 100%;

  textarea {
    width: 100%;
    padding: 10px;
    border: 2px solid var(--main-color-4);
    border-radius: 5px;
    font-size: 13px;
    resize: none;
  }

  label {
    font-size: 13px;
    font-weight: bold;
  }

  div {
    display: flex;
  }
`;
