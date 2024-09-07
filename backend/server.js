import express from "express";
import { apiRouter } from "./Routers/apiRouter.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
const port = 7676;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
