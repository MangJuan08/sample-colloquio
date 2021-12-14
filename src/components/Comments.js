import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./comments.css";
const url = "https://jsonplaceholder.typicode.com/posts";
const Comments = (props) => {
  const { id } = props;
  

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleChange = (e) => {
    const { value } = e.target;
    setComment(value);
  };

  const addComment = (e) => {
    e.preventDefault();
    console.log("prova");
    setComments([
      ...comments,
      {
        id: Math.random(-1.2),
        body: comment,
      },
    ]);
  };

  const deleteComment = (id) => {
    let newComments = comments.filter((item) => item.id !== id);
    setComments(newComments);
  };

  useEffect(() => {
   
    axios
      .get(url + "/" + id + "/comments")
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => console.log(err));
    const { log } = console;
    log(comments);
  }, []);

  return (
    <div>
      <form onSubmit={addComment}>
        <div className="mb-3">
          <label
            htmlFor="comment"
            className="form-label"
            style={{ color: "white" }}
          >
            Example textarea
          </label>
          <textarea
            className="form-control"
            id="comment"
            rows="3"
            name="body"
            value={comment}
            onChange={handleChange}
          ></textarea>
          <br></br>
          <button type="submit" className="btn btn-primary">
            Send Comments
          </button>
        </div>
      </form>
      <ul>
        {comments.map((item) => {
          return (
            <li key={item.id} className="comment">
              <div class="card text-white bg-dark mb-3">
                <div class="card-header">{item.name.toUppercase()}</div>
                <div class="card-body">
                  <p class="card-text">{item.body}</p>
                </div>
              </div>
              <button
                className="btn btn-danger delete-button"
                onClick={() => deleteComment(item.id)}
              >
                x
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
