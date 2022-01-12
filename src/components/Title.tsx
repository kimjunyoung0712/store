import React from 'react';
import styled from "styled-components";

export const TitleContainer = styled.div`
  text-decoration-line: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  background-color: #fffefe;
  position: fixed;

  width: 100%;
  height: 5%;
  border-radius:10px;
  border-bottom: 0.5px solid grey;
`;

export const TitleLogo = styled.img`
  width: 10%;
  height: 80%;
  padding: 2px; 
`;

const Title = () => {
  return (
    <TitleContainer>
      <TitleLogo src="images/logo.png"></TitleLogo>
    </TitleContainer>
  );
};

export default Title;