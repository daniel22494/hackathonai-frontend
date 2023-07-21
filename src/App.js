// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Secondpage from "./Pages/Secondpage/Secondpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/info" element={<Secondpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
