require('dotenv').config()
const express = require('express')
var morgan = require('morgan')
const app = express()
const Person = require('./modules/person')

app.use(express.json())
app.use(express.static('build'))
app.use(
	morgan(':method :url :status :res[content-length] - :response-time ms :body')
)
morgan.token('body', (req) => {
	return JSON.stringify(req.body)
})

app.get('/', (request, response) => {
	response.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (request, response) => {
	Person.find({}).then((persons) => {
		response.json(persons)
	})
})

app.get('/info', (request, response) => {
	const total_persons = persons.length
	console.log(total_persons)
	response.send(
		`<h1>Phoneboook has info for ${total_persons} people` +
			'<br>' +
			new Date() +
			'</h1>'
	)
})

app.get('/api/persons/:id', (req, res) => {
	console.log(req.params.id)
	Person.findById(req.params.id)
		.then((person) => {
			if (person) {
				res.json(person)
			} else {
				res.status(404).end()
			}
		})
		.catch((error) => next(error))
})

app.delete('/api/persons/:id', (req, res, next) => {
	Person.findByIdAndRemove(req.params.id)
		.then((result) => {
			res.status(204).end()
		})
		.catch((error) => next(error))
})

app.post('/api/persons', (req, res) => {
	const body = req.body

	if (!body.name || !body.number) {
		return res.status(400).json({
			error: 'content missing',
		})
	}

	const person = new Person({
		name: body.name,
		number: body.number,
		id: Math.floor(Math.random() * 1000000),
	})

	person.save().then((savedPerson) => {
		res.json(savedPerson)
	})
})

const errorHandler = (error, request, response, next) => {
	console.error(error.message)

	if (error.name === 'CastError') {
		return response.status(400).send({ error: 'malformatted id' })
	}

	next(error)
}

// this has to be the last loaded middleware.
app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})
