import React from 'react';
import GoodsImg from '../components/goods/GoodsImg';
import GoodsInfo from '../components/goods/GoodsInfo';
import WriterInfo from '../components/WriterInfo';

function GoodsDetails() {
  return (
    <main>
      <GoodsImg></GoodsImg>
      <WriterInfo></WriterInfo>
      <GoodsInfo></GoodsInfo>
    </main>
  );
}

export default GoodsDetails;
