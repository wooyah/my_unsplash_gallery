import React from 'react';
import { IoIosHeart } from 'react-icons/io';

function ButtonLike({active}) {
  return <IoIosHeart size="24" color={active? '#fcc1fd' : '#cdc1fd'} />;
}

export default ButtonLike;
