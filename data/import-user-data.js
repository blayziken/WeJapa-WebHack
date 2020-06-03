// const fs = require('fs')
// const mongoose = require('mongoose')
// const User = require('../models/userModel')

// // CONNECTING TO DATABASE
// const DB = (DATABASE_LOCAL = 'mongodb://localhost:27017/wejapa');

// mongoose.connect(DB, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: true,
//     useUnifiedTopology: true,
// }). then(() => {
//     console.log("DB connection successfull!")
// })

// // READ JSON FILE
// const users = JSON.parse(fs.readFileSync(`${__dirname}/user-data.json`, 'utf-8'))

// // IMPORT DATA TO DATABASE
// const importData = async () => {
//     try {
//         await User.create(users);
//         console.log('Data sucessfully loaded!')
//     } catch (err) {
//         console.log(err)
//     }
//     process.exit()
// }

// // DELETE ALL DATA FROM DB
// const deleteData = async () => {
//     try {
//       await User.deleteMany();
//       console.log('Data successfully deleted!');
//     } catch (err) {
//       console.log(err);
//     }
//     process.exit();
//   };
  

// if (process.argv[2] === '--import') {
//     importData();
// } else if (process.argv[2] === '--delete') {
//     deleteData();
// }

// console.log(process.argv);


// //node import-user-data --import
// //node import-user-data --delete
