import React, { useState } from 'react';
import './Country.css'


const Country = ({country, handleVisitedCountries}) => {
    // console.log(country.flags)
    const [visited, setVisited] = useState(false);
    // console.log(handleVisitedCountries)

    const handleVisited = () =>{
        // console.log('visited clicked')
        // if(visited === true){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }
        setVisited(!visited);
        handleVisitedCountries(country);
    }
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <h3>Name: {country.name.common} </h3>
            <img src={country.flags.png}></img>
            <p>Independent: {country.independent ? 'free': 'Not Free'}</p>
            <p>population: {country.population}</p>
            <button className={visited ? 'btn-visited': 'Not-btn-visite' } onClick={handleVisited}>{
             visited ? 'Visited' : 'Not Visited'
                }</button>
        </div>
    );
};

export default Country;