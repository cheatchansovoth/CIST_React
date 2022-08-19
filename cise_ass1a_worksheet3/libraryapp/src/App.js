import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [title, setTittle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [published_date, setPublisheddate] = useState(Date());
  const [publisher, setPublisher] = useState("");
  const [update, setUpdate] = useState(Date());

  const insert = () => {
    // console.log(
    //   title + author + description + published_date + publisher + update
    // );
    axios.post("http://localhost:3001/insert", {
      title: title,
      author: author,
      description: description,
      published_date: published_date,
      publisher: publisher,
      update: update,
    });
  };
  return (
    <div className="App">
      <h1>Insert Form</h1>
      <label>Title</label>
      <input
        type="text"
        className="form-control"
        onChange={(event) => {
          setTittle(event.target.value);
        }}
      ></input>
      <label>Author</label>
      <input
        type="text"
        className="form-control"
        onChange={(event) => {
          setAuthor(event.target.value);
        }}
      ></input>
      <label>Description</label>
      <input
        type="text"
        className="form-control"
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      ></input>
      <label>published_date</label>
      <input
        type="date"
        className="form-control"
        onChange={(event) => {
          setPublisheddate(event.target.value);
        }}
      ></input>
      <label>publisher</label>
      <input
        type="text"
        className="form-control"
        onChange={(event) => {
          setPublisher(event.target.value);
        }}
      ></input>
      <label>UpdateDate</label>
      <input
        type="date"
        className="form-control"
        onChange={(event) => {
          setUpdate(event.target.value);
        }}
      ></input>
      <button className="btn btn-primary" onClick={insert}>
        Primary
      </button>
    </div>
  );
}
export default App;
