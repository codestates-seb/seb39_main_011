// 싱글 이미지 업로더 (일단 하나 이미지만 문자열로 s3 url 넘겨주기)
import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as PlusIcon } from "../../svg/plus.svg";
import { ReactComponent as CloseIcon } from "../../svg/close.svg";
import S3 from "react-aws-s3";
import { v4 as uuidv4 } from "uuid";

const SingleImageUploader = ({ images, setImages }) => {
  window.Buffer = window.Buffer || require("buffer").Buffer;

  const [previews, setPreviews] = useState([]);

  const config = {
    bucketName: process.env.REACT_APP_BUCKET_NAME,
    region: process.env.REACT_APP_REGION,
    accessKeyId: process.env.REACT_APP_ACCESS,
    secretAccessKey: process.env.REACT_APP_SECRET,
  };

  const ReactS3Client = new S3(config);

  let previewLists = [...previews];
  let imageUrlList = [images];

  const newFileName = uuidv4();

  const handleAddImages = (e) => {
    const imageLists = e.target.files;

    const currentImageUrl = URL.createObjectURL(imageLists[0]);
    previewLists.push(currentImageUrl);

    ReactS3Client.uploadFile(imageLists[0], newFileName)
      .then((data) => {
        imageUrlList.push(data.location);
        setImages(data.location);
      })
      .catch((err) => console.error(err));
  };

  const handleDeleteImage = (id) => {
    setImages(null);

    // ReactS3Client.deleteFile(newFileName)
    //   .then((response) => console.log(response))
    //   .catch((err) => console.error(err));
  };

  return (
    <Container>
      {imageUrlList[0] === null || images.length === 0 ? (
        <Box>
          <label htmlFor="input-file" onChange={handleAddImages}>
            <input
              type="file"
              id="input-file"
              multiple
              style={{ display: "none" }}
            />
            <PlusIcon />
          </label>
        </Box>
      ) : (
        <>
          {imageUrlList.map((image, id) => (
            <Box key={id}>
              <img src={image} alt=":(" />
              <CloseIcon
                className="close_style"
                onClick={() => handleDeleteImage(id)}
              />
            </Box>
          ))}
        </>
      )}
    </Container>
  );
};

export default SingleImageUploader;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-top: 5px;

  img {
    width: 80px;
    height: 80px;
    border-radius: 5px;
    margin-top: 10px;

    @media ${(props) => props.theme.postMobile} {
      margin: 7px;
    }
  }

  .close_style {
    position: absolute;
    right: 5px;
    top: 15px;

    @media ${(props) => props.theme.postMobile} {
      right: 7px;
      top: 7px;
    }
  }
`;
