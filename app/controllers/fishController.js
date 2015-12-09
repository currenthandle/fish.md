var Fish = require('mongoose').model('Fish')
exports.renderSelector = function(req, res) {
	Fish.find({type: req.params.selector},
		//callback
		function(err, data){
			if(err) {
				return next(err)
			} else {
				if(data){
					res.render('fishSelector', {selector, req.params.selector, fishs: data})	
				} else {  
					Fish.find({region: req.params.selector}, 
					//callback
					function(err, data){
						if(err){
							return next(err)
						} else {
							res.render('fishSelector', {selector, req.params.selector, fishs: data})
						}
					})
				}
			}
		}
	)

}
/*
exports.types = function(req, res){
	if(req.params.type.toLowerCase() === 'lps'){
		Coral.find({type: req.params.type},
			//callback
			function(err, lpsCorals){
				if(err) {
					return next(err)
				} else {
					res.render('lps', {corals: lpsCorals})
				}
			}
		)
	} else if(req.params.type.toLowerCase() === 'sps'){
		Coral.find({type: req.params.type},
			//callback
			function(err, spsCorals){
				if(err) {
					return next(err)
				} else {
					res.render('sps', {corals: spsCorals})
				}
			}
		)
	} else if(req.params.type.toLowerCase() === 'soft'){
		Coral.find({type: req.params.type},
			//callback
			function(err, softCorals){
				if(err) {
					return next(err)
				} else {
					res.render('soft', {corals: softCorals})
				}
			}
		)
	} else {
		res.render('corals')
	}
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
*/
