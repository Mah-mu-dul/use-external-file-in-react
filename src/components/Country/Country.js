import React from 'react';
import './country.css'

const Country = (props) => {
    return (
        <div className='container' >
            <h1 >name: {props.name}</h1>
            <p>capital : {props.capital}</p>
            <p>population : {props.population}</p>
            <p>area : {props.area}</p>
        </div>
    );
};

export default Country;