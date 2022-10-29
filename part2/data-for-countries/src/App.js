import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Countries from './components/Countries'

function App() {
	const [search, setSearch] = useState('')
	const [countries, setCountries] = useState([])

	useEffect(() => {
		console.log('effect')
		axios.get('https://restcountries.com/v3.1/all').then((response) => {
			console.log('promise fulfilled')
			setCountries(response.data)
			console.log(response.data)
		})
	}, [])

	const handleFilterChange = (e) => {
		setSearch(e.target.value)
	}

	return (
		<div className="App">
			<div>
				find countries <input onChange={handleFilterChange}></input>
				<Countries search={search} countries={countries} />
			</div>
		</div>
	)
}

export default App
