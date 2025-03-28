import { FC } from 'react';
import LineProps from './line.types';

const Line: FC<LineProps> = ({ coords, ...other }) => {
  const linePoints = coords.reduce((points, { x, y }) => points.concat(`${x} ${y},`), '');

  return <polyline fill='none' points={linePoints} {...other} />;
};

export default Line;
