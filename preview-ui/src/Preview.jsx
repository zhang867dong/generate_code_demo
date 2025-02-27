import { ResponsiveLine } from '@nivo/line';
function LineChart() {
  return (
    <div className="w-full h-96">
      <ResponsiveLine
        data={[
          {
            id: "Series 1",
            data: [
              { x: 1, y: 50 },
              { x: 2, y: 80 },
              { x: 3, y: 40 },
              { x: 4, y: 90 },
              { x: 5, y: 60 },
            ],
          },
          {
            id: "Series 2",
            data: [
              { x: 1, y: 30 },
              { x: 2, y: 60 },
              { x: 3, y: 20 },
              { x: 4, y: 70 },
              { x: 5, y: 50 },
            ],
          },
        ]}
        enableCrosshair={false}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: 0,
          max: "auto",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickValues: [1, 2, 3, 4, 5],
          legend: "X Axis",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          legend: "Y Axis",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        pointSize={10}
        pointColor={{ from: "color", modifiers: [["darker", 0.6]] }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "color", modifiers: [["darker", 0.6]] }}
        useMesh={true}
        colors={{ scheme: "set1" }}
      />
    </div>
  );
}

export default LineChart;