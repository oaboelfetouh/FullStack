import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helloWorldButton from "./routers/helloWorldButton.js";

const app = express();

dotenv.config();
const port = process.env.PORT || 3000;

app.use(cors());
app.use("/helloWorldButton", helloWorldButton);

app.listen(port, ()=> {
    console.log(`app is listening on port ${port}`);
});