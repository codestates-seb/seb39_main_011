import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const ImageUpload = ({ photo, setPhoto }) => {
  const imageInput = useRef(null);

  const handleImageUpload = (e) => {
    imageInput.current.click();
  };

  const handleChangeImage = (e) => {
    setPhoto(URL.createObjectURL(e.target.files[0]));
    console.log(URL.createObjectURL(e.target.files[0]));
  };

  const handleDeleteImage = () => {
    URL.revokeObjectURL(photo);
    setPhoto("");
    console.log(photo);
  };

  return (
    <ImageContainer>
      {photo ? (
        <>
          <div>
            <img alt="sample" src={photo} />
            <FontAwesomeIcon
              className="xmark-style"
              icon={faXmark}
              onClick={handleDeleteImage}
            />
          </div>
        </>
      ) : (
        <>
          <div onClick={handleImageUpload}>
            <FontAwesomeIcon className="icon_style" icon={faPlus} />
          </div>
          <input
            type="file"
            accept="image/*"
            ref={imageInput}
            onChange={handleChangeImage}
            style={{ display: "none" }}
          />
        </>
      )}
    </ImageContainer>
  );
};

export default ImageUpload;

const ImageContainer = styled.div`
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 65px;
    height: 65px;
    text-align: center;
    border: 1px solid #d9d9d9;
    margin: 10px 10px 0 0;
    background-color: #fff;
    border-radius: 5px;
    position: relative;

    .icon_style {
      color: #d9d9d9;
      font-size: 30px;
    }

    .xmark-style {
      position: absolute;
      right: 3px;
      top: 3px;
      color: #fff;
    }

    img {
      position: absolute;
      width: 65px;
      height: 65px;
      border-radius: 5px;
    }
  }
`;
