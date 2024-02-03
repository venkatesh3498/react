import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Link } from "react-router-dom";

function getPosts() {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
}

function App() {
  const [value, setValue] = useState(10);
  const [posts, setPosts] = useState<any[]>([]);
  async function postsGetter() {
    try {
      const res = await getPosts();
      console.log("Response =====>", res);
      setPosts(res.data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    postsGetter();
    return () => {
      console.log("Moved Away From Home Page");
    };
  }, []);
  return (
    <div className="App">
      <header className="App-header"></header>
      <section>Section {value}</section>
      <Link to="/about">ABout Page</Link>
      <button onClick={() => setValue((prev) => ++prev)}>Increment</button>
      <button onClick={() => setValue((prev) => --prev)}>Decrement</button>
      {/* <button onClick={postsGetter}>Get Posts</button> */}
      {posts.map((item) => {
        return (
          <p key={item.id}>
            {" "}
            Body:
            {item.body}
          </p>
        );
      })}
      <footer>Footer</footer>
    </div>
  );
}

export default App;
