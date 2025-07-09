import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import TableView from "./pages/TableView";
import AddEditForm from "./pages/AddEditForm";
import AddEditView from "./pages/AddEditView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard/:location" element={<Dashboard />} />
        <Route path="/kpi/:location/:kpi" element={<TableView />} />
        <Route path="/add/:location/:kpi" element={<AddEditForm />} />
        <Route path="/add/:location/:kpi" element={<AddEditView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
