import React from "react";

const Loading = () => {
  return (
    <div className={"w-full flex items-center bg-[#D9D9D9] bg-opacity-10 "}>
      <div className="flex space-x-3 py-4 w-4/5 mx-auto flex-col items-center">
        <p>Our knowledge is working at your service...</p>

        {/* <p className="max-w-full text-wrap	 flex items-center ">{text}</p> */}
      </div>
    </div>
  );
};

export default Loading;
