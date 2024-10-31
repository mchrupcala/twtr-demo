import comments from "../data/comments";

const Comments = ({ postId }) => {
  const allComments = comments;
  console.log("postId: ", postId);
  const postComments = allComments?.filter((comment) => {
    return comment.postId === postId;
  });
  console.log("postComments: ", postComments);
  return (
    <div key={postId}>
      {postComments?.map((comments) => {
        console.log("commmm: ", comments);
        return comments.comments.map((comment) => {
          return <div key={comment.id}>{comment.content}</div>;
        });
      })}
    </div>
  );
};

export default Comments;
