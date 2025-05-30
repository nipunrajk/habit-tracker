import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { ArrowUpRight } from "lucide-react";

// 1. Progress Indicator Badge
const ProgressIndicatorBadge = () => (
  <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold mb-4">
    <ArrowUpRight className="w-4 h-4" />
    Streaks Up 58% This Month
  </div>
);

// 2. Weekly Performance Summary Card
const WeeklyPerformanceSummaryCard = () => (
  <div className="bg-gradient-to-br from-green-400 to-green-600 text-white rounded-2xl p-6 shadow mb-4 flex flex-col items-start">
    <span className="text-lg font-bold mb-2">Weekly Performance</span>
    <span className="text-3xl font-extrabold">85%</span>
    <span className="text-sm mt-1">of your goals completed this week</span>
    <span className="text-xs mt-2 opacity-80">+12% vs last week</span>
  </div>
);

// 3. Top Habits Bar Chart
const topHabits = [
  { name: "Reading", value: 80, icon: "📚" },
  { name: "Gym", value: 65, icon: "🏋️" },
  { name: "Swimming", value: 50, icon: "🏊‍♂️" },
  { name: "Tennis", value: 90, icon: "🎾" },
  { name: "Running", value: 40, icon: "🏃" },
];
const barColors = ["#34d399", "#60a5fa", "#fbbf24", "#f472b6", "#a78bfa"];

const TopHabitsBarChart = () => (
  <div className="flex-1 flex flex-col">
    <div className="flex items-center justify-between mb-4">
      <span className="text-lg font-semibold">Top Habits</span>
      <input
        type="text"
        placeholder="Search habits..."
        className="border border-gray-200 rounded-full px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-300"
      />
    </div>
    <ResponsiveContainer width="100%" height={220}>
      <BarChart
        data={topHabits}
        margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
      >
        <XAxis
          dataKey="name"
          tick={{ fontSize: 14 }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis hide />
        <Tooltip
          contentStyle={{
            borderRadius: 12,
            background: "#fff",
            border: "1px solid #e5e7eb",
          }}
          labelStyle={{ fontWeight: 600 }}
        />
        <Bar dataKey="value" radius={[12, 12, 0, 0]}>
          {topHabits.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={barColors[index % barColors.length]}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
    <div className="flex justify-between mt-4">
      {topHabits.map((habit, idx) => (
        <div
          key={habit.name}
          className="flex flex-col items-center text-xs text-gray-500"
        >
          <span className="text-xl mb-1">{habit.icon}</span>
          <span>{habit.name}</span>
        </div>
      ))}
    </div>
  </div>
);

const AnalyticsSection: React.FC = () => (
  <section className="w-full bg-white rounded-2xl shadow">
    {/* Header Row */}
    <div className="flex items-center justify-between mb-8">
      <h2 className="text-2xl font-bold">Analytics</h2>
      <button className="text-gray-500 hover:underline text-sm font-medium">
        View Details
      </button>
    </div>
    {/* Main Content: Left and Right Columns */}
    <div className="flex gap-8">
      {/* Left column */}
      <div className="flex flex-col gap-4 w-64 min-w-[220px]">
        <ProgressIndicatorBadge />
        <WeeklyPerformanceSummaryCard />
      </div>
      {/* Right column */}
      <div className="flex-1">
        <TopHabitsBarChart />
      </div>
    </div>
  </section>
);

export default AnalyticsSection;
