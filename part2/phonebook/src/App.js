import { useState } from 'react'

import Person from './components/Person'

const App = () => {
	const [persons, setPersons] = useState([{ name: 'Arto Hellas' }])
	const [newName, setNewName] = useState('')

	const addPerson = (e) => {
		e.preventDefault()

		const checkExists = persons.find((person) => person.name === newName)
		console.log(checkExists)

		if (checkExists === undefined) {
			const personObject = {
				name: newName,
			}
			setPersons(persons.concat(personObject))
		} else {
			alert(`${newName} is already added to phonebook`)
		}
		setNewName('')
	}

	const handleNameChange = (e) => {
		setNewName(e.target.value)
	}

	return (
		<div>
			<h2>Phonebook</h2>
			<form onSubmit={addPerson}>
				<div>
					name: <input value={newName} onChange={handleNameChange} />
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
