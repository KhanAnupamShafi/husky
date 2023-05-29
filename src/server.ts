import mongoose from "mongoose";
import app from "./app";

const port = 5000;

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/practice");
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main();
