import React from 'react';
import './country.css'

const Country = (props) => {
    const { name, capital, population, area, flags } = props.country
    return (
        <div className='container' >
            <h1 >name: {name.common}</h1>
            <p>capital : {capital}</p>
            <p>population : {population}</p>
            <p>area : {area}</p>
            <img src={flags.svg} alt="" />
        </div>
    );
};

export default Country;