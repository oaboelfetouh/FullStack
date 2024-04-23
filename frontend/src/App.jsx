import { useState } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import "./App.css";

function App() {
  const [message, setMessage] = useState(null);
  const handler = () => {
    fetch("https://distributed-system-project.onrender.com/helloWorldButton")
      .then((response) => response.text())
      .then((data) => {
        setMessage(data);
      });
  };

  return (
    <>
      <GlobalStyles />
      <div>
        <button onClick={handler}>Click Me!</button>
        <p>{message}</p>
      </div>
    </>
  );
}

export default App;
