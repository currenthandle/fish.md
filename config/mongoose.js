var config = require('./config'),
	mongoose = require('mongoose')
	
module.exports = function() {
	var db = mongoose.connect(config.db)
	
	require('../app/models/mailingListModel')
	require('../app/models/user.server.model')
	require('../app/models/coralModel')
	require('../app/models/productModel')
	
	return db
}
