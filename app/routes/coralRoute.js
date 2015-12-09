module.exports = function(app) {
	
	var corals = require('../controllers/coralController')
	
	app.get('/corals', corals.render)
		.post('/corals', corals.create)
	
	app.get('/corals/lps', corals.renderLps)

	
	app.get('/corals/:type', corals.types)
	app.get('/corals/lps/:productCode', corals.coralByPC)
	
	
	app.get('/corals/test/:val', function(req, res) {
		console.log('req.params.val', req.params.val)
		res.end('<p>done</p>'+req.params.val.toString())
	})
	
	app.get('/:category/:subcategory/:type/:id', function(req, res){
	//	db.corals.find({category: category})
		
	})
	
}

