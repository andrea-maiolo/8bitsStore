import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./custom.scss";
import EntryPage from "./components/EntryPage/EntryPage";
import MainPage from "./components/MainPage/MainPage";
import AdminHome from "./components/Admin/AdminHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EntryPage />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="adminHome" element={<AdminHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
