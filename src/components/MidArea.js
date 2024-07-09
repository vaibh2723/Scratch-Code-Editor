import React, { useState } from "react";
import DropArea from "./DropArea";
export default function MidArea({
  moveSteps,
  rotate,
  goToRandomPosition,
  onSayHelloForSeconds,
  onHide,
  onShow,
  onChangeBackgroundColor,
  onScale,
  onReset,
}) {
  const [actionData, setActionData] = useState([]);

  const handleReset = () => {
    setActionData([]);
    onReset();
    const time = actionData.length;

    setTimeout(() => {
      window.location.reload();
    }, time * 400);
  };

  const handlePlayActions = () => {
    actionData.forEach((action, index) => {
      setTimeout(() => {
        switch (action.id) {
          case "moveSteps":
            moveSteps(10);
            break;
          case "rotate15":
            rotate(15);
            break;
          case "rotate180":
            rotate(180);
            break;
          case "changePosition":
            goToRandomPosition();
            break;
          case "sayHelloForSeconds":
            onSayHelloForSeconds(2);
            break;
          case "changeBackgroundColor":
            onChangeBackgroundColor();
            break;
          case "hide":
            onHide();
            break;
          case "show":
            onShow();
            break;
          case "increaseSize":
            onScale();
            break;
          default:
            console.log("Unknown action:", action.id);
            break;
        }
      }, index * 400);
    });
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("text/plain");

    setActionData((prevData) => {
      return [...prevData, { id: taskId }];
    });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const ActionComponent = ({ action }) => {
    switch (action) {
      case "moveSteps":
        return <DropArea data={"Move 10 Steps"} />;
      case "rotate15":
        return <DropArea data={"Turn 15 degrees"} />;
      case "rotate180":
        return <DropArea data={"Invert the Image"} />;
      case "changePosition":
        return <DropArea data={"Go to random position"} />;
      case "sayHelloForSeconds":
        return <DropArea data={"Say Hello for 2 Seconds"} />;
      case "hide":
        return <DropArea data={"Hide"} />;
      case "show":
        return <DropArea data={"Show"} />;
      case "changeBackgroundColor":
        return <DropArea data={"Change Background Color"} />;
      case "increaseSize":
        return <DropArea data={"Increase Cat Size By 2x"} />;
    }
  };

  return (
    <div
      className={`flex-1 h-full overflow-auto font-bold`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      Mid Area
      <div
        className="flex flex-row flex-wrap bg-red-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onClick={handlePlayActions}
      >
        Play Actions
      </div>
      <div
        className="flex flex-row flex-wrap bg-red-400 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onClick={handleReset}
      >
        Reset Actions
      </div>
      {actionData?.map((data, index) => {
        return <ActionComponent key={index} action={data.id} />;
      })}
    </div>
  );
}
