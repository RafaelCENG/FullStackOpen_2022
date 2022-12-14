const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose
	.connect(url)
	.then((result) => {
		console.log('connected to MongoDB')
	})
	.catch((error) => {
		console.log('error connecting to MongoDB:', error.message)
	})

const personSchema = new mongoose.Schema({
	name: String,
	number: String,
	id: Number,
})

personSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		console.log(returnedObject.id)
		console.log(returnedObject._id.toString())
		returnedObject.id = returnedObject._id.toString()
		delete returnedObject._id.toString()
		delete returnedObject.__v
	},
})

module.exports = mongoose.model('Person', personSchema)
