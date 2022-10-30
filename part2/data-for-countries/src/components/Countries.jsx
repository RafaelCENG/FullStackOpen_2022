import MultipleCountries from './MultipleCountries'
import SingleCountry from './SingleCountry'

const Countries = ({ filteredData }) => {
	// > 10 Error message
	if (filteredData.length > 10) {
		return <div>Too man matches,specify another filter</div>
	}
	// 2-10 just names
	else if (filteredData.length > 2 && filteredData.length <= 10) {
		return (
			<div>
				{filteredData.map((country) => (
					<MultipleCountries key={country.area} country={country} />
				))}
			</div>
		)
	}
	// 1 we render SingleCountry which contain name,capital,area,languages,flag
	else if (filteredData.length === 1) {
		return (
			<div>
				<SingleCountry country={filteredData} />
			</div>
		)
	}
}

export default Countries
