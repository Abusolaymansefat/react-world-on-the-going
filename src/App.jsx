import Countries from './Components/countries'
import './App.css'
import { Suspense } from 'react';

const countriesPromise = fetch('https://restcountries.com/v3.1/all')
.then(res => res.json());

function App() {
  

  return (
    <>
    <Suspense fallback= {<h3>Nadir vai going........</h3>}>
    <Countries countriesPromise= {countriesPromise}></Countries>
    </Suspense>
   
    
    </>
  )
}

export default App
