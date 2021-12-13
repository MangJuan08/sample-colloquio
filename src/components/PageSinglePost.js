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
    <div className="row">
      <div className="col-md-6">
        <Comments id={id}></Comments>
      </div>
      <div className="col-md-6">
        <h3 style={{color:"white"}}>{aPost.title}</h3>
        <p style={{color:"white"}}>{aPost.body}</p>
      </div>
    </div>
  );
};

export default PageSinglePost;
