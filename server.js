const express = require("express");
const dotenv = require("dotenv");
const colors = require('colors');
const cookieParser = require('cookie-parser');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const cors = require('cors');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');
//Load env vars
dotenv.config({path: './config/config.env'});

//Connect to database
connectDB();

//Route files
const security = require('./routes/security');
const client = require('./routes/client');
const investment = require('./routes/investment');
const quotation = require('./routes/quotationHistory');
const bankDeposit = require('./routes/bankDeposit');
const auth = require('./routes/auth');
const users = require('./routes/users');
const recommendation = require('./routes/recommendation');




const app = express();
 
//Body parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());

// Sanitize data
app.use(mongoSanitize());

// Set securities headers 
app.use(helmet());

// Prevent XSS attacks
app.use(xss());

// Enable CORS
app.use(cors());


// Rate limiting
const limiter = rateLimit({
    windowMs: 10*60*1000, //10 mins
    max:100
});
app.use(limiter);

// Prevent http param pollution

app.use(hpp());

//Mout routers
app.use('/api/v1/securities', security);
app.use('/api/v1/security', security);
app.use('/api/v1/client', client);
app.use('/api/v1/investment', investment);
app.use('/api/v1/quotation', quotation);
app.use('/api/v1/bankDeposit', bankDeposit);
app.use('/api/v1/auth', auth);
app.use('/api/v1/users', users);
app.use('/api/v1/recommendation', recommendation);



app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    //Close server & exit process
    server.close( () => process.exit(1));
})
