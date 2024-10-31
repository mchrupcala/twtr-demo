import { useEffect, useState } from "react";
import PostContent from "./PostContent";
import UserHeader from "./UserHeader";
import Comments from "./Comments";
import users from "../data/users";
import { fetchTodos } from "../api/users";

const Post = ({ post }) => {
  const [showComments, setShowComments] = useState(false);

  const user = users.filter((user) => {
    return user.id === post.userId;
  });

  useEffect(() => {
    fetchTodos().then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div
      className="post"
      style={{ display: "flex", flexDirection: "column" }}
      onClick={() => setShowComments(!showComments)}
    >
      <UserHeader user={user ? user[0] : {}} />
      <PostContent post={post} />
      {showComments ? <Comments postId={post.id} /> : null}
    </div>
  );
};

export default Post;
