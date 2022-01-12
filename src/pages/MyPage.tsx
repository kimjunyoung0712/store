import styled from "styled-components";
import Profile from "../components/Profile";
import MyMenu from "../components/MyMenu";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 98vw;
  height: 100%;
`;

const MyPage = () => {
  return (
    <>
      <Profile />
      <MyMenu />
    </>
  );
};

export default MyPage;