var MailingList = require('mongoose').model('MailingList')

exports.render = function(req, res) {
	if (req.session.lastVisit) {
		console.log(req.session.lastVisit)
	}
	
	req.session.lastVisit = new Date()
	
	
	res.render('index', {
		title: 'index'
	})		

}

exports.renderKit = function(req, res) {
	if (req.session.lastVisit) {
		console.log(req.session.lastVisit)
	}
	
	req.session.lastVisit = new Date()
	
	
	res.render('kit', {
		title: 'kit'
	})		

}
exports.addToMailingList = function(req,res, next) {
    var email = new MailingList(req.body)
    email.save(function(err){
        if (err) {
            return next(err)
        } else {
            res.json(email)
        }
    })
}
