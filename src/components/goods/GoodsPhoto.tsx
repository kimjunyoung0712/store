import React from 'react';
import styled from 'styled-components';

type GoodsImgProps = {
  postImg: string;
};

const Wrapper = styled.section`
  width: 100vw;
  height: 40vh;
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
`;

function GoodsPhoto() {


  return (
    <Wrapper>

      <Photo src='images/logo.png' />
      <Photo src='/Users/kimjun-young/Desktop/project/team-prac/public/images/logo.png' />
      <Photo src='public/images/logo.png' />
    </Wrapper>
  );
}

export default GoodsPhoto;