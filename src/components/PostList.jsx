import { useContext } from "react";
import Post from "./Post.jsx";
import { PostList as PostListData } from "../store/post-list-store.jsx";

const PostList = () => {
  const { postList } = useContext(PostListData);
  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
};
export default PostList;
