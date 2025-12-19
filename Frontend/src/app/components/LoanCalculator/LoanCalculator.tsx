"use client";

import { useState, useMemo } from "react";
import { Typography } from "../ui/Typography";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// --- HELPER COMPONENT: SLIDER ROW ---
const SliderRow = ({
  label,
  value,
  setValue,
  min,
  max,
  step = 1,
  prefix = "",
  suffix = "",
}: {
  label?: string;
  value: number;
  setValue: (val: number) => void;
  min: number;
  max: number;
  step?: number;
  prefix?: string;
  suffix?: string;
}) => (
  <div className="flex flex-col gap-3 mb-6">
    {label && (
      <Typography variant="s1" className="text-[#1e2e5c] font-semibold">
        {label}
      </Typography>
    )}

    <div className="flex flex-col sm:flex-row items-center gap-4">
      <div className="w-full sm:flex-1 relative h-6 flex items-center">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#586ca0] transition-all"
        />
      </div>
      <div className="w-full sm:w-[160px] flex items-center bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 shadow-sm focus-within:ring-2 focus-within:ring-blue-100 transition-all">
        {prefix && (
          <Typography variant="b2" className="text-gray-400 font-medium mr-1.5">
            {prefix}
          </Typography>
        )}
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-full bg-transparent outline-none text-gray-800 font-bold text-base text-right font-lexend"
        />
        {suffix && (
          <Typography variant="b2" className="text-gray-400 font-medium ml-1">
            {suffix}
          </Typography>
        )}
      </div>
    </div>
  </div>
);

// --- MAIN COMPONENT ---
const LoanCalculator = () => {
  // --- STATE ---
  const [loanAmount, setLoanAmount] = useState(10000000);
  const [loanTerm, setLoanTerm] = useState(84); // Total Months
  const [interestRate, setInterestRate] = useState(4.5);
  const [frequency, setFrequency] = useState("Monthly");
  const [activeTab, setActiveTab] = useState("chart");

  // --- CALCULATIONS ---
  const { chartData, periodicPayment, totalInterest, totalRepayment } = useMemo(() => {
    const data = [];
    let balance = loanAmount;

    const frequencyMap: Record<string, number> = {
      Weekly: 52,
      Fortnightly: 26,
      Monthly: 12,
      Quarterly: 4,
      Yearly: 1,
    };

    const ppy = frequencyMap[frequency] || 12;
    const totalPeriods = Math.round((loanTerm / 12) * ppy);
    const periodicRate = interestRate / 100 / ppy;

    const pmt =
      (loanAmount * periodicRate * Math.pow(1 + periodicRate, totalPeriods)) /
      (Math.pow(1 + periodicRate, totalPeriods) - 1);

    let accumulatedInterest = 0;

    for (let i = 1; i <= totalPeriods; i++) {
      const interestPmt = balance * periodicRate;
      const principalPmt = pmt - interestPmt;
      balance -= principalPmt;
      accumulatedInterest += interestPmt;

      data.push({
        period: i,
        principalPaid: principalPmt,
        interestPaid: interestPmt,
        balance: Math.max(0, balance),
        cumulativeInterest: accumulatedInterest,
      });
    }

    return {
      chartData: data,
      periodicPayment: pmt,
      totalInterest: accumulatedInterest,
      totalRepayment: loanAmount + accumulatedInterest,
    };
  }, [loanAmount, loanTerm, interestRate, frequency]);

  return (
    <section className="w-full py-8 px-4 bg-gray-50/50 flex justify-center">
      <div className="w-full max-w-6xl bg-white rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-900/5 border border-gray-100">
        {/* HEADER */}
        <div className="bg-[#1e2e5c] py-8 text-center px-4">
          <Typography variant="h3" className="text-white mb-2">
            Loan Amortization Calculator
          </Typography>
        </div>

        <div className="p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* LEFT COLUMN: CONTROLS */}
          <div className="lg:col-span-5 flex flex-col space-y-2">
            <SliderRow
              label="Loan Amount"
              value={loanAmount}
              setValue={setLoanAmount}
              min={100000}
              max={50000000}
              step={10000}
              prefix="₹"
            />

            <SliderRow
              label="Loan Term (Months)"
              value={loanTerm}
              setValue={setLoanTerm}
              min={12}
              max={360}
              step={12}
              suffix="mo"
            />

            {/* REPAYMENT FREQUENCY DROPDOWN */}
            <div className="flex flex-col gap-3 mb-8">
              <Typography variant="s1" className="text-[#1e2e5c] font-semibold">
                Repayment Frequency
              </Typography>
              <div className="relative group">
                <select
                  value={frequency}
                  onChange={(e) => setFrequency(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 font-bold text-lg outline-none focus:ring-2 focus:ring-blue-100 cursor-pointer appearance-none font-lexend transition-all"
                >
                  <option value="Weekly">Weekly</option>
                  <option value="Fortnightly">Fortnightly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Quarterly">Quarterly</option>
                  <option value="Yearly">Yearly</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </div>
            </div>

            <SliderRow
              label="Interest Rate"
              value={interestRate}
              setValue={setInterestRate}
              min={1}
              max={20}
              step={0.1}
              suffix="%"
            />

            {/* SUMMARY CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="p-5 bg-blue-50 rounded-2xl border border-blue-100">
                <Typography variant="s2" className="text-[#1e2e5c]/70 mb-1">
                  {frequency} Payment
                </Typography>
                <Typography variant="h4" className="text-[#1e2e5c]">
                  ₹{Math.round(periodicPayment).toLocaleString()}
                </Typography>
              </div>
              <div className="p-5 bg-gray-50 rounded-2xl border border-gray-200">
                <Typography variant="s2" className="text-gray-500 mb-1">
                  Total Interest
                </Typography>
                <Typography variant="h4" className="text-gray-800">
                  ₹{Math.round(totalInterest).toLocaleString()}
                </Typography>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: VISUALS */}
          <div className="lg:col-span-7 flex flex-col">
            {/* TAB SWITCHER */}
            <div className="flex p-1.5 bg-gray-100 rounded-xl w-fit mb-8 self-center lg:self-start">
              <button
                onClick={() => setActiveTab("chart")}
                className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  activeTab === "chart" ? "bg-white text-[#1e2e5c] shadow-sm" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Visualization
              </button>
              <button
                onClick={() => setActiveTab("table")}
                className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  activeTab === "table" ? "bg-white text-[#1e2e5c] shadow-sm" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Amortization Table
              </button>
            </div>

            {/* DISPLAY AREA */}
            <div className="h-[400px] w-full relative">
              {activeTab === "chart" ? (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="colorInt" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#1e2e5c" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#1e2e5c" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                    <XAxis dataKey="period" hide={true} />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tickFormatter={(value) => `₹${(value / 100000).toFixed(0)}L`}
                      tick={{ fill: "#9ca3af", fontSize: 11 }}
                    />
                    <Tooltip
                      contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)" }}
                      // SOLUTION: Explicit type guard and return type for Tooltip formatter
                      formatter={(value: number | string | undefined): [string, string] => {
                        const numericValue = typeof value === "string" ? parseFloat(value) : value;
                        if (numericValue === undefined || isNaN(numericValue)) return ["₹0", ""];
                        return [`₹${Math.round(numericValue).toLocaleString()}`, ""];
                      }}
                    />
                    <Legend verticalAlign="top" height={40} iconType="circle" />
                    <Area type="monotone" dataKey="balance" stroke="#3b82f6" strokeWidth={2} fill="url(#colorBalance)" name="Remaining Balance" />
                    <Area type="monotone" dataKey="cumulativeInterest" stroke="#1e2e5c" strokeWidth={2} fill="url(#colorInt)" name="Cumulative Interest" />
                  </AreaChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-full border border-gray-200 rounded-2xl flex flex-col bg-white overflow-hidden">
                  <div className="overflow-y-auto grow scrollbar-thin scrollbar-thumb-gray-200">
                    <table className="w-full text-left border-collapse min-w-[450px]">
                      <thead className="sticky top-0 bg-gray-50 z-20 shadow-sm">
                        <tr>
                          <th className="p-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b">Period</th>
                          <th className="p-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b">Principal</th>
                          <th className="p-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b">Interest</th>
                          <th className="p-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b text-right">Balance</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50">
                        {chartData.map((row) => (
                          <tr key={row.period} className="hover:bg-blue-50/30 transition-colors">
                            <td className="p-4 text-sm font-medium text-gray-500">{row.period}</td>
                            <td className="p-4 text-sm text-gray-600">₹{Math.round(row.principalPaid).toLocaleString()}</td>
                            <td className="p-4 text-sm text-gray-600">₹{Math.round(row.interestPaid).toLocaleString()}</td>
                            <td className="p-4 text-sm font-bold text-[#1e2e5c] text-right">₹{Math.round(row.balance).toLocaleString()}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* FOOTER TOTALS */}
        <div className="bg-gray-50 border-t border-gray-100 p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#3b82f6]"></div>
              <Typography variant="b2" className="text-gray-600">
                Principal: <b>₹{loanAmount.toLocaleString()}</b>
              </Typography>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#1e2e5c]"></div>
              <Typography variant="b2" className="text-gray-600">
                Interest: <b>₹{Math.round(totalInterest).toLocaleString()}</b>
              </Typography>
            </div>
          </div>
          <Typography variant="s1" className="text-[#1e2e5c] text-center sm:text-right">
            Total Payable: <span className="font-lexend font-bold ml-1 text-xl sm:text-2xl">₹{Math.round(totalRepayment).toLocaleString()}</span>
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default LoanCalculator;