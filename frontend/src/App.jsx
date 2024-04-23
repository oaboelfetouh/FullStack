import { HashRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react'
import Base from "./routes/Base";
import Home from "./routes/Home";
import Profile from "./routes/Profile";
import Cart from "./routes/Cart";
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
          <Route path="/" element={<Base />}>
            <Route index element={<Home />} />
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Route>
        </Routes>
    </HashRouter>
  )
}

export default App
