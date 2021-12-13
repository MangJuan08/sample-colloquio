import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "./Comments";

const url = "https://jsonplaceholder.typicode.com/posts/";
const PageSinglePost = (props) => {
  const { id } = useParams();
  const [aPost, setApost] = useState([]);
  useEffect(() => {
    axios
      .get(url + id)
      .then((res) => {
        setApost(res.data);
      })
      .catch((err) => console.log(err));
  });
  return (
    <div>
      <h1>{aPost.title}</h1>
      <p>{aPost.body}</p>
      <Comments id={id}></Comments>
    </div>
  );
};

export default PageSinglePost;
