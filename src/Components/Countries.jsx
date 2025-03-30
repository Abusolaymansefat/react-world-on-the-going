import React, { use, useState } from 'react';
import Country from './Country/Country';
import './Countries/Countries.css'


const countries = ({countriesPromise}) => {

    const [visitedCountries, setVisitedCountries] = useState([])
    const Countries = use(countriesPromise);
    // console.log(Countries)

    const handleVisitedCountries = (country) => {
        console.log('country visited clicked to be added', country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries (newVisitedCountries)
    }
    return (
        <div>
            <h1>Traveling Countries: {Countries.length}</h1>
            <h3> Traveling so far: {visitedCountries.length} </h3>

            <ol>
                {
                    visitedCountries.map(country => <li>{country.name.common}</li>)
                }
            </ol>
            <div className='countries'>
            {
                Countries.map(country => <Country
                     key={country.cca3}
                     handleVisitedCountries= {handleVisitedCountries}
                      country={country} />)
            }           
            </div>
        </div>
    );
};

export default countries;