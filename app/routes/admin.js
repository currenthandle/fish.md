var Coral = require('mongoose').model('Coral')

module.exports = function(app) {

	//render index
	app.get('/admin', function(req, res){
		res.render('admin/index')
	})	
	
	app.route('/admin/corals')
		.get(function(req, res, next){
			Coral.find({}, function(err, corals){
				if (err) {
					return next(err)
				} else {
					res.render('admin/corals', {corals: corals})	
				}
			})
		})
		.post(function(req, res, next) { //Add new coraloral
			var coral = new Coral(req.body)
			coral.save(function(err) {
				if (err) {
					return next(err)
				} else {
					res.json(coral)
				}
			}) 
		})
	
	app.route('/admin/corals/:id')
		.get(function(req, res, next){			// Get 
			console.log("GET on app.route('/admin/corals/:id')")
			Coral.findOne({
				_id: req.params.id
			}, function(err, coral) {
				if (err) {
					return next(err)
				} else {
					res.render('admin/coral', {coral: req.params.id})
					
					//console.log('coral:',coral)
					//req.coral = coral 
					//next()
				}
			})
		})
		.put(function(req, res, next) {
			Coral.findByIdAndUpdate(req.user.id, req.body, function(err, user) {
				if (err) {
					return next(err)
				} else {
					res.json(user)
				}
			})
		})
		.delete(function(req, res, next){
			req.coral.remove(function(err){
				if (err) {
					return next(err)
				} else {
					res.json(req.user)
				}
			})	
		
		})
		
	
}

