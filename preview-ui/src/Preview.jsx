import { ResponsiveBar } from '@nivo/bar';
import { ResponsiveLine } from '@nivo/line';
import { ResponsivePie } from '@nivo/pie';
export default function Dashboard() {
  // Mock数据
  const barData = [
    { name: "A", data: 100 },
    { name: "B", data: 200 },
    { name: "C", data: 150 },
  ];

  const lineData = [
    {
      id: "A",
      data: [
        { x: 1, y: 10 },
        { x: 2, y: 20 },
        { x: 3, y: 30 },
      ],
    },
    {
      id: "B",
      data: [
        { x: 1, y: 15 },
        { x: 2, y: 25 },
        { x: 3, y: 35 },
      ],
    },
  ];

  const pieData = [
    { id: "A", value: 10 },
    { id: "B", value: 20 },
    { id: "C", value: 30 },
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white p-4 shadow-md">
        <h1 className="text-xl font-bold">Dashboard</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* Bar Chart */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Bar Chart</h2>
            <div className="h-[300px]">
              <ResponsiveBar
                data={barData}
                keys={["data"]}
                indexBy="name"
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
            <h2 className="text-lg font-semibold mb-4">Line Chart</h2>
            <div className="h-[300px]">
              <ResponsiveLine
                data={lineData}
                enableCrosshair={false}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: "point" }}
                yScale={{
                  type: "linear",
                  min: 0,
                  max: "auto",
                }}
                colors={{ scheme: "paired" }}
              />
            </div>
          </div>

          {/* Pie Chart */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Pie Chart</h2>
            <div className="h-[300px]">
              <ResponsivePie
                data={pieData}
                sortByValue
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                cornerRadius={0}
                activeOuterRadiusOffset={2}
                borderWidth={1}
                borderColor={{
                  from: "color",
                  modifiers: [["darker", 0.2]],
                }}
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white p-4 shadow-md">
        <p className="text-center text-sm">© 2025 My Dashboard. All rights reserved.</p>
      </footer>
    </div>
  );
}