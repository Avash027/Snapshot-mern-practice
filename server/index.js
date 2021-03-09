import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
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

// mongoose
//   .connect(CONNECTION_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() =>
//     app.listen(PORT, () => console.log(`Server running at port : ${PORT}`))
//   )
//   .catch((error) => console.log("Error: ", error.message));

// mongoose.set("useFindAndModify", false);
app.listen(PORT, () => console.log(`Server running at port : ${PORT}`));
