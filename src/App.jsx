import "./App.css";
import posts from "./data/posts";
import Post from "./components/Post";

const Timeline = () => {
  return (
    <div className="timeline">
      {posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
};

export default Timeline;
