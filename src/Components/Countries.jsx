import React, { use, useState } from 'react';
import Country from './Country/Country';
import './Countries/Countries.css'


const countries = ({countriesPromise}) => {

    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlags, setVisitedFlags] = useState([])
    const Countries = use(countriesPromise);
    // console.log(Countries)
    const handleVisitedFlags = (flag) => {
        // console.log('flag is add', flag)

    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags)
    }
    const handleVisitedCountries = (country) => {
        console.log('country visited clicked to be added', country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries (newVisitedCountries)
    }
    return (
        <div>
            <h1>Traveling Countries: {Countries.length}</h1>
            <h3> Traveling so far: {visitedCountries.length} </h3>
            <div className='visited-flags-container'>
                {
                    visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
                }
            </div>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                }
            </ol>
            <div className='countries'>
            {
                Countries.map(country => <Country
                     key={country.cca3}
                     handleVisitedCountries= {handleVisitedCountries}
                     handleVisitedFlags = {handleVisitedFlags}
                      country={country} />)
            }           
            </div>
        </div>
    );
};

export default countries;