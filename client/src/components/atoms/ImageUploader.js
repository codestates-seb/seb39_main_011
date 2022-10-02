import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as PlusIcon } from "../../svg/plus.svg";
import { ReactComponent as CloseIcon } from "../../svg/close.svg";
import S3 from "react-aws-s3";
import { v4 as uuidv4 } from "uuid";

const ImageUploader = ({ images, setImages, isReview }) => {
  window.Buffer = window.Buffer || require("buffer").Buffer;

  const [previews, setPreviews] = useState([]);

  const config = {
    bucketName: process.env.REACT_APP_BUCKET_NAME,
    region: process.env.REACT_APP_REGION,
    accessKeyId: process.env.REACT_APP_ACCESS,
    secretAccessKey: process.env.REACT_APP_SECRET,
  };

  const ReactS3Client = new S3(config);

  const handleAddImages = (e) => {
    const imageLists = e.target.files;
    const newFileName = uuidv4();

    let previewLists = [...previews];
    let imageUrlList = [...images];

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      previewLists.push(currentImageUrl);

      // s3에 업로드
      ReactS3Client.uploadFile(imageLists[i], newFileName)
        .then((data) => {
          imageUrlList.push(data.location);
          setImages([...imageUrlList]);
        })
        .catch((err) => console.error(err));
    }

    // 최대 이미지 3장까지 업로드 가능 조건
    if (previewLists.length > 3) {
      previewLists = previewLists.slice(0, 3);
    }
    setPreviews(previewLists);
  };

  console.log(images);

  const handleDeleteImage = (id) => {
    setImages(images.filter((_, index) => index !== id));

    // ReactS3Client.deleteFile(e.target.files[id].name)
    //   .then((response) => console.log(response))
    //   .catch((err) => console.error(err));
  };

  // 몇개의 +박스를 화면에 보이도록 할건지에 대한 조건 함수
  const showBox = () => {
    if (isReview) {
      if (images.length === 0) {
        return (
          <Box>
            <PlusIcon className="icon" />
            <PlusIcon />
          </Box>
        );
      } else if (images.length === 1) {
        return (
          <Box>
            <PlusIcon />
          </Box>
        );
      }
    } else {
      if (images.length === 0) {
        return (
          <Box>
            <PlusIcon />
            <PlusIcon />
            <PlusIcon />
          </Box>
        );
      } else if (images.length === 1) {
        return (
          <Box>
            <PlusIcon />
            <PlusIcon />
          </Box>
        );
      } else if (images.length === 2) {
        return (
          <Box>
            <PlusIcon />
          </Box>
        );
      }
    }
  };

  return (
    <Container>
      {images && (
        <>
          {images.map((image, id) => (
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

      <Box>
        {images.length === 3 ? null : (
          <label htmlFor="input-file" onChange={handleAddImages}>
            <input
              type="file"
              id="input-file"
              multiple
              style={{ display: "none" }}
            />
            {showBox()}
          </label>
        )}
      </Box>
    </Container>
  );
};

export default ImageUploader;

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
    width: 65px;
    height: 65px;
    border-radius: 5px;
    margin: 10px;

    @media ${(props) => props.theme.postMobile} {
      margin: 7px;
    }
  }

  .close_style {
    position: absolute;
    right: 10px;
    top: 10px;

    @media ${(props) => props.theme.postMobile} {
      right: 7px;
      top: 7px;
    }
  }
`;
