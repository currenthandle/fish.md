module.exports = function(app) {
	
	var corals = require('../controllers/coralController')
	
	app.get('/corals', corals.render)
		.post('/corals', corals.create)
	
	app.get('/corals/lps', corals.renderLps)

//	app.get('/corals/lps/:productCode', corals.read)
	console.log('corals.byPC',corals.byPC)	
	app.get('/corals/lps/:productCode', corals.coralByPC)
	
	//app.param('productCode', corals.coralByProductCode)
	
	app.get('/corals/test/:val', function(req, res) {
		console.log('req.params.val', req.params.val)
		res.end('<p>done</p>'+req.params.val.toString())
	})
	
}

