import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./pages/Form";
import More from "./pages/More";
import ErrorPage from "./pages/ErrorPage";
import ConfirmationPage from "./pages/ConfirmationPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ErrorPage" element={<ErrorPage/>}/>
        <Route path="/ConfirmationPage" element={<ConfirmationPage />} />
        <Route path="/" element={<Form />} />
        <Route path="/More" element={<More />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
