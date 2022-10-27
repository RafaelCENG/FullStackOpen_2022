import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

import axios from 'axios'

const App = () => {
	const [persons, setPersons] = useState([])

	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')
	const [search, setSearch] = useState('')

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
			setPersons(persons.concat(personObject))
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

	return (
		<div>
			<h2>Phonebook</h2>
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
			<Persons search={search} persons={persons} />
		</div>
	)
}

export default App
