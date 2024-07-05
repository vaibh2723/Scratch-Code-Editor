import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import { DndProvider } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";
import "tailwindcss/tailwind.css";

ReactDOM.render(
  //Removed this as drag and drop is not working in browser
  // <DndProvider backend={HTML5Backend}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // {/* </DndProvider>, */}
  document.getElementById("root")
);
