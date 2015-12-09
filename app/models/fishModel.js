var mongoose = require('mongoose'),
	Schema = mongoose.Schema
	
var FishSchema = new Schema({
	productCode: String,
	
	type: String,

	region: String,
	
	thumbnailImg: String,
	fullImg: String,
	
	commonName: String,
	scientificName: String,

	description: String
})



mongoose.model('Fish', FishSchema)

