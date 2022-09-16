import React from "react";
import PostCard from "./../../organisms/MainPostCard/PostCard";
import * as S from "./style";

const PostsList = () => {
  return (
    <S.PostContainer>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </S.PostContainer>
  );
};

export default PostsList;
