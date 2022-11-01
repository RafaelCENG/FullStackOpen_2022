import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import Notification from './components/Notification'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

import axios from 'axios'
import personService from './services/persons'

const App = () => {
	const [persons, setPersons] = useState([])

	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')
	const [search, setSearch] = useState('')
	const [addedMessage, setAddedMessage] = useState(null)

	useEffect(() => {
		console.log('effect')
		axios.get('http://localhost:3001/persons').then((response) => {
			console.log('promise fulfilled')
			setPersons(response.data)
		})
	}, [])

	const addPerson = (e) => {
		e.preventDefault()

		const checkExists = persons.find((person) => person.name === newName)
		if (checkExists === undefined) {
			const personObject = {
				name: newName,
				number: newNumber,
			}
			personService.create(personObject).then((response) => {
				setPersons(persons.concat(response.data))
				setAddedMessage(`Added ${personObject.name}`)
				setTimeout(() => {
					setAddedMessage(null)
				}, 5000)
			})
		} else {
			alert(`${newName} is already added to phonebook`)
		}
		setNewName('')
		setNewNumber('')
	}

	const handleNameChange = (e) => {
		setNewName(e.target.value)
	}
	const handleNumberChange = (e) => {
		setNewNumber(e.target.value)
	}

	const handleFilterChange = (e) => {
		setSearch(e.target.value)
	}

	const handleDelete = (id) => {
		if (window.confirm('Do you really want to delete this number?')) {
			console.log(id)
			personService
				.deletePerson(id)
				.then((response) => {
					setPersons(persons.filter((person) => person.id !== id))
				})
				.catch((error) => {
					console.log(error)
				})
		}
	}

	return (
		<div>
			<h2>Phonebook</h2>
			<Notification message={addedMessage} />
			<Filter handleFilterChange={handleFilterChange} />
			<h3>Add a new</h3>
			<PersonForm
				handleNameChange={handleNameChange}
				handleNumberChange={handleNumberChange}
				newName={newName}
				newNumber={newNumber}
				addPerson={addPerson}
			/>
			<h3>Numbers</h3>
			<Persons search={search} persons={persons} handleDelete={handleDelete} />
		</div>
	)
}

export default App
