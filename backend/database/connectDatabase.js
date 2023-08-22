const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URI;

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("📥[database]: Connected MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });


