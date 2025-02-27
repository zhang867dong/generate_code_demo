import { ResponsiveBar } from '@nivo/bar';
import { ResponsiveLine } from '@nivo/line';
import { ResponsivePie } from '@nivo/pie';
import React from "react";

export default function Dashboard() {
  return (
    <div className="p-6 bg-gray-50 h-screen">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">
        Dashboard
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Sales by Country</h2>
          <div className="h-full overflow-hidden" style={{ height: '400px' }}>
            <ResponsiveBar
              data={[
                { country: "USA", sales: 100 },
                { country: "Canada", sales: 200 },
                { country: "Germany", sales: 150 },
                { country: "France", sales: 80 },
                { country: "UK", sales: 120 },
              ]}
              keys={["sales"]}
              indexBy="country"
              margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
              padding={0.3}
              valueScale={{ type: "linear" }}
              indexScale={{ type: "band", round: true }}
              colors={{ scheme: "nivo" }}
              borderWidth={1}
              borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
              axisTop={null}
              axisRight={null}
              axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Country',
                legendPosition: 'middle',
                legendOffset: 32
              }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Sales',
                legendPosition: 'middle',
                legendOffset: -40,
              }}
              labelSkipWidth={12}
              labelSkipHeight={12}
              labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
              legends={[
                {
                  dataFrom: 'keys',
                  anchor: 'bottom-right',
                  direction: 'column',
                  justify: false,
                  translateX: 120,
                  translateY: 0,
                  itemsSpacing: 2,
                  itemWidth: 100,
                  itemHeight: 20,
                  itemTextColor: '#999',
                  symbolSize: 20,
                  effects: [
                    {
                      on: 'hover',
                      style: {
                        itemTextColor: '#000'
                      }
                    }
                  ]
                }
              ]}
            />
          </div>
        </div>

        {/* Line Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Yearly Revenue</h2>
          <div className="h-full overflow-hidden" style={{ height: '400px' }}>
            <ResponsiveLine
              data={[
                {
                  id: "Revenue",
                  data: [
                    { x: "2018", y: 20000 },
                    { x: "2019", y: 45000 },
                    { x: "2020", y: 70000 },
                    { x: "2021", y: 90000 },
                    { x: "2022", y: 120000 },
                  ],
                },
              ]}
              enableCrosshair={false}
              margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
              xScale={{ type: "point" }}
              yScale={{ type: "linear", min: "auto", max: "auto" }}
              colors={{ scheme: "category10" }}
              pointSize={10}
              pointBorderWidth={2}
              pointLabelYOffset={-12}
              useMesh={true}
              axisTop={null}
              axisRight={null}
              axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Year',
                legendOffset: 36,
                legendPosition: 'middle'
              }}
              axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Revenue',
                legendOffset: -40,
                legendPosition: 'middle'
              }}
              legends={[
                {
                  anchor: 'bottom-right',
                  direction: 'column',
                  justify: false,
                  translateX: 100,
                  translateY: 0,
                  itemsSpacing: 0,
                  itemDirection: 'left-to-right',
                  itemWidth: 80,
                  itemHeight: 20,
                  itemOpacity: 0.75,
                  symbolSize: 12,
                  symbolShape: 'circle',
                  symbolBorderColor: 'white',
                  effects: [
                    {
                      on: 'hover',
                      style: {
                        itemBackground: 'rgba(0, 0, 0, .03)',
                        itemOpacity: 1
                      }
                    }
                  ]
                }
              ]}
            />
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md col-span-1 lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Customer Satisfaction</h2>
          <div className="h-full overflow-hidden" style={{ height: '400px' }}>
            <ResponsivePie
              data={[
                { id: "Satisfied", value: 64 },
                { id: "Neutral", value: 23 },
                { id: "Dissatisfied", value: 13 },
              ]}
              sortByValue
              margin={{ top: 40, right: 80, bottom: 80, left: 120 }}
              cornerRadius={3}
              activeOuterRadiusOffset={8}
              colors={{ scheme: "pastel1" }}
              borderWidth={1}
              borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
              radialLabelsSkipAngle={10}
              radialLabelsTextColor="#333333"
              radialLabelsLinkColor={{ from: 'color' }}
              sliceLabelsSkipAngle={10}
              sliceLabelsTextColor="#333333"
              legends={[
                {
                  anchor: 'bottom',
                  direction: 'row',
                  justify: false,
                  translateX: 0,
                  translateY: 56,
                  itemsSpacing: 0,
                  itemWidth: 100,
                  itemHeight: 18,
                  itemTextColor: '#999',
                  itemDirection: 'left-to-right',
                  itemOpacity: 1,
                  symbolSize: 18,
                  symbolShape: 'circle',
                  effects: [
                    {
                      on: 'hover',
                      style: {
                        itemTextColor: '#000'
                      }
                    }
                  ]
                }
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}