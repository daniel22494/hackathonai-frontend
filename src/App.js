// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Secondpage from "./Pages/Secondpage/Secondpage";
import ButtonDetails from "./Components/ButtonDetails/ButtonDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/info" element={<Secondpage />} />
        {/* <Route path="/info" element={<ButtonDetails />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
