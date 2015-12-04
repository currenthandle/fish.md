var Coral = require('mongoose').model('Coral')

exports.read = function(req, res){
	console.log('req.coral',req.coral)
	res.json(req.coral)
}

exports.coralByPC = function(req, res, next) {
	console.log('req.params.productCode',req.params.productCode)
	Coral.findOne({ 
		productCode: req.params.productCode 
	}, function(err, coral) {
		if (err) {
			return next(err)
		} else {
			//res.json(coral)
			res.render('coral', {coral: coral})
		}
	})
}

function renderProduct(req, res, coral) {
	res	
}

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

exports.renderCoral = function(req, res, next) {
	if (req.session.lastVisit) {
		console.log(req.session.lastVisit)
	}
	
	req.session.lastVisit = new Date()
	
	Coral.find({}, function(err, corals) {
		if (err) {
			return next(err)
		} else { 
			for(coral in corals){
				console.log('cora',coral)
			}
			res.render('lps',  {corals : corals} )		
		}
	})
}
exports.renderLps = function(req, res, next) {
	if (req.session.lastVisit) {
		console.log(req.session.lastVisit)
	}
	
	req.session.lastVisit = new Date()
	
	Coral.find({}, function(err, corals) {
		if (err) {
			return next(err)
		} else { 
			for(coral in corals){
				console.log('cora',coral)
			}
			res.render('lps',  {corals : corals} )		
		}
	})
}
