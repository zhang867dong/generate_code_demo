import { ResponsiveBar } from '@nivo/bar';
import { ResponsiveLine } from '@nivo/line';
import { ResponsivePie } from '@nivo/pie';
import React from "react";

export default function Dashboard() {
  return (
    <div className="p-6 bg-gray-50 h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Bar Chart</h2>
          <div className="h-80">
            <ResponsiveBar
              data={[
                { country: "USA", value: 100 },
                { country: "Canada", value: 200 },
                { country: "Germany", value: 150 },
                { country: "France", value: 80 },
                { country: "UK", value: 120 },
              ]}
              keys={["value"]}
              indexBy="country"
              margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
              padding={0.3}
              valueScale={{ type: "linear" }}
              indexScale={{ type: "band", round: true }}
              colors={{ scheme: "paired" }}
              borderWidth={1}
              borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
            />
          </div>
        </div>

        {/* Line Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Line Chart</h2>
          <div className="h-80">
            <ResponsiveLine
              data={[
                {
                  id: "Series 1",
                  data: [
                    { x: 1, y: 30 },
                    { x: 2, y: 40 },
                    { x: 3, y: 50 },
                    { x: 4, y: 60 },
                    { x: 5, y: 70 },
                  ],
                },
                {
                  id: "Series 2",
                  data: [
                    { x: 1, y: 40 },
                    { x: 2, y: 50 },
                    { x: 3, y: 60 },
                    { x: 4, y: 70 },
                    { x: 5, y: 80 },
                  ],
                },
              ]}
              enableCrosshair={false}
              margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
              xScale={{ type: "point" }}
              yScale={{ type: "linear", min: 0, max: "auto" }}
            />
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Pie Chart</h2>
          <div className="h-80">
            <ResponsivePie
              data={[
                { id: "Category A", value: 40 },
                { id: "Category B", value: 30 },
                { id: "Category C", value: 20 },
                { id: "Category D", value: 10 },
              ]}
              sortByValue
              margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
              cornerRadius={0}
              activeOuterRadiusOffset={2}
              borderWidth={1}
              borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}