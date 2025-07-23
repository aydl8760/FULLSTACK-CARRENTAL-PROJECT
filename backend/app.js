const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const connectdb = require("./config/dbConnect");
const authRoute = require("./routes/authRoute");

connectdb();

const app = express();
const PORT = process.env.PORT || 5008;

app.use(
  cors({
    origin: "http://localhost:3000", // exact frontend origin
    credentials: true, // allow cookies
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);

app.listen(PORT, () => {
  console.log(`server runing on port ${PORT}`);
});
