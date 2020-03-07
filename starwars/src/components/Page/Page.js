import React from 'react';
import styled from "styled-components";

const Page = props => {
  return (
    <body>
      <information>
        <h1>{props.data.name}</h1>
        <h3>{props.data.eye_color}</h3>
        <h3>{props.data.home_world}</h3>
        <h3>{props.data.species}</h3>
        <h3>{props.data.vehicles}</h3>
      </information>
    </body>
  );
}

export default Page;
