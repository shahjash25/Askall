const mongoose = require("mongoose");

const url ="mongodb+srv://shahjash25:projectaskall@cluster0.xvun6ne.mongodb.net/askallmern?retryWrites=true&w=majority";

module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};