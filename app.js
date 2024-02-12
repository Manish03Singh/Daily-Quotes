const express = require('express');
const mongoose = require("mongoose")
require('dotenv').config();
const cors = require("cors")

// import like Router
const likeRouter = require("./routes/like.router")

const MONG0_URL = process.env.MONGODB_ATLAS_URL

mongoose.connect(MONG0_URL, { useNewUrlParser: true, useUnifiedTopology: true})
   .then(() => console.log("Database connected successfully!"))
   .catch(err => console.log(err, 'Error in database connection'));

const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors())
app.use(express.json());

// use like Router to handle requests to "/likes" route
app.use("/likes", likeRouter)

app.listen(PORT, () => {
   console.log('Server started on port', PORT);
});