import express from "express";

const app = express();

const handleListen = () => {
  console.log("✅💻 Localhost:3000 is on");
};

app.use("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, handleListen);
