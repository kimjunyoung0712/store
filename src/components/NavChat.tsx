import React from 'react';

import styled from "styled-components";

export const NavChatContainer = styled.div`
  /* display: inline; */
`;

export const ChatTitle = styled.div`
  margin-top: 3px;
  color : #323232;
  font-family: Nanum Barun Gothic;
  font-size : 9px;
  font-weight: bold;
`;

export const ChatIcon = styled.img`
  color : #323232;
  height: 20px;
`;

const NavChat = () => {
  return (
    <NavChatContainer>
      <ChatIcon src="/icons/join.png"/>
      <ChatTitle>로그인</ChatTitle>
    </NavChatContainer>
  );
};

export default NavChat;