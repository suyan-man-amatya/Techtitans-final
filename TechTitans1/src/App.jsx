import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Landing from "./components/landing/Landing";
import CareCenter from "./components/landing/CareCenter";

import SignIn from "./log/SignIn";
import SignUp from "./log/SignUp";
import DocLog from "./log/DocLog";
import Admin from "./log/Admin";
import Pharma from "./log/Pharma";

import Footer from "./layouts/Footer";
import NavBar from "./layouts/NavBar";
import About from "./components/landing/About";
import Dashboard from "./components/admindashboard/Dashboard";
import Appoinment from "./components/admindashboard/Appoinment";
import Users from "./components/admindashboard/Users";
import PharmaLogin from "./log/Pharma";
import Admindashboard from "./components/admindashboard/Dashboard";
import Messages from "./components/admindashboard/Message";
import PreLoader from "./components/PreLoader";

function App() {
  return (
    <div>
      <PreLoader />
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/carecenter" element={<CareCenter />} />

          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/docsignup" element={<DocLog />} />
          <Route path="/adminsignup" element={<Admin />} />
          <Route path="/pharmasignup" element={<Pharma />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/appointment" element={<Appoinment />} />
          <Route path="/users" element={<Users />} />
          <Route path="/Pharma" element={<PharmaLogin />} />

          <Route path="/carecenter" element={<CareCenter />} />

          <Route path="/admindashboard" element={<Admindashboard />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
