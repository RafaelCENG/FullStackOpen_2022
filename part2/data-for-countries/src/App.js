import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Countries from './components/Countries'

function App() {
	// const [search, setSearch] = useState('')
	const [countries, setCountries] = useState([])
	const [filteredData, setFilteredData] = useState([])

	useEffect(() => {
		console.log('effect')
		axios.get('https://restcountries.com/v3.1/all').then((response) => {
			console.log('promise fulfilled')
			setCountries(response.data)
			setFilteredData(response.data)
		})
	}, [])

	const handleFilterChange = (e) => {
		// setSearch(e.target.value)
		let value = e.target.value.toLowerCase()
		let result = []
		result = countries.filter((country) => {
			return country.name.common.toLowerCase().includes(value)
		})
		setFilteredData(result)
	}
	return (
		<div className="App">
			<div>
				find countries <input onChange={handleFilterChange}></input>
				<Countries filteredData={filteredData} />
			</div>
		</div>
	)
}

export default App
