// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Secondpage from "./Pages/Secondpage/Secondpage";
import ButtonDetails from "./Components/ButtonDetails/ButtonDetails";
import HPprompt from "./Pages/HPprompt/HPprompt";
// import InfoRedir from "./Components/InfoRedir/InfoRedir";
import HPinfoR from "./Pages/HPinfoR/HPinfoR";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/prompt" element={<HPprompt />} />
        <Route path="/redirect" element={<HPinfoR />} />
        <Route path="/info" element={<Secondpage />} />
        <Route path="/info/details" element={<ButtonDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
