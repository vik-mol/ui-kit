import { LittleChartsCoords } from '../../little-charts.types';
import { SVGProps } from 'react';

interface LineProps extends SVGProps<SVGPolylineElement> {
  coords: Array<LittleChartsCoords>;
}

export default LineProps;
