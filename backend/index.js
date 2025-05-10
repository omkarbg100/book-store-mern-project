import express from "express";
import mongoose from "mongoose";
import { PORT, URL } from "./config.js";
import { Book } from "./model/bookmode.js";
import router from "./routes/booksRoute.js";
import cors from 'cors';

const app = express();

app.use(express.json());

// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());
app.use(express.static('model'))

// Option 2: Allow Custom Origins
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );

app.get("/", (req, res) => {
  console.log(req);
  res.send("WELCOME to MERN stack tutorials");
});
app.get(/a/, (req, res) => {
  res.send('/a/')
})



app.use('/books',router);

mongoose
  .connect(URL)
  .then(() => {
    console.log("app conected to data base");
    app.listen(PORT || 5000, () => {
      console.log(`App is listing on the port : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
