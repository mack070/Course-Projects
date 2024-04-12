import express from "express";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", function (request, response) {
  response.json("You are on the route. How did you get here?");
});

app.post("/comment", function (request, response) {
  const newComment = request.body;
  console.log(newComment);
  response.json(newComment);
});

app.listen(7070, function () {
  console.log("App is open on port 7070");
});