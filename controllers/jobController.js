const fs = require('fs')
const Job = require('../models/jobModel')

exports.getAllJobs = async (req, res, next) => {
    const jobs = await Job.find()

    res.status(200).json({
        success: true,
        data: {
            jobs
        },
        message: "Job fetched successfully"
    })
}

exports.getJob = async (req, res, next) => {
    try {
        const job = await Job.findById(req.params.id)
        res.status(200).json({
            success: true,
            data: {
                job
            },
            message: "Job fetched successfully"
        })   
    } catch (err) {
        res.status(404).json({})
    }
}

