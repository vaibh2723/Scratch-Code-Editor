import React, { useState, useRef } from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";

export default function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [message, setMessage] = useState("");
  const [showSprite, setShowSprite] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState("bg-white");
  const [history, setHistory] = useState([
    { action: "changeBackgroundColor", value: "bg-white" },
  ]);
  const [scale, setScale] = useState(1);

  const xRef = useRef(x);
  const yRef = useRef(y);
  const rotationRef = useRef(rotation);
  const messageRef = useRef(message);
  const showSpriteRef = useRef(showSprite);
  const backgroundColorRef = useRef(backgroundColor);
  const scaleRef = useRef(scale);

  const syncRefs = () => {
    xRef.current = x;
    yRef.current = y;
    rotationRef.current = rotation;
    messageRef.current = message;
    showSpriteRef.current = showSprite;
    backgroundColorRef.current = backgroundColor;
    scaleRef.current = scale;
  };

  const handleSayHelloForSeconds = (seconds) => {
    setMessage("Hello Vaibhav!");
    syncRefs();
    setHistory((prevHistory) => [
      ...prevHistory,
      { action: "sayHelloForSeconds", value: seconds },
    ]);
    setTimeout(() => {
      setMessage("");
      syncRefs();
    }, seconds * 1000);
  };

  const handleHide = () => {
    setShowSprite(false);
    syncRefs();
    setHistory((prevHistory) => [...prevHistory, { action: "hide" }]);
  };

  const handleShow = () => {
    setShowSprite(true);
    syncRefs();
    setHistory((prevHistory) => [...prevHistory, { action: "show" }]);
  };

  const handleChangeBackgroundColor = () => {
    const colors = [
      "bg-white",
      "bg-red-500",
      "bg-blue-500",
      "bg-green-500",
      "bg-yellow-500",
    ];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBackgroundColor(randomColor);
    syncRefs();
    setHistory((prevHistory) => [
      ...prevHistory,
      { action: "changeBackgroundColor", value: randomColor },
    ]);
  };

  const moveSteps = (steps) => {
    setX((prevX) => {
      const newX = prevX + steps;
      syncRefs();
      setHistory((prevHistory) => [
        ...prevHistory,
        { action: "moveSteps", value: -steps / 2 },
      ]);
      return newX;
    });
  };

  const rotate = (angle) => {
    setRotation((prevRotation) => {
      const newRotation = prevRotation + angle;
      syncRefs();
      setHistory((prevHistory) => [
        ...prevHistory,
        { action: "rotate", value: -angle / 2 },
      ]);
      return newRotation;
    });
  };

  const goToRandomPosition = () => {
    const randomX = Math.random() * 100;
    const randomY = Math.random() * 100;
    setX((prevX) => {
      syncRefs();
      setHistory((prevHistory) => [
        ...prevHistory,
        { action: "changePosition", deltaX: (prevX - randomX) / 2, deltaY: 0 },
      ]);
      return randomX;
    });
    setY((prevY) => {
      syncRefs();
      setHistory((prevHistory) => [
        ...prevHistory,
        { action: "changePosition", deltaX: 0, deltaY: (prevY - randomY) / 2 },
      ]);
      return randomY;
    });
  };

  const handleIncreaseSize = () => {
    setScale((prevScale) => prevScale * 2);
    setHistory((prevHistory) => [
      ...prevHistory,
      { action: "increaseSize", value: 2 },
    ]);
  };

  const handleReset = () => {
    const reverseActions = history.slice().reverse();

    reverseActions.forEach((record, index) => {
      setTimeout(() => {
        switch (record.action) {
          case "sayHelloForSeconds":
            setMessage("Hello Vaibhav");
            break;
          case "hide":
            setShowSprite(true);
            break;
          case "show":
            setShowSprite(false);
            break;
          case "changeBackgroundColor":
            setBackgroundColor(record.value);
            break;
          case "moveSteps":
            setX((prevX) => prevX + record.value);
            break;
          case "rotate":
            setRotation((prevRotation) => prevRotation + record.value);
            break;
          case "changePosition":
            setX((prevX) => prevX + record.deltaX);
            setY((prevY) => prevY + record.deltaY);
            break;
          case "increaseSize":
            setScale((prevScale) => prevScale / record.value);
            break;
          default:
            break;
        }

        syncRefs();

        if (index === reverseActions.length - 1) {
          setHistory([]);
        }
      }, index * 500);
    });
  };

  setTimeout(() => {
    setMessage("");
  }, 10000);

  return (
    <div className="bg-blue-100 h-screen  font-sans">
      <div className="h-screen overflow-hidden flex flex-row">
        <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
          <Sidebar
            moveSteps={moveSteps}
            rotate={rotate}
            goToRandomPosition={goToRandomPosition}
            onSayHelloForSeconds={handleSayHelloForSeconds}
            onHide={handleHide}
            onShow={handleShow}
            onChangeBackgroundColor={handleChangeBackgroundColor}
            onReset={handleReset}
            onScale={handleIncreaseSize}
          />
          <MidArea />
        </div>
        <div
          className={`w-1/3 h-screen overflow-hidden flex flex-row  ${backgroundColor} border-t border-l border-gray-200 rounded-tl-xl ml-2`}
        >
          <PreviewArea
            x={x}
            y={y}
            rotation={rotation}
            message={message}
            showSprite={showSprite}
            scale={scale}
          />
        </div>
      </div>
    </div>
  );
}
