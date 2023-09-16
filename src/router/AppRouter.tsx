import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../routes/Login";
import DogsList from "../routes/DogsList";

export default function AppRouter(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DogsList/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  );
}