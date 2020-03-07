import React, { useState, useEffect } from 'react';
import axios from "axios";
import Page from '../Page/Page';

const DataGrab = () => {
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
        <Page data = {i}/>
      ))}
    </div>
  );
}

export default DataGrab;

