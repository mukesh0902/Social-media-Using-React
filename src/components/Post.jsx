import { useContext } from "react";
import { PostList } from "../store/post-list-store";
import { AiFillDelete } from "react-icons/ai";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      {/* <img src="..." className="card-img-top" alt="..." /> */}
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => deletePost(post.id)}
        >
          <AiFillDelete></AiFillDelete>
          <span className="visually-hidden">unread messages</span>
        </span>
        <p className="card-text">{post.body}</p>

        <p className="card-text hashtag">{post.tags} </p>
        {/* <div className="responsebtns">
          <div className="container text-center">
            <div className="row">
              <div className="col response-btn-col">
                <button
                  type="button"
                  className="btn btn-primary position-relative responsebtn"
                >
                  Like
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {post.reactions}
                  </span>
                </button>
              </div>
              <div className="col response-btn-col">
                <button
                  type="button"
                  className="btn btn-primary position-relative responsebtn"
                >
                  Comments
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {post.comments}
                  </span>
                </button>
              </div>
              <div className="col response-btn-col">
                <button
                  type="button"
                  className="btn btn-primary position-relative responsebtn"
                >
                  Share
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {post.share}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default Post;
