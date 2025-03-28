import { FC } from 'react';
import PolygonProps from './Polygon.types';
import { useLittleChartsContext } from '../../hooks';

const Polygon: FC<PolygonProps> = ({ coords, ...other }) => {
  const { verticalIndents } = useLittleChartsContext();

  let maxX = 0;
  let minX = 0;
  let maxY = 0;

  const linePoints = coords.reduce((acc, { x, y }) => {
    maxX = Math.max(maxX, x);
    minX = Math.min(minX, x);
    maxY = Math.max(maxY, y);

    return `${acc} ${x},${y}`;
  }, '');

  const polygonPoints = `${minX} ,${maxY + verticalIndents} ${linePoints} ${maxX},${maxY + verticalIndents}`;

  return <polygon points={polygonPoints} {...other} />;
};

export default Polygon;
