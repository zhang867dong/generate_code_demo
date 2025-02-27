import { ResponsiveLine } from '@nivo/line';
export default function LineChartPage() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Mock Line Chart</h1>
      <div className="w-full h-96">
        <ResponsiveLine
          data={[
            {
              id: "Series 1",
              data: [
                { x: 1, y: 10 },
                { x: 2, y: 15 },
                { x: 3, y: 12 },
                { x: 4, y: 18 },
                { x: 5, y: 30 },
              ],
            },
            {
              id: "Series 2",
              data: [
                { x: 1, y: 5 },
                { x: 2, y: 10 },
                { x: 3, y: 8 },
                { x: 4, y: 14 },
                { x: 5, y: 25 },
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
            orient: "bottom",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Time",
            legendOffset: 36,
            legendPosition: "middle",
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Value",
            legendOffset: -40,
            legendPosition: "middle",
          }}
          pointSize={10}
          pointColor={{ from: "color", modifiers: [["darker", 0.4]] }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          useMesh={true}
          gridXValues={[1, 2, 3, 4, 5]}
          gridYValues={[0, 5, 10, 15, 20, 25, 30]}
          colors={{ scheme: "paired" }}
        />
      </div>
    </div>
  );
}