import React from "react";
// import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";

export default function MidArea() {
  // const [{ isOver }, drop] = useDrop({
  //   accept: [
  //     ItemTypes.MOVE_STEPS,
  //     ItemTypes.ROTATE,
  //     ItemTypes.SAY_HELLO,
  //     ItemTypes.HIDE,
  //     ItemTypes.SHOW,
  //     ItemTypes.CHANGE_BACKGROUND,
  //     ItemTypes.SCALE,
  //   ],
  //   collect: (monitor) => ({
  //     isOver: !!monitor.isOver(),
  //   }),
  // });

  // const isActive = isOver;

  const isActive = true;
  return (
    <div
      // ref={drop}
      className={`flex-1 h-full overflow-auto ${isActive ? "bg-gray-200" : ""}`}
    >
      Mid Area
    </div>
  );
}
