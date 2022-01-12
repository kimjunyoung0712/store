import React from 'react';
import styled from "styled-components";
import MyMenuMyGoods from './MyMenuMyGoods';
import MyMenuMyInfo from './MyMenuMyInfo'
import MyMenuLogout from './MyMenuLogout';

export const MyMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  /* justify-content: flex-start; */
  width: 300px;
  height: 600px;
  border-radius: 30px;
  /* background-color: #f9f9f9;
  box-shadow: 0px 0px 20px #d5d5d5; */
  /* border: 1px solid red; */
  padding: 2px; 
  position: fixed;
  bottom: 0;
`;

export const MyId = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  background-color: #f4f4f4;
  border-radius: 30px;
  width: 300px;
  height: 40px;
  color : #7d7d7d;
  font-family: Nanum Barun Gothic;
  font-size : 15px;
  font-weight: bold;
  margin-bottom: 30px ;
  /* border: 1px solid red; */
`;

const MyMenu = () => {
  return (
    <MyMenuContainer>
      <MyId>candymask@gmail.com</MyId>
      <MyMenuMyGoods />
      <MyMenuMyInfo />
      <MyMenuLogout />
    </MyMenuContainer>
  );
};

export default MyMenu;