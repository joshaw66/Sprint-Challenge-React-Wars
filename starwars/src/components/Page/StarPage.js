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

const StyledSection = styled.section`
  display: inline-block;
  padding: 3%;
  margin: 2%;
  background: lightblue;
  height: auto;
  margin-bottom: 15px;
  border: 3px solid black;
  `;

// Content Styles //

const StyledPage = styled.p`
  color: black;
  opacity: 2;
  `;

export function StarPage(props) {
if (!props.person) return <h2>Here You Go!</h2>;

  return (
      <StyledSection>
        <StyledHeader1>{props.person.name}</StyledHeader1>
        <StyledPage>Eye Color: {props.person.eye_color}</StyledPage>
        <StyledPage>Height: {props.person.height}</StyledPage>
        <StyledPage>Mass: {props.person.mass}</StyledPage>
        <StyledPage>Hair Color: {props.person.hair_color}</StyledPage>
      </StyledSection>
  );
  }

export default StarPage;
