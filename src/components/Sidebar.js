import React from "react";
// import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes";

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
  //Removed the code for drag and drop as drag and drop is not working fine with the browser

  // const [, dragMoveSteps] = useDrag({
  //   type: ItemTypes.MOVE_STEPS,
  //   item: { type: ItemTypes.MOVE_STEPS },
  //   end: (item, monitor) => {
  //     if (monitor.didDrop()) {
  //       moveSteps(10);
  //     }
  //   },
  // });

  // const [, dragRotate] = useDrag({
  //   type: ItemTypes.ROTATE,
  //   item: { type: ItemTypes.ROTATE },
  //   end: (item, monitor) => {
  //     if (monitor.didDrop()) {
  //       rotate(15);
  //     }
  //   },
  // });

  // const [, dragSayHello] = useDrag({
  //   type: ItemTypes.SAY_HELLO,
  //   item: { type: ItemTypes.SAY_HELLO },
  //   end: (item, monitor) => {
  //     if (monitor.didDrop()) {
  //       onSayHelloForSeconds(2);
  //     }
  //   },
  // });

  // const [, dragHide] = useDrag({
  //   type: ItemTypes.HIDE,
  //   item: { type: ItemTypes.HIDE },
  //   end: (item, monitor) => {
  //     if (monitor.didDrop()) {
  //       onHide();
  //     }
  //   },
  // });

  // const [, dragShow] = useDrag({
  //   type: ItemTypes.SHOW,
  //   item: { type: ItemTypes.SHOW },
  //   end: (item, monitor) => {
  //     if (monitor.didDrop()) {
  //       onShow();
  //     }
  //   },
  // });

  // const [, dragChangeBackground] = useDrag({
  //   type: ItemTypes.CHANGE_BACKGROUND,
  //   item: { type: ItemTypes.CHANGE_BACKGROUND },
  //   end: (item, monitor) => {
  //     if (monitor.didDrop()) {
  //       onChangeBackgroundColor();
  //     }
  //   },
  // });

  // const [, dragScale] = useDrag({
  //   type: ItemTypes.SCALE,
  //   item: { type: ItemTypes.SCALE },
  //   end: (item, monitor) => {
  //     if (monitor.didDrop()) {
  //       onScale();
  //     }
  //   },
  // });

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
        // ref={dragMoveSteps}
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onClick={() => moveSteps(10)}
      >
        Move 10 steps
      </div>
      <div
        // ref={dragRotate}
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onClick={() => rotate(15)}
      >
        Turn 15 degrees
      </div>

      <div
        // ref={dragRotate}
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onClick={() => rotate(180)}
      >
        Invert the Image
      </div>

      <div
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onClick={goToRandomPosition}
      >
        Go to random position
      </div>

      <div className="font-bold">Looks</div>
      <div
        // ref={dragSayHello}
        className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onClick={() => onSayHelloForSeconds(2)}
      >
        Say Hello for 2 seconds
      </div>
      <div
        // ref={dragHide}
        className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onClick={onHide}
      >
        Hide
      </div>
      <div
        // ref={dragShow}
        className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onClick={onShow}
      >
        Show
      </div>
      <div
        // ref={dragChangeBackground}
        className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onClick={onChangeBackgroundColor}
      >
        Change Background Color
      </div>

      <div
        // ref={dragScale}
        className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onClick={onScale}
      >
        Increase Cat Size by 2x
      </div>
    </div>
  );
}
