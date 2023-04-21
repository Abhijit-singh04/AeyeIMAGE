// using express
const express = require('express')
const dotenv = require("dotenv")

const app = express()
//Using CORS policy
const cors = require("cors");
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));

const bodyParser = require('body-parser');
// var jsonParser = bodyParser.json()
dotenv.config()
// const path = require("path")


app.use(express.json());


//router
const mainrouter=require('./router/routes');
app.use('/',mainrouter)
// app.get('/', (req, res) => {
//     res.send("hello")
//   })



const port = process.env.PORT || 5000;

const start = async () => {
    try {
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    }
    catch (error) {
        console.log(error);
    }
}

start();