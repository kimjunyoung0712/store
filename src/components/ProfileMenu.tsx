import styled from "styled-components";

export const ProfileMenuContainer = styled.div`
  width: 360px;
  height: 80%;
  border-radius: 30px;
  background-color: #f9f9f9;
  box-shadow: 0px 0px 20px #d5d5d5;
  padding: 2px; 
  position: fixed;
  bottom: 0;

`;

// export const ProfileNickname = styled.div`

//   color : #242424;
//   font-family: Nanum Barun Gothic;
//   font-size : 25px;
//   font-weight: bold;
//   padding: 70px 0px 0px 0px; 
// `;

// export const ProfileGreeting = styled.div`
//   margin-top: 20px;
//   background-color : #deccf4;
//   font-family: Nanum Barun Gothic;
//   font-size : 13px;
//   font-weight: bold;
//   padding: 20px 0px 0px 0px; 
//   /* border: 1px solid red; */
// `;

const ProfileMenu = () => {
  return (
    <ProfileMenuContainer>
      {/* <ProfileNickname>김준영</ProfileNickname> */}
      {/* <ProfileGreeting></ProfileGreeting> */}
    </ProfileMenuContainer>
  );
};

export default ProfileMenu;