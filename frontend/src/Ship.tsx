import React from 'react';

interface Props {
  ship: Ships;
}

const Ship: React.FC<Props> = ({ ship }) => {
  let src;
  switch (ship) {
    case 1:
      src = '/ship_2.png';
      break;
    case 2:
      src = '/ship_3.png';
      break;
    case 3:
      src = '/ship_3.png';
      break;
    case 4:
      src = '/ship_4.png';
      break;
    case 5:
      src = '/ship_5.png';
      break;
    default:
      throw Error('F off');
  }
  return (
    <img className="ship2" src={src} draggable='false' />
  );
};

export default Ship;