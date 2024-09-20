import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./components/Login";
import { Dashboard } from "./components/Dashboard";

export const App =()=>{
  return(
    <div>
     <Routes>
      <Route path="/" element={<LoginPage />}/>
      <Route path="dashboard" element={<Dashboard />}/>
     </Routes>
    </div>
  )
}