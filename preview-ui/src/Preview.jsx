import { ResponsiveLine } from '@nivo/line';
function LineChart() {
  return (
    <div className="w-full h-96">
      <ResponsiveLine
        data={[
          {
            id: "Sales Data",
            data: [
              { x: 1, y: 20 },
              { x: 2, y: 40 },
              { x: 3, y: 35 },
              { x: 4, y: 50 },
              { x: 5, y: 45 },
              { x: 6, y: 60 },
              { x: 7, y: 75 },
            ],
          },
          {
            id: "Revenue Data",
            data: [
              { x: 1, y: 10 },
              { x: 2, y: 30 },
              { x: 3, y: 25 },
              { x: 4, y: 55 },
              { x: 5, y: 50 },
              { x: 6, y: 70 },
              { x: 7, y: 80 },
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
          tickValues: [1, 2, 3, 4, 5, 6, 7],
          legend: "Time (Months)",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          legend: "Value",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        pointSize={10}
        pointColor={{ from: "color", modifiers: [["darker", 0.6]] }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "color", modifiers: [["darker", 0.6]] }}
        useMesh={true}
        colors={{ scheme: "set2" }}
      />
    </div>
  );
}

export default LineChart;