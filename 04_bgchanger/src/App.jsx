import { useState } from "react";
import './App.css'

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="mainDiv"
      style={{ backgroundColor: color }}
    >
      <div className="flex justify-center">
        <div className="flex flexwrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => {
              setColor("red");
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => {
              setColor("green");
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "green" }}
          >
            green
          </button>
          <button
            onClick={() => {
              setColor("orange");
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "orange" }}
          >
            orange
          </button>
          <button
            onClick={() => {
              setColor("pink");
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "pink" }}
          >
            pink
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

