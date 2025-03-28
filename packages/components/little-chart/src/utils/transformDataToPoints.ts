type TransformDataToCoordsType = (params: {
  /** data array */
  data: Array<number>;
  /** root width */
  width: number;
  /** root height */
  height: number;
  /** indentation from below and above */
  verticalIndents: number;
  /** indentation from left and right */
  horizontalIndents: number;
}) => Array<{ x: number; y: number }>;

const transformDataToCoords: TransformDataToCoordsType = ({
  data,
  width,
  height,
  verticalIndents,
  horizontalIndents,
}) => {
  const {length} = data;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const fallbackRange = 2;
  const factualRange = max - min;
  const range = factualRange === 0 ? fallbackRange : factualRange;

  const vFactor = (height - verticalIndents * fallbackRange) / range;
  const hFactor = (width - horizontalIndents * fallbackRange) / (length > 1 ? length - 1 : 1);

  return data.map((d, i) => ({
    x: i * hFactor + horizontalIndents,
    y: (max - d) * vFactor + verticalIndents,
  }));
};

export default transformDataToCoords;
