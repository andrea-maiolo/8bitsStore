import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./custom.scss";
import EntryPage from "./components/EntryPage/EntryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EntryPage />} />
        hello
      </Routes>
    </BrowserRouter>
  );
}

export default App;
