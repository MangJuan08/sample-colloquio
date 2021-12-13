import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const url = "https://jsonplaceholder.typicode.com/posts";

const Home = () => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    axios
      .get(url, {
        params: {
          _limit: 10,
        },
      })
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => console.log(err));
    return () => {};
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <ul>
            {posts.map((item) => {
              return (
                <li key={item.id}>
                  <Link to={`/singlePost/${item.id}`}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
