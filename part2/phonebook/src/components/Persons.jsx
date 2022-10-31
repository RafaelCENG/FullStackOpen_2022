import Person from './Person'
const Persons = ({ persons, search, handleDelete }) => {
	return (
		<div>
			{persons
				.filter((person) => {
					return search.toLowerCase() === ''
						? person
						: person.name.toLowerCase().includes(search)
				})
				.map((person) => (
					<Person
						key={person.name}
						person={person}
						handleDelete={handleDelete}
					/>
				))}
		</div>
	)
}

export default Persons
