const express = require('express')
const morgan = require('morgan');
const app = express()

const jobsRouter = require('./routes/jobRoutes')
const userRouter = require('./routes/userRoutes')

//MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
  
app.use(express.json());

// ROUTES
app.use('/api/job', jobsRouter)
app.use('/api/developer', userRouter)

module.exports = app