import express from "express";
import multer from "multer";

const app = express();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("myfile"), (req, res) => {
  res.json({
    message: "File uploaded",
    file: req.file
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});