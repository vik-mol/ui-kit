import { ReactNode, FC } from 'react';
import LineProps from './components/line/line.types';
import PolygonProps from './components/polygon/Polygon.types';

interface LittleChartsCoords {
  x: number;
  y: number;
}

interface LittleChartsProps {
  children: (points: Array<LittleChartsCoords>) => ReactNode;
  /** Array numbers for building chart */
  data: Array<number>;
  /** initial SVG height px */
  height: number;
  /** initial SVG width px */
  width: number;
  /** Must */
  isResponsive?: boolean;
  id?: string;
  className?: string;
  margins?: [number, number];
}


interface LittleChartsComponents {
  Line: FC<LineProps>;
  Polygon: FC<PolygonProps>;
}

export { LittleChartsCoords, LittleChartsComponents };
export default LittleChartsProps;
