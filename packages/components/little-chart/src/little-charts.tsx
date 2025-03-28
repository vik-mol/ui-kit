import { FC, useMemo } from 'react';

import { transformDataToPoints } from './utils';
import LittleChartsProps, { LittleChartsComponents } from './little-charts.types';
import classNames from 'classnames';
import LittleChartContext from './context';

import { Line, Polygon } from './components';

/** Base chart component */
export const LittleCharts: FC<LittleChartsProps> & LittleChartsComponents = ({
  className,
  id,
  data,
  children,
  width,
  height,
  margins: [verticalIndents, horizontalIndents] = [0, 0],
}) => {
  const ctxValue = useMemo(
    () => ({
      verticalIndents,
      horizontalIndents,
    }),
    [verticalIndents, horizontalIndents]
  );

  const points = useMemo(
    () => transformDataToPoints({ data, width, height, verticalIndents, horizontalIndents }),
    [data, width, height, verticalIndents, horizontalIndents]
  );

  return (
    <LittleChartContext.Provider value={ctxValue}>
      <svg
        id={id}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${width} ${height}`}
        className={classNames(className)}
        height={height}
        width={width}
      >
        {children(points)}
      </svg>
    </LittleChartContext.Provider>
  );
};

LittleCharts.Line = Line;
LittleCharts.Polygon = Polygon;

export default LittleCharts;
