const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const userRouter = require('./routes/userRoutes');

// dotenv config
dotenv.config();

// mongodb connection
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}))

//routes
app.use('/api/v1/user', userRouter);

//port
const port = process.env.PORT || 5000;
// listen port
app.listen(port, () => {
    console.log(`Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT} `.bgBlue);
})