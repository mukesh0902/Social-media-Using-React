import { useReducer } from "react";
import { createContext } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});
const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Placed in Google",
    body: "Hello Everyone! I am pleased to share that i got placed in my dream company google.",
    reactions: 105,
    comments: 55,
    share: 23,
    userId: "user-5",
    tags: ["#placements", "#google"],
  },
  {
    id: "2",
    title: "Got internship at Microsoft",
    body: "Hello Everyone! I am pleased to share that i got an intership in my dream company Microsoft.",
    reactions: 86,
    comments: 40,
    share: 15,
    userId: "user-10",
    tags: ["#internships", "#Microsoft"],
  },
];
export default PostListProvider;
