import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';

const Data = () => {
  const [data, setData] = useState ([]);

  useEffect(() => {
    axios.get("http https://swapi.co/api/people/")
    .then(response => {
      console.log(response)
      setData(response.data.results)
    })
    .catch(err => {
      console.log(err)
    })
  },[])
  
  return (
    <div>
      {data.map(i => (
        <cardCreator data = {i}/>
      ))}
    </div>
  );
}

export default Data;

