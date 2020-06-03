const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const signToken = id => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
}

exports.signup = async (req, res, next) => {
    const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        status: req.body.status,
        phone: req.body.phone,
        experienceLevel: req.body.experienceLevel,
        stackOverflow: req.body.stackOverflow,
        github: req.body.github,
        resume: req.body.resume,
        createdAt: req.body.name,
        updatedAt: req.body.updatedAt,
        resetPasswordExpiry: req.body.resetPasswordExpiry,
        resetPasswordToken: req.body.resetPasswordToken
         // ,
        // passwordConfirm: req.body.passwordConfirm
    })

    // JWT 
    const token = signToken(newUser._id)

    res.status(201).json({
        status: 'success',
        data: {
            user: newUser
        },
        token
    })
}

exports.login = async (req, res, next) => {
    const {email, password} = req.body

    // Checking if email and password exists
    if(!email || !password) {
        return "Provide an email and a password please"
    }

    // Checking if user exits & password is correct
    const user = await User.findOne({email}).select('+password')
    // const user_details = await User.findById(user._id)
    
    if(!user || !(await user.correctPassword(password, user.password))) {
        return "Wrong email or password"
    }

    // If everything's good
    const token = signToken(user._id)

    res.status(201).json({
        success: true,
        data: {
            developer: {
                status: "Approved",
                user
            }
        },
        // user_details,
        token,
        message: 'Developer login successful'
    })
}

exports.findAllUsers = async (req, res, next) => {
    const abc = await User.find()

    res.status(201).json({
        success: true,
        abc
    })
}