import logo from "./logo.svg";
import "./App.css";
import Lottie from "lottie-react";
import Loading from "./assets/loading.json";
import React from "react";
import { useState, useEffect } from "react";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2800);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="loading">
          <Lottie className="lottie" animationData={Loading}></Lottie>
        </div>
      ) : (
        <div>
          <h1>Jarvis GPT</h1>
        </div>
      )}
    </div>
  );
}

export default App;
