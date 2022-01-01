const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");

dotenv.config();
mongoose
    .connect(
        "mongodb+srv://seddik:seddik@cluster0.t2h9k.mongodb.net/netflix?retryWrites=true&w=majority",
        {
            useNewUrlParser: true, useUnifiedTopology: true,
            useCreateIndex: true,
        }
    )
    .then(() => console.log("db is running"))
    .catch((err) => console.log(err));
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);

app.listen(8800, () => {
    console.log("server is running");
});
