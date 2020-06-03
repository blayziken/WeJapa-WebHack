const express = require('express')
const router = express.Router()

const jobController = require('../controllers/jobController')


router.route('/all').get(jobController.getAllJobs)

router.route('/:id').get(jobController.getJob)

module.exports = router;