var Coral = require('mongoose').model('Coral')

exports.create = function(req,res, next) {
	var coral = new Coral(req.body)	
	coral.save(function(err){
		if (err) {
			return next(err)
		} else {
			res.json(coral)
		}
	})
}
exports.list = function(req, res, next) {
	Coral.find({}, function(err, corals) {
		if (err) {
			return next(err)
		} else { 
			res.json(corals)
		}
	})
}

exports.render = function(req, res) {
	if (req.session.lastVisit) {
		console.log(req.session.lastVisit)
	}
	
	req.session.lastVisit = new Date()
	
	res.render('corals', {
		title: 'Hello World'
	})		
}

exports.renderLps = function(req, res) {
	if (req.session.lastVisit) {
		console.log(req.session.lastVisit)
	}
	
	req.session.lastVisit = new Date()
	
	Coral.find({}, function(err, corals) {
		if (err) {
			return next(err)
		} else { 
	//		res.json(corals)
			console.log('typeof corals', typeof corals)
			console.log('corals',corals)
			for(coral in corals){
				console.log('cora',coral)
				console.log(corals[coral].type)
			}
			res.render('lps',  {corals : corals} )		
		}
	})
	
	
}
