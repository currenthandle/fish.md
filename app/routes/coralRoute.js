module.exports = function(app) {
	
	var corals = require('../controllers/coralController')
	
	app.get('/corals', corals.render)
		.post('/corals', corals.create)
	
	
	app.get('/corals/lps', corals.renderLps)

	app.get('corals/lps/:productCode', corals.render)
	
	app.param('productCode', corals.coralByProductCode)
	
	console.log('hi')
}

