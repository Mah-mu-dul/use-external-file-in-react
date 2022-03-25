import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div className=''>
            <h1>total country : {countries.length}</h1>
            <div className="country-container">
                {
                    countries.map(country => <Country
                        country={country}  //you  can send whole country to props ans access every item from countries 
                    // name={country.name.common}
                    // capital={country.capital}
                    // population={country.population}
                    // area={country.area}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;