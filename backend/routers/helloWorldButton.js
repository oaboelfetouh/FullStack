import { Router } from "express";

const helloWorldButton = Router();

helloWorldButton.get("/", (req, res)=> {
  res.send("Hello World");
});

export default helloWorldButton;
