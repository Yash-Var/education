import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Component/Login";
import Register from "./Component/Register";
import Start from "./Component/Start";
function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Start />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
