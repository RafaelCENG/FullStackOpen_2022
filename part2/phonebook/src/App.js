import { useState } from 'react'

import Person from './components/Person'

const App = () => {
	const [persons, setPersons] = useState([
		{ name: 'Arto Hellas', number: '040-1234567' },
	])
	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')

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

	return (
		<div>
			<h2>Phonebook</h2>
			<form onSubmit={addPerson}>
				<div>
					name: <input value={newName} onChange={handleNameChange} />
				</div>
				<div>
					number: <input value={newNumber} onChange={handleNumberChange} />
				</div>
				<div>
					<button type="submit">add</button>
				</div>
				<div>debug: {newName}</div>
			</form>
			<h2>Numbers</h2>
			<div>
				{persons.map((person) => (
					<Person key={person.name} person={person} />
				))}
			</div>
		</div>
	)
}

export default App
