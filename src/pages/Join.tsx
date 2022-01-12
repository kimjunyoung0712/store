import React from 'react';
import styled from "styled-components";

export const JoinContainer = styled.div`
  /* display: flex; */
  background-color: #fffefe;
`;

export const JoinTitle = styled.div`
  margin-top: 100px;
  width: 100%;
  height: 100%;
  background-color: #fffefe;
`;


const Join = () => {
  return (
    <JoinContainer>
      <JoinTitle>회원가입</JoinTitle>
    </JoinContainer>
  );
};

export default Join;