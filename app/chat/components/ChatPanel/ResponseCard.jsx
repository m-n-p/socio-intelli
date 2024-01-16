import React from "react";

const ResponseCard = ({ initial, isGenesis, text, loading }) => {
  let editedText = text.replace(/\n/g, "<br />");
  editedText = editedText.replace(/\*/g, "");

  return (
    <div
      className={
        "w-full flex items-center " +
        (isGenesis ? "bg-[#D9D9D9] bg-opacity-10 " : "bg-transparent")
      }
    >
      <div className="flex space-x-3 py-4 w-4/5 mx-auto ">
        <div
          className={
            "rounded-full text-white p-2 uppercase h-fit " +
            (isGenesis ? "bg-[#E58A04]" : "bg-black ")
          }
        >
          {initial}
        </div>
        <div className="max-w-full py-2">
          <p
            className="max-w-full text-wrap	 flex items-center"
            dangerouslySetInnerHTML={{
              __html: editedText,
            }}
          ></p>
          {/* <p className="max-w-full text-wrap	 flex items-center ">{text}</p> */}
        </div>
      </div>
    </div>
  );
};

export default ResponseCard;
