import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import VideoRoom from "./screens/VideoRoom";

function App() {
  return (
    <>
      <div className="App min-h-screen  flex flex-col">
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/room" exact element={<VideoRoom />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
