const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")

const app = express()
dotenv.config()

const userRoutes = require("./routes/user.js")

const PORT = process.env.PORT
const DB_URI = process.env.DB_URI

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("HOMEPAGE")
})
app.use("/users", userRoutes);


mongoose
    .connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(console.log("MongoDB is connected..."))
    .catch((error) => console.log(error.message))

app.listen(PORT, () => console.log(`Server is listening on port http://localhost:${PORT}`))