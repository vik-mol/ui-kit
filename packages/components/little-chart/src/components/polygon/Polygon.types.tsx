import { LittleChartsCoords } from '../../little-charts.types';
import { SVGProps } from 'react';

interface PolygonProps extends SVGProps<SVGPolygonElement> {
  coords: Array<LittleChartsCoords>;
}

export default PolygonProps;
