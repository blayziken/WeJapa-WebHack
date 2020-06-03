const mongoose = require('mongoose')
const app = require('./app')
const dotenv = require('dotenv')


process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION!, Shutting down...');
    console.log(err.name, err.message);
    process.exit(1);
});

dotenv.config({path: './config.env'})

// CONNECTING TO DB
const DB = process.env.DATABASE_LOCAL;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
}). then(() => {
    console.log("DB connection successfull!")
}).catch(err => {
    console.log("DB Connection failed")
})

// STARTING SERVER
const port = process.env.PORT;
const server = app.listen(port, () => {
    console.log("App running...")
})


  process.on('unhandledRejection', err => {console.log('UNHANDLER REJECTION!, Shutting down...');
    console.log(err.name, err.message);
    server.close(() => {
      process.exit(1);
    });
  });
  