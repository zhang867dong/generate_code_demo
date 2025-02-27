import { ResponsiveBar } from '@nivo/bar';
import { ResponsiveLine } from '@nivo/line';
import { ResponsivePie } from '@nivo/pie';
function Dashboard() {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-white p-4 shadow-md">
        <h1 className="text-xl font-semibold">Dashboard</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Bar Chart */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>
          <ResponsiveBar
            data={[
              { country: "USA", sales: 100 },
              { country: "Germany", sales: 80 },
              { country: "UK", sales: 60 },
              { country: "France", sales: 90 },
            ]}
            keys={["sales"]}
            indexBy="country"
            margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
            padding={0.3}
            valueScale={{ type: "linear" }}
            indexScale={{ type: "band", round: true }}
            colors={{ scheme: "paired" }}
            borderWidth={1}
            borderColor={{
              from: "color",
              modifiers: [["darker", 0.2]],
            }}
          />
        </div>

        {/* Line Chart */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold mb-4">Monthly Traffic</h2>
          <ResponsiveLine
            data={[
              {
                id: "Visits",
                data: [
                  { x: 1, y: 30 },
                  { x: 2, y: 50 },
                  { x: 3, y: 45 },
                  { x: 4, y: 80 },
                  { x: 5, y: 60 },
                  { x: 6, y: 90 },
                ],
              },
            ]}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: "point" }}
            yScale={{
              type: "linear",
              min: 0,
              max: "auto",
            }}
            enableCrosshair={false}
            colors={{ scheme: "paired" }}
            lineWidth={3}
          />
        </div>

        {/* Pie Chart */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold mb-4">Market Share</h2>
          <ResponsivePie
            data={[
              { id: "Apple", value: 45 },
              { id: "Samsung", value: 30 },
              { id: "Google", value: 15 },
              { id: "Others", value: 10 },
            ]}
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
      </main>

      {/* Footer */}
      <footer className="bg-white p-4 shadow-md text-center">
        <p className="text-sm text-gray-500">© 2025 Dashboard. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Dashboard;