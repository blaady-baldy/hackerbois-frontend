import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import DummyCanvas from "../src/pages/dummy3/dummyCanvas.js";
import Admin from "./pages/admin/landing";
import Institue from "./pages/institute/landing";
import Student from "./pages/student/landing";
import ConnectWallet from "../src/pages/institute/connectWallet";
import Warehouse from "./pages/institute/warehouse";
import Error from "./pages/error";
import { MoralisProvider } from "react-moralis";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//Shanky Imports
import { NotificationProvider } from "web3uikit";

function App() {
  return (
    <MoralisProvider initializeOnMount={false}>
      <NotificationProvider>
        <div className="App">
          <Router>
            <nav>
              <Link to="/">Dov Verification Portal</Link>
              <Link to="/admin">Admin</Link>
              <Link to="/institute">Institute</Link>
              <Link to="/student">Student</Link>
              <ConnectWallet />
            </nav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/institute" element={<Institue />} />
              <Route path="/institute/warehouse" element={<Warehouse />} />
              <Route path="/student" element={<Student />} />
              <Route path="*" element={<Error />} />
            </Routes>
            {
              //<div className="Footer">Footer</div>
            }
          </Router>
        </div>
      </NotificationProvider>
    </MoralisProvider>
  );
}

export default App;
