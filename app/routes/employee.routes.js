module.exports = app => {
	const employee = require("../controllers/employee.controller.js");
  
	var router = require("express").Router();
	const { body, validationResult } = require('express-validator');
	// Create a new Tutorial
	router.post("/", 
		body('first').not().isEmpty()
		.withMessage('Input is required'),
		body('last').not().isEmpty()
		.withMessage('Input is required'),
		body('email').not().isEmpty()
		.withMessage('Input is required'),
		body('email').isEmail()
		.withMessage('Must be a valid email'),
		body('phone').isNumeric()
		.withMessage('Must be a valid number'),
		body('phone').not().isEmpty()
		.withMessage('Input is required'),
		body('location').not().isEmpty()
		.withMessage('Input is required'),
		body('hobby').not().isEmpty()
		.withMessage('Input is required'),

		employee.create);
  
	// Retrieve all Tutorials
	router.get("/", employee.findAll);
  
	// Retrieve all published Tutorials
	router.get("/published", employee.findAllPublished);
  
	// Retrieve a single Tutorial with id
	router.get("/:id", employee.findOne);
  
	// Update a Tutorial with id
	router.put("/:id", 
		body('first').not().isEmpty()
		.withMessage('Input is required'),
		body('last').not().isEmpty()
		.withMessage('Input is required'),
		body('email').not().isEmpty()
		.withMessage('Input is required'),
		body('email').isEmail()
		.withMessage('Must be a valid email'),
		body('phone').isNumeric()
		.withMessage('Must be a valid number'),
		body('phone').not().isEmpty()
		.withMessage('Input is required'),
		body('location').not().isEmpty()
		.withMessage('Input is required'),
		body('hobby').not().isEmpty()
		.withMessage('Input is required'),
		employee.update);
  
	// Delete a Tutorial with id
	router.delete("/:id", employee.delete);
  
	// Delete all Tutorials
	router.delete("/", employee.deleteAll);
  
	app.use('/api/employee', router);
  };