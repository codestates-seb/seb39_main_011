import React, { useState } from "react";
import SingleImageUploader from "../../atoms/SingleImageUploader";

const Camping = ({ resData, onUpdatePost }) => {
  const [isEdit, setIsEdit] = useState(true);

  // 수정 버튼 클릭시 수정 input 화면으로 변경
  const toggleIsEdit = () => {
    setIsEdit(!isEdit);
    console.log(isEdit);
  };

  const [editName, setEditName] = useState(resData?.name);
  const [editPrice, setEditPrice] = useState(resData?.price);
  const [editPhone, setEditPhone] = useState(resData?.phone);
  const [editCapacity, setEditCapacity] = useState(resData?.capacity);
  const [editPlace, setEditPlace] = useState(resData?.place);
  const [editNote, setEditNote] = useState(resData?.note);
  const [editPhoto, setEditPhoto] = useState(resData?.file_path);

  const userId = localStorage.getItem("userId");

  const editData = {
    name: editName,
    price: editPrice,
    phone: editPhone,
    capacity: editCapacity,
    place: editPlace,
    note: editNote,
    file_path: editPhoto,
    userId: userId,
  };

  const handleEdit = () => {
    onUpdatePost(
      // editName,
      // editPrice,
      // editPhone,
      // editCapacity,
      // editPlace,
      // editNote,
      // editPhoto,
      // userId
      editData
    );

    toggleIsEdit();
  };

  return (
    <>
      {isEdit ? (
        <>
          <input
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
          />
          <input
            value={editPrice}
            onChange={(e) => setEditPrice(e.target.value)}
          />
          <input
            value={editPhone}
            onChange={(e) => setEditPhone(e.target.value)}
          />
          <input
            value={editCapacity}
            type="number"
            onChange={(e) => setEditCapacity(e.target.value)}
          />
          <input
            onChange={(e) => setEditPlace(e.target.value)}
            value={editPlace}
          />
          <input
            value={editNote}
            onChange={(e) => setEditNote(e.target.value)}
          />
          <SingleImageUploader images={editPhoto} setImages={setEditPhoto} />
          <button onClick={handleEdit}>수정 완료</button>
        </>
      ) : (
        <>
          {resData.name}
          {resData.price}
          {resData.phone}
          {resData.capacity}
          {resData.place}
          {resData.note}
          {resData.file_path}
          <button onClick={toggleIsEdit}>수정 완료</button>
        </>
      )}
    </>
  );
};

export default Camping;
