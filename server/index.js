import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import postBlogs from "./model/postBlogs.js";

dotenv.config();

const app = express();
app.use(cors());

app.use(function (req, res, next) {
  var data = "";
  req.setEncoding("utf8");
  req.on("data", function (chunk) {
    data += chunk;
  });

  req.on("end", function () {
    req.body = data;
    next();
  });
});

const CONNECTION_URL = `${process.env.DATABASE_URL}`;
const PORT = process.env.PORT || 5000;

app.get("/api/blogs", (req, res) => {
  console.log("Hello");
  res.send({
    code: 1,
    data: [
      {
        title: "Title1",
        description:
          "This is data for title 1 and it is long This is data for title 1 and it is long  This is data for title 1 and it is long  This is data for title 1 and it is long This is data for title 1 and it is long This is data for title",
      },
      {
        title: "Title2",
        description:
          "This is data of title 2 This is data for title 1 and it is long  This is data for title 1 and it is long This is data for title 1 and it is long This is data for title 1 and it is long This is data for title 1 and it is long ",
      },
      {
        title: "Title3",
        description:
          "This is data for title 1 and it is long This is data for title 1 and it is long This is data for title 1 and it is long This is data for title 1 and it is long This is data for title 1 and it is longThis is data for title 1 a ",
      },
    ],
  });
});

app.post("/api/save", async (req, res) => {
  const { title, description } = req.body;

  const newBlog = new postBlogs({
    title: title,
    description: description,
  });

  newBlog
    .save()
    .then((data) => {
      res.send({ code: 1 });
    })
    .catch((err) => {
      res.send({ code: 0 });
    });
});

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running at port : ${PORT}`))
  )
  .catch((error) => console.log("Error: ", error.message));

mongoose.set("useFindAndModify", false);
