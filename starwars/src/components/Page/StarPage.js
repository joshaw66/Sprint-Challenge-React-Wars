import React from 'react';
import styled from "styled-components";

const Body = styled.div

const Card = styled.div

export function StarPage(props) {
  return (
    <Body>
      <Card>
        <h1>{props.data.name}</h1>
        <h3>{props.data.eye_color}</h3>
        <h3>{props.data.home_world}</h3>
        <h3>{props.data.species}</h3>
        <h3>{props.data.vehicles}</h3>
      </Card>
    </Body>
  );
}

export default StarPage;
