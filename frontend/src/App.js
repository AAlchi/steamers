import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./pages/Form";
import More from "./pages/More";
import Admin from "./pages/Admin";
import ConfirmationPage from "./pages/ConfirmationPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/More" element={<More />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/ConfirmPage" element={<ConfirmationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
