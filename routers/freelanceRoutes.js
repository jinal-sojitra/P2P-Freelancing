const express = require('express');
const router = express.Router();

const controller = require('../controllers/freelancingController');

router.post('/registerEmployer', controller.registerEmployer );

router.post('/registerFreelancer', controller.registerFreelancer);

router.post('/postProject', controller.postProject );

router.post('/sendRequest', controller.sendRequest );

router.post('/finalizeFreelancer', controller.finalizeFreelancer);

router.get('/amISelected', controller.amISelected);

router.get('/getFreelancerRequest', controller.getFreelancerRequest);

router.post('/completeProject', controller.completeProject);

router.post('/cancelProject', controller.cancelProject);

router.delete('/deleteFreelancer', controller.deleteFreelancer);

router.delete('/deleteEmployer', controller.deleteEmployer);

router.get('/getFreelancer', controller.getFreelancer);


module.exports = router;
