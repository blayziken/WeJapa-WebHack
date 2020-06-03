// IMPORTING JSON DATA STRAIGHT TO MONGO

const fs = require('fs')
const mongoose = require('mongoose')
const Job = require('../models/jobModel')

// CONNECTING TO DATABASE
const DB = (DATABASE_LOCAL = 'mongodb://localhost:27017/wejapa');

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
}). then(() => {
    console.log("DB connection successfull!")
})

// READ JSON FILE
const jobs = JSON.parse(fs.readFileSync(`${__dirname}/data.json`, 'utf-8'))

// IMPORT DATA TO DATABASE
const importData = async () => {
    try {
        await Job.create(jobs);
        console.log('Data sucessfully loaded!')
    } catch (err) {
        console.log(err)
    }
    process.exit()
}

// DELETE ALL DATA FROM DB
const deleteData = async () => {
    try {
      await Job.deleteMany();
      console.log('Data successfully deleted!');
    } catch (err) {
      console.log(err);
    }
    process.exit();
  };
  

if (process.argv[2] === '--import') {
    importData();
} else if (process.argv[2] === '--delete') {
    deleteData();
}

console.log(process.argv);


//node import-json-data --import
//node import-json-data --delete
