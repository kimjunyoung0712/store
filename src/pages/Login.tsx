import React from 'react';
import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  text-align: center;
  width: 360px;
  height: 90%;
  border-radius: 30px;
  background-color: #f9f9f9;
  box-shadow: 0px 0px 20px #d5d5d5;
  padding: 2px; 
  position: fixed;
  bottom: 0;
`;

export const LoginTitle = styled.div`
  margin-top: 60px;
  margin-bottom: 40px;
  color : #636363;
  font-family: Nanum Barun Gothic;
  font-size : 40px;
  font-weight: bold;
`;

export const LoginInputContainer = styled.div`
  width: 240px;
  height: 40px;
  border-radius: 20px;
  border: 2px solid #eeeeee;;
  /* box-shadow: 0px 0px 10px #e8e7e7; */
  background-color: #f9f9f9;
  padding: 2px; 
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginInput = styled.input`
  width: 80%;
  height: 60%;
  border: none;
  background-color: #f9f9f9;
  text-align: left;
  color : #808080;
  font-family: Nanum Barun Gothic;
  font-size : 15px;
  outline: none;
  ::placeholder {color: #cdcdcd}
  ::placeholder {font-size : 12px}
`;


export const LoginBtn = styled.div`
  width: 240px;
  height: 40px;
  border-radius: 20px;
  border: 2px solid #b5a1f9;;
  /* box-shadow: 0px 0px 10px #e8e7e7; */
  background-color: #b5a1f9;;
  padding: 2px; 
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color : #f9f9f9;
  font-family: Nanum Barun Gothic;
  font-size : 15px;
  font-weight: bold;
`;

export const LoginLine = styled.div`
  width: 240px;
  height: 2px;
  border-radius: 20px;
background-color: #cdcbcb;
  margin: 10px;
`;

export const JoinBtnMail = styled.div`
  width: 240px;
  height: 40px;
  border-radius: 20px;
  border: 2px solid #ffb398;
  background-color: #ffb398;
  padding: 2px; 
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color : #f9f9f9;
  font-family: Nanum Barun Gothic;
  font-size : 15px;
  font-weight: bold;
`;

export const JoinBtnKakao = styled.div`
  width: 240px;
  height: 40px;
  border-radius: 20px;
  border: 2px solid #f5db73;
  background-color:#f5db73;
  padding: 2px; 
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color : #f9f9f9;
  font-family: Nanum Barun Gothic;
  font-size : 15px;
  font-weight: bold;
`;


const Login = () => {
  return (
    <LoginContainer>
      <LoginTitle>LOGIN</LoginTitle>
      <LoginInputContainer><LoginInput placeholder='아이디를 입력하세요'></LoginInput></LoginInputContainer>
      <LoginInputContainer><LoginInput placeholder='비밀번호를 입력하세요'></LoginInput></LoginInputContainer>
      <LoginBtn >로그인</LoginBtn>
      <LoginLine />
      <JoinBtnMail >메일로 시작하기 </JoinBtnMail>
      <JoinBtnKakao> 카카오로 시작하기</JoinBtnKakao>
    </LoginContainer>
  );
};

export default Login;