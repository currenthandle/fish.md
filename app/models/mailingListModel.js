var mongoose = require('mongoose'),
	Schema = mongoose.Schema
	
var MailingListSchema = new Schema({
	email: String
})



mongoose.model('MailingList', MailingListSchema)

