const SingleCountry = ({ country }) => {
	const languages = Object.values(country[0].languages).map((language) => (
		<li key={language}>{language}</li>
	))
	return (
		<div>
			<h1>{country[0].name.common}</h1>
			<div>capital {country[0].capital}</div>
			<div>area {country[0].area}</div>
			<h3>languages:</h3>
			<ul>{languages}</ul>
			<img src={country[0].flags.png} alt="country flag" />
		</div>
	)
}

export default SingleCountry
