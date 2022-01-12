import React from 'react';
import styled from "styled-components";

export const MyMenuMyGoodsContainer = styled.div`
  width: 240px;
  height: 50px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #e8e7e7;
  background-color: #f9f9f9;
  padding: 2px; 
  margin: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 50px;
  text-align: center;
  color : #4f4f4f;
  font-family: Nanum Barun Gothic;
  font-size : 15px;
  font-weight: bold;
`;

export const MyMenuMyGoodsIcon = styled.img`
  margin: 10px;
  height: 28px;
`;

const MyMenuMyGoods = () => {
  return (
    <MyMenuMyGoodsContainer>
      <MyMenuMyGoodsIcon src="/icons/mygoods.png" />
      나의 판매내역
    </MyMenuMyGoodsContainer>
  );
};

export default MyMenuMyGoods;