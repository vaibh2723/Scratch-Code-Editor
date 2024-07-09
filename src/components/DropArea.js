import React from "react";

export default function DropArea({ data }) {
  return (
    <div className="flex flex-row flex-wrap bg-blue-400 text-white px-2 py-1 my-2 text-sm">
      {data}
    </div>
  );
}
