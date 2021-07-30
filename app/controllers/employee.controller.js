const db = require("../models");
const Employee = db.employee;
const Op = db.Sequelize.Op;
const { check, validationResult } = require('express-validator');

// Create and Save a new Tutorial
exports.create = (req, res) => {
  
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};

// Create and Save a new Tutorial
exports.create = (req, res) => {
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() })
	  }
	// if (!req.body.name) {
	//   res.status(400).send({
	// 	message: "name can not be empty!"
	//   });
	//   return;
	// } else if (!req.body.phone) {
	// 	res.status(400).send({
	// 		message: "phone can not be empty!"
	// 	  });
	// 	  return;
	// }
	//  else if (!req.body.email) {
	// 	res.status(400).send({
	// 		message: "email can not be empty!"
	// 	  });
	// 	  return;
	// } else if (!isValidEmail(req.body.email)) {
	// 	res.status(400).send({
	// 		message: "email is not valid!"
	// 	  });
	// 	  return;
	// }
  
	// Create a Tutorial
	const employee = {
	  first: req.body.first,
	  last: req.body.last,
	  email: req.body.email,
	  phone: req.body.phone,
	  location: req.body.location,
	  hobby: req.body.hobby,
	  published: req.body.published ? req.body.published : false
	};
  
	// Save Tutorial in the database
	Employee.create(employee)
	  .then(data => {
		res.send(data);
	  })
	  .catch(err => {
		res.status(500).send({
		  message:
			err.message || "Some error occurred while creating the Tutorial."
		});
	  });
  };

//   Retrieve all Tutorials/ find by title from the database
  exports.findAll = (req, res) => {
	const name = req.query.name;
	var condition = name ? { name: { [Op.like]: `%${title}%` } } : null;
  
	Employee.findAll({ where: condition })
	  .then(data => {
		res.send(data);
	  })
	  .catch(err => {
		res.status(500).send({
		  message:
			err.message || "Some error occurred while retrieving tutorials."
		});
	  });
  };

//   Find a single Tutorial with an id:

  exports.findOne = (req, res) => {
	const id = req.params.id;
  
	Employee.findByPk(id)
	  .then(data => {
		res.send(data);
	  })
	  .catch(err => {
		res.status(500).send({
		  message: "Error retrieving Tutorial with id=" + id
		});
	  });
  };

//   Update a Tutorial identified by the id in the request:
  exports.update = (req, res) => {
	const id = req.params.id;
  
	Employee.update(req.body, {
	  where: { id: id }
	})
	  .then(num => {
		if (num == 1) {
		  res.send({
			message: "Employee was updated successfully."
		  });
		} else {
		  res.send({
			message: `Cannot update Employee with id=${id}. Maybe Tutorial was not found or req.body is empty!`
		  });
		}
	  })
	  .catch(err => {
		res.status(500).send({
		  message: "Error updating Tutorial with id=" + id
		});
	  });
  };

//   Delete a Tutorial with the specified id:

  exports.delete = (req, res) => {
	const id = req.params.id;
  
	Employee.destroy({
	  where: { id: id }
	})
	  .then(num => {
		if (num == 1) {
		  res.send({
			message: "Employee was deleted successfully!"
		  });
		} else {
		  res.send({
			message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
		  });
		}
	  })
	  .catch(err => {
		res.status(500).send({
		  message: "Could not delete Tutorial with id=" + id
		});
	  });
  };

//   Delete all Tutorials from the database:
  exports.deleteAll = (req, res) => {
	Employee.destroy({
	  where: {},
	  truncate: false
	})
	  .then(nums => {
		res.send({ message: `${nums} Tutorials were deleted successfully!` });
	  })
	  .catch(err => {
		res.status(500).send({
		  message:
			err.message || "Some error occurred while removing all tutorials."
		});
	  });
  };
//   Find all Tutorials with published = true:
  exports.findAllPublished = (req, res) => {
	Employee.findAll({ where: { published: true } })
	  .then(data => {
		res.send(data);
	  })
	  .catch(err => {
		res.status(500).send({
		  message:
			err.message || "Some error occurred while retrieving tutorials."
		});
	  });
  };