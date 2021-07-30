module.exports = (sequelize, Sequelize) => {
	const Employee = sequelize.define("employee", {
	  first: {
		type: Sequelize.STRING
	  },
	  last: {
		type: Sequelize.STRING
	  },
	  email: {
		type: Sequelize.STRING
	  },
	  phone: {
		type: Sequelize.STRING
	  },
	  location: {
		type: Sequelize.STRING
	  },
	  hobby: {
		type: Sequelize.STRING
	  },
	  published: {
		type: Sequelize.BOOLEAN
	  }
	});
  
	return Employee;
  };