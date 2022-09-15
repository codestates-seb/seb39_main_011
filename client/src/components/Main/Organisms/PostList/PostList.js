import React from "react";
import PostCard from "../../Molecules/PostCard/PostCard";
import * as UI from "./style";

const PostsList = () => {
  return (
    <UI.Container>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </UI.Container>
  );
};

export default PostsList;
