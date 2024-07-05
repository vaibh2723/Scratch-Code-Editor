import React from "react";
import CatSprite from "./CatSprite";

export default function PreviewArea({
  x,
  y,
  rotation,
  message,
  scale,
  showSprite,
}) {
  return (
    <div className="flex-none h-full w-full overflow-y-auto p-2 relative">
      {message && (
        <div className="absolute top-0 left-0 p-4 bg-gray-200 rounded shadow">
          {message}
        </div>
      )}
      {showSprite && (
        <CatSprite x={x} y={y} rotation={rotation} scale={scale} />
      )}
    </div>
  );
}
