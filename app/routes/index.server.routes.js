module.exports = function(app) {
	var index = require('../controllers/index.server.controller')
	app.get('/', index.render) 
		
	app.post('/mailingList', index.addToMailingList)
	
	app.get('/kit', index.renderKit)
		
}
