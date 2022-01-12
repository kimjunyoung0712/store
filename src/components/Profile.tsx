import React from 'react';
import styled from "styled-components";
import ProfileMenu from './ProfileMenu';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position:  relative;
  height: 50%;
  width: 100%;
  margin: 20px 0px 0px 0px;
`;

export const ProfilePic = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 85%;
  position: fixed;
  top: 0;

  border:6px solid #d0c3f9;
  bottom: 100;
  padding: 2px;
  margin-top : 40px;
`;


const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileMenu></ProfileMenu>
      <ProfilePic  src="/images/profile.png" />
    </ProfileContainer>
  );
};

export default Profile;