import type { Meta, StoryObj } from '@storybook/react';
import { data } from './__mocks__';
import LittleCharts from '.';

const meta = {
  title: 'LittleChart',
  component: LittleCharts,
  args: {
    data,
    width: 400,
    height: 150,
    margins: [20, 2],
    children: (coords) => <LittleCharts.Line coords={coords} stroke="#0B61A4" strokeWidth={2} fill="none" />,
  },
} satisfies Meta<typeof LittleCharts>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Line: Story = {};

export const LineFilling: Story = {
  render: (props) => (
    <LittleCharts {...props}>
      {(coords) => (
        <g>
          <LittleCharts.Polygon fill="#3F92D2" coords={coords} />
          <LittleCharts.Line coords={coords} strokeWidth={2} stroke="#033E6B" />
        </g>
      )}
    </LittleCharts>
  ),
};

export const LineGradient: Story = {
  render: (props) => (
    <LittleCharts {...props}>
      {(coords) => (
        <g>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#66A3D2" />
              <stop offset="50%" stopColor="#3F92D2" />
              <stop offset="100%" stopColor="#fff" />
            </linearGradient>
          </defs>
          <LittleCharts.Polygon fill={`url(#gradient)`} coords={coords} />
          <LittleCharts.Line strokeWidth={2} stroke="#033E6B" coords={coords} />
        </g>
      )}
    </LittleCharts>
  ),
};
