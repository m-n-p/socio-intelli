import React from "react";

const ResponseCard = ({ initial, isGenesis, text, loading, mind }) => {
  let editedText = "";
  let editedText2 = "";
  if (typeof text === "string") {
    editedText = text.replace(/\n/g, "<br />");
    editedText = editedText.replace(/\*/g, "");
  } else if (typeof text === "object") {
    editedText = text?.FBIN?.replace(/\n/g, "<br />");
    editedText = editedText.replace(/\*/g, "");
    editedText2 = text?.LNTW?.replace(/\n/g, "<br />");
    editedText2 = editedText2.replace(/\*/g, "");
  }

  return (
    <div
      className={
        "w-full flex items-center flex-col space-y-3" +
        (isGenesis ? "bg-[#f2ebeb] bg-opacity-10 " : "bg-transparent")
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
        {typeof text === "string" ? (
          <div className="max-w-full py-2">
            <p
              className="max-w-full text-wrap	 flex items-center"
              dangerouslySetInnerHTML={{
                __html: editedText,
              }}
            ></p>
            {/* <p className="max-w-full text-wrap	 flex items-center ">{text}</p> */}
          </div>
        ) : (
          <div className="w-full flex flex-row space-x-3 items-center py-2">
            <div className="w-1/2">
              <p
                className="max-w-full text-wrap	 flex items-center"
                dangerouslySetInnerHTML={{
                  __html: editedText,
                }}
              ></p>
            </div>
            <div className="w-1/2">
              <p
                className="max-w-full text-wrap	 flex items-center"
                dangerouslySetInnerHTML={{
                  __html: editedText2,
                }}
              ></p>
            </div>

            {/* <p className="max-w-full text-wrap	 flex items-center ">{text}</p> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResponseCard;
