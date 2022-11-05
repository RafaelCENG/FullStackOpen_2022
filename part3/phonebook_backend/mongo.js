// const mongoose = require('mongoose')

// if (process.argv.length < 3) {
// 	console.log(
// 		'Please provide the password as an argument: node mongo.js <password>'
// 	)
// 	process.exit(1)
// }

// const password = process.argv[2]

// const url = `mongodb+srv://strikecy:${password}@fullstackopen.lpjsjfv.mongodb.net/phonebookApp?retryWrites=true&w=majority`

// mongoose.connect(url)

// const personSchema = new mongoose.Schema({
// 	name: String,
// 	number: String,
// })

// const Person = mongoose.model('Person', personSchema)

// console.log(process.argv.length)
// if (process.argv.length === 3) {
// 	Person.find({})
// 		.then((result) => {
// 			console.log('phonebook:')
// 			result.forEach((person) => {
// 				console.log(person)
// 			})
// 			mongoose.connection.close()
// 		})
// 		.catch((err) => console.log(err))
// } else {
// 	const person = new Person({
// 		name: process.argv[3],
// 		number: process.argv[4],
// 	})

// 	person.save().then(() => {
// 		console.log(
// 			`added ${process.argv[3]} number ${process.argv[4]} to phonebook`
// 		)
// 		return mongoose.connection.close()
// 	})
// }
