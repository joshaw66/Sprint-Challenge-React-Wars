import React from 'react';
import styled from "styled-components";


export function StarPage(props) {
if (!props.person) return <h2>Here You Go!</h2>;

  return (
    <div>
      <div>
        <h1>{props.person.name}</h1>
        <h3>{props.person.eye_color}</h3>
        <h3>{props.person.home_world}</h3>
        <h3>{props.person.species}</h3>
        <h3>{props.person.vehicles}</h3>
      </div>
    </div>
  );
  }

export default StarPage;
