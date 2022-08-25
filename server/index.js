//Importing dependencies
import express from "express";
import {} from "dotenv/config";
import cors from "cors";
import bodyParser from "body-parser";
import Idea from "./routes/Idea.js";
import User from "./routes/User.js";
//Making Instances
const app = express();

//MiddleWares
app.use(express.json()); // For JSON data
app.use(cors("*")); // For incoming request

//Api Endpoint
app.get("/api/", (req, res) => {
  res.json({ msg: "Success✅" });
});

//Routes
app.use("/api/idea", Idea);
app.use("/api/user", User);

//Listening to the port
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`The server is listening on the port ${PORT}`);
});
