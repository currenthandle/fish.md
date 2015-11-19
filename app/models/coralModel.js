var mongoose = require('mongoose'),
	Schema = mongoose.Schema
	
var CoralSchema = new Schema({
	productCode: String,
	thumbnailImg: String,
	fullImg: String,
	commonName: String,
	scientificName: String,
	type: String,
	origin: String,
	care: String,
	behavior: String,
	diet: String,
	habitat: String,
	light: String
})



mongoose.model('Coral', CoralSchema)

