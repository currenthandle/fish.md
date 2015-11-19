module.exports = function(app) {
	
	var corals = require('../controllers/coralController')
	
	app.get('/corals', corals.render)
		.post('/corals', corals.create)
		
	app.get('/corals/lps', corals.renderLps)

}

