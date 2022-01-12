import React from 'react';
import styled from 'styled-components';
import goodslist from '../data/goodslist';
import GoodsListItem from '../components/goods/GoodsListItem';

const Header = styled.header`
  width: 98%;
  height: 8vh;
  background-color: beige;
`;

const GoodsWrapper = styled.ul`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

function Home() {
  return (
    <main>
      <Header></Header>
      <GoodsWrapper>
        {goodslist.map((good) => {
          return <GoodsListItem key={good.id} info={good} />;
        })}
      </GoodsWrapper>
    </main>
  );
}

export default Home;
