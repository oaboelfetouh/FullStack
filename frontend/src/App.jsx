import { HashRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react'
import Base from "./routes/Base";
import Home from "./routes/Home";
import Profile from "./routes/Profile";
import Cart from "./routes/Cart";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import './App.css'

function App() {

  const [message, setMessage] = useState(null);
  const handler = () => {
    fetch("https://distributed-system-project.onrender.com/helloWorldButton")
    .then((response) => response.text())
    .then((data) => {
      setMessage(data);
    });
  }

  return (
    <HashRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Base userType="customer"/>}>
            <Route index element={<Home userType="customer"/>} />
            <Route path="/profile" element={<Profile userType="customer"/>}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Route>
          <Route path="/store" element={<Base userType="seller"/>}>
            <Route index element={<Home userType="seller"/>} />
            <Route path="/store/profile" element={<Profile userType="seller"/>}></Route>
          </Route>
        </Routes>
    </HashRouter>
  )
}

export default App
