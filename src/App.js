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
    }, 400);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="loading">
          <Lottie className="lottie" animationData={Loading}></Lottie>
        </div>
      ) : (
        <div className="App">
          <aside className="sidemenu">
            <div className="side-menu-button">
              <span>+ </span>
              New Chat
            </div>
          </aside>
          <div className="chatbox">
            <div className="chat-log">
              <div className="chat-message">
                <div className="chat-message-center">
                  <div className="avatar"></div>
                  <div className="message">Message</div>
                </div>
              </div>
              <div className="chat-message chatgpt">
                <div className="chat-message-center">
                  <div className="avatar chatgpt"></div>
                  <div className="message">I am AI</div>
                </div>
              </div>
            </div>
            <div className="chat-input-holder">
              <textarea
                rows="1"
                className="chat-input-textarea"
                placeholder=""
              ></textarea>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
