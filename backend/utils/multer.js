const multer = require("multer");
const path = require("path");

const multerConfig = multer({
  storage: multer.diskStorage({
    destination: "./uploads",
  }),
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);

    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
      const error = new Error("Unsupported file type!");
      cb(error, false);
    } else {
      cb(null, true);
    }
  },
});

module.exports = multerConfig;
