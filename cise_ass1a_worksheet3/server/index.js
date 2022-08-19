const express = require("express");
const mongose = require("mongoose");
const BookModel = require("./model/book");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
mongose.connect(
  "mongodb+srv://admin:Chansovoth12345@book.q47mhsp.mongodb.net/book?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);
app.post("/insert", async (req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  const description = req.body.description;
  const published_date = req.body.published_date;
  const publisher = req.body.publisher;
  const update = req.body.update;

  const book = new BookModel({
    title: title,
    author: author,
    description: description,
    published_date: published_date,
    publisher: publisher,
    update: update,
  });
  try {
    await book.save();
    res.send("insert data");
  } catch (err) {
    console.log(err);
  }
});
app.listen(3001, () => {
  console.log("server is running at port 3033");
});
