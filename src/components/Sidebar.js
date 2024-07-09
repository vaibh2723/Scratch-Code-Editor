import React from "react";

export default function Sidebar({
  moveSteps,
  rotate,
  goToRandomPosition,
  onSayHelloForSeconds,
  onHide,
  onShow,
  onChangeBackgroundColor,
  onReset,
  onScale,
}) {
  const handleDragStart = (e, taskId) => {
    e.dataTransfer.setData("text/plain", taskId.toString());
  };

  const handleDragEnd = (e) => {
    e.dataTransfer.clearData();
  };

  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <div className="font-bold">Events</div>
      <div
        className="flex flex-row flex-wrap bg-red-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onClick={onReset}
      >
        Reset
      </div>

      <div className="font-bold">Motion</div>
      <div
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onClick={() => moveSteps(10)}
        draggable
        onDragStart={(e) => handleDragStart(e, "moveSteps")}
        onDragEnd={handleDragEnd}
      >
        Move 10 steps
      </div>
      <div
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onClick={() => rotate(15)}
        draggable
        onDragStart={(e) => handleDragStart(e, "rotate15")}
        onDragEnd={handleDragEnd}
      >
        Turn 15 degrees
      </div>

      <div
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onClick={() => rotate(180)}
        draggable
        onDragStart={(e) => handleDragStart(e, "rotate180")}
        onDragEnd={handleDragEnd}
      >
        Invert the Image
      </div>

      <div
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onClick={goToRandomPosition}
        draggable
        onDragStart={(e) => handleDragStart(e, "changePosition")}
        onDragEnd={handleDragEnd}
      >
        Go to random position
      </div>

      <div className="font-bold">Looks</div>
      <div
        className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onClick={() => onSayHelloForSeconds(2)}
        draggable
        onDragStart={(e) => handleDragStart(e, "sayHelloForSeconds")}
        onDragEnd={handleDragEnd}
      >
        Say Hello for 2 seconds
      </div>
      <div
        className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onClick={onHide}
        draggable
        onDragStart={(e) => handleDragStart(e, "hide")}
        onDragEnd={handleDragEnd}
      >
        Hide
      </div>
      <div
        className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onClick={onShow}
        draggable
        onDragStart={(e) => handleDragStart(e, "show")}
        onDragEnd={handleDragEnd}
      >
        Show
      </div>
      <div
        className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onClick={onChangeBackgroundColor}
        draggable
        onDragStart={(e) => handleDragStart(e, "changeBackgroundColor")}
        onDragEnd={handleDragEnd}
      >
        Change Background Color
      </div>

      <div
        className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onClick={onScale}
        draggable
        onDragStart={(e) => handleDragStart(e, "increaseSize")}
        onDragEnd={handleDragEnd}
      >
        Increase Cat Size by 2x
      </div>
    </div>
  );
}
