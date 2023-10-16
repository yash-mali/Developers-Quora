const mongoose = require("mongoose");

const url =
  "";
module.exports.connect = () => {
  mongoose
    .connect(process.env.MONGO_URI , {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(() => console.log("MongoDB is connected successfully"))
    .catch((err) => console.log("Error: ", err));
};
