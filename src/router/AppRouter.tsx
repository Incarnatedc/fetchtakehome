import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Routes/Login";
import DogsList from "../Routes/DogsList";

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