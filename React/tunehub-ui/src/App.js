import React from "react";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import CustomerHome from "./pages/CustomerHome";
import AdminHome from "./pages/AdminHome";
function App() {
  return (
    <Router>
      <div>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/registration" element={<Registration/>}/>
              <Route path="/customerHome" element={<CustomerHome/>}/>
              <Route path="/adminHome" element={<AdminHome/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
