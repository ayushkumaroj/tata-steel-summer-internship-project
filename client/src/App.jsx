import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import RunRateTable from "./pages/RunRateTable";
import StrikeRateTable from "./pages/StrikeRateTable";
import YieldTable from "./pages/YieldTable";
import QueueTimeTable from "./pages/QueueTimeTable";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard/:location" element={<Dashboard />} />
        <Route path="/runrate/:location" element={<RunRateTable />} />
        <Route path="/strikerate/:location" element={<StrikeRateTable />} />
        <Route path="/yield/:location" element={<YieldTable />} />
        <Route path="/queuetime/:location" element={<QueueTimeTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
