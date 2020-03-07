import React, { useState, useEffect } from 'react';
import './App.css';
import { StarPage } from './components/Page/StarPage';
import axios from "axios";


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.co/api/people/").then((res) => {
        setCharacters(res.data.results);
    }).catch(err => {
      console.log("THE FORCE IS NOT WITH YOU");
    }).finally(() => {
      console.log("You have failed me for the last time...");
    });
}, [])

if (!characters) return <h3>Loading...</h3>;

  return (
    <div className="App">
      <h1 className="Header">Joshua's React Wars</h1>
      {
        characters.map((item) => {
          console.log(item)
          return (
            <StarPage person={item}/>
          );
        })
      }
    </div>
  );
}

export default App;