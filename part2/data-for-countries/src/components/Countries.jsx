const Countries = ({ countries, search }) => {

    // Whenever search change we map through countries to find which ones contain the search string in their name

    // > 10 Error message
    // 2-10 just names
    // 1 we render SingleCountry which contain name,capital,area,languages,flag

	return (<div>
        {countries.length > 10 ? 
            <div>Too many matches,specify another filter</div> : 

        
        }
    </div>
    )
}

export default Countries
