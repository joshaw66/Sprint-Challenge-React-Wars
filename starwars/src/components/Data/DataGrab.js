import React, { useState, useEffect } from 'react';
import axios from "axios";
import StarPage from '../Page/StarPage';
import { Card } from 'reactstrap';

const DataGrab = () => {
  const [data, setData] = useState ([]);

  useEffect(() => {
    axios.get("http https://swapi.co/api/people/")
    .then(response => {
      console.log(response)
      setData(response.data.results);
    })
    .catch(err =>
      console.log("The Force is not With You", err)
  )
  },[])
  
  return (
		<div>
			{data.map(i => (
	        <StarPage data ={i}/>
	    ))}
	  </div>
  );
}

export default DataGrab;

