const express = require("express");
const mongose = require("mongoose");
const BookModel = require("./model/book");

const app = express();

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

  const book = new BookModel({
    title: title,
    author: author,
  });
  try {
    await book.save();
  } catch (err) {
    console.log(err);
  }
});
app.listen(3001, () => {
  console.log("server is running at port 3033");
});
