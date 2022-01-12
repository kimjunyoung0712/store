import styled from "styled-components";

export const MyMenuLogoutContainer = styled.div`
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

export const MyMenuLogoutIcon = styled.img`
  margin: 10px;
  height: 33px;
`;

const MyMenuLogout = () => {
  return (
    <MyMenuLogoutContainer>
      <MyMenuLogoutIcon src="/icons/logout.png" />
      로그아웃 하기
    </MyMenuLogoutContainer>
  );
};

export default MyMenuLogout;