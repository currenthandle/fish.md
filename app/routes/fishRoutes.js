module.exports = function(app) {
	
	var fish = require('../controllers/fishController')
	
	app.get('/fish', fish.render)
		.post('/fish', fish.create)
	
	app.get('fish/:sorter' fish.renderSorter)
	
	app.get('/fish/lps', fish.renderLps)

	
	app.get('/fish/:type', fish.types)
	app.get('/fish/lps/:productCode', fish.coralByPC)
	
	
	app.get('/fish/test/:val', function(req, res) {
		console.log('req.params.val', req.params.val)
		res.end('<p>done</p>'+req.params.val.toString())
	})
	
	app.get('/:category/:subcategory/:type/:id', function(req, res){
		db.fish.find({category: category})
	})
	
}

