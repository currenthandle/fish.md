var mongoose = require('mongoose'),
	Schema = mongoose.Schema
	
var UserSchema = new Schema({
	firstName: String,
	lastName: String,
	email: String,
	username: {
		type: String,
		trim: true
	},
	password: String,
	created: {
		type: Date,
		default: Date.now
	}
})

UserSchema.virtual('fullName').get(function() {
	return this.firsName + ' ' + this.lastName
})

UserSchema.set('toJSON', { getters: true, virtuals: true })

mongoose.model('User', UserSchema)
