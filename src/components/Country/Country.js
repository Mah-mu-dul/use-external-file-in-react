import React from 'react';
import './country.css'

const Country = (props) => {
    const { name, capital, population, area, flags } = props.country
    return (
        <div className='container' >
            <h1 > {name.common}</h1>
            <img src={flags.svg} alt="" />

            <p>capital : {capital}</p>
            <p>population : {population}</p>
            <p>area : {area}</p>
        </div>
    );
};

export default Country;