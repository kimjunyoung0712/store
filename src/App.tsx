import Nav from './components/Nav';

import styled from "styled-components";
import { useMediaQuery } from 'react-responsive'
import { Route, Routes } from 'react-router';

import Chat from './pages/Chat';
import MyPage from './pages/MyPage';
import Search from './pages/Search';
import Login from './pages/Login';
import Join from './pages/Join';
import Home from './pages/Home';
import List from './pages/List';
import GoodsPhoto from './components/goods/GoodsPhoto';


export const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  text-decoration-line: none;
  background-color: #f9f9f9;
`;


function App() {
  return (
    <AppContainer>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/:id' element={<List />}></Route>
        <Route path="/search" element={<Search/>} />
        <Route path="/chat" element={<Chat/>} />
        <Route path="/mypage" element={<MyPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/join" element={<Join/>} />
      </Routes>
      <Nav />
    </AppContainer>
  );
}

export default App;
