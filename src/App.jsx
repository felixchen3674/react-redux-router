import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="/">Todos List</a>
          </li>
          <li>
            <a href="/completed">Completed</a>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
