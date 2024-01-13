const express = require("express");
const app = express();
const helmet = require("helmet");
const morgan = require("morgan");


const connectDb = require("./server");
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);


const PORT = 8800;

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log("Server running at port 8800")
})
});