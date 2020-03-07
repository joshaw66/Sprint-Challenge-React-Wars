import React from 'react';
import styled from "styled-components";


// Header Styles //

const StyledHeader1 = styled.h2`
  font-size: 1.4 rem;
  max-width: 100%;
  color: white;

  :hover {
    color: aqua;
  }
  `;

  // Card Styles //

  const StyledCard = styled.p`
    display: inline-block;
    background: lightblue;
    height: auto;
    margin-bottom: 15px;
    border: 3px solid black;
    `;

export function StarPage(props) {
if (!props.person) return <h2>Here You Go!</h2>;

  return (
      <div>
        <StyledHeader1>{props.person.name}</StyledHeader1>
        <StyledCard>Eye Color: {props.person.eye_color}</StyledCard>
        <StyledCard>Height: {props.person.height}</StyledCard>
        <StyledCard>Mass: {props.person.mass}</StyledCard>
        <StyledCard>Hair Color: {props.person.hair_color}</StyledCard>
      </div>
  );
  }

export default StarPage;
