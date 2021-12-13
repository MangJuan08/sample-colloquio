import axios from "axios";
import React, { useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/posts";
const Comments = (props) => {
  const { id } = props;
  const [comments, setComments] = useState([]);
  useEffect(() => {
    axios
      .get(url + "/" + id + "/comments")
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => console.log(err));
  });
  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
          <button type="submit" className="btn btn-primary">Send Comments</button>
        </div>
      </form>
      <ul>
        {comments.map((item) => {
          return <li key={item.id}>{item.body}</li>;
        })}
      </ul>
    </div>
  );
};

export default Comments;
