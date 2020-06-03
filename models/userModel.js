const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name must be entered!']
    },
    email: {
        type: String,
        required: [true, "Please enter an email address"],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Provide a valid email address abeg']
    },
    password: {
        type: String,
        required: [true, "Password required"],
        select: false
    },
    // passwordCOnfirm: {
    //     type: String,
    //     required: [true, "Confirm Password"],
    //     validate: {
    //         validator: function(value) {
    //             return value === this.password;
    //         },
    //         message: 'Passwords are not the same, please input again'
    //     }
    // }
    status: {
        type: String
    },
    phone: {
        type: String
    },
    experienceLevel: {
        type: String
    },
    stackOverflow: {
        type: String
    },
    github: {
        type: String
    },
    resume: {
        type: String
    },
    createdAt: {
        type: String
    },
    updatedAt: {
        type: String
    },
    resetPasswordExpiry: {
        type: String
    },
    resetPasswordToken: {
        type: String
    }
})

// PRE SAVE MIDDLEWARE
userSchema.pre('save', async function(next) {
    // ONLY RUN IF PASSWORD FIELD WAS MODIFIED
    if(!this.isModified('password')) {
        return next()
    }
    
    // HASH PASSWORD
    this.password = await bcrypt.hash(this.password, 12)

    next();
})

// CREATING AN INSTANCE METHOD TO COMPARE THE INPUTED PASSWORD TO THE ONE IN OUR MONGOOSE DATABASE
userSchema.methods.correctPassword = async function(inputPassword, userPassword) {
    return await bcrypt.compare(inputPassword, userPassword) // returns true of false
}

// CREATING MODEL
const User = mongoose.model('User', userSchema)


module.exports = User