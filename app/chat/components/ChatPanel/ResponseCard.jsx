import React, { useState } from "react";
import createNewQuestion from "./actions/conversation";
import { useDispatch } from "react-redux";
import Loader from "../Loader";

const ResponseCard = ({
  initial,
  isGenesis,
  text,
  mind,
  inputValues,
  activeThread,
  followup,
  siantoggle,
}) => {
  console.log(mind, "mind");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const getQuery = () => {
    if (mind === "Email-Writer") {
      if (followup) {
        return {
          first: "martha_ai",
          confirm: "confirm_martha_ai",
          retry: "retry_martha",
        };
      } else {
        return {
          first: "martha4p",
          confirm: "confirm_martha4p",
          retry: "retry_martha",
        };
      }
    } else if (mind === "Linkedin-Twitter-Writer") {
      if (siantoggle === "instagram") {
        return {
          first: "sian",
          confirm: "confirm_sianins3",
          retry: "retry_lntw",
        };
      } else if (siantoggle === "lit") {
        return {
          first: "sian",
          confirm: "confirm_sianv1",
          retry: "retry_lntw",
        };
      } else {
        return {
          first: "sian",
          confirm: "confirm_sianlnk3",
          retry: "retry_lntw",
        };
      }
    } else if (mind === "Blog-Article-Writer") {
      return {
        first: "amelia",
        confirm: "confirm_amelia",
        retry: "retry_amelia",
      };
    }
  };
  console.log(text?.result, "text?.result");
  let editedText = "";
  let editedText2 = "";
  if (typeof text === "string") {
    editedText = text.replace(/\n/g, "<br />");
    editedText = editedText.replace(/\*/g, "");
  } else if (typeof text === "object") {
    editedText = text?.result?.replace(/\n/g, "<br />");
    editedText = editedText.replace(/\*/g, "");
    // editedText2 = text?.LNTW?.replace(/\n/g, "<br />");
    // editedText2 = editedText2.replace(/\*/g, "");
  }

  async function approve(typemain) {
    setLoading(true);
    try {
      // dispatch(addQuestionToList({ query: inputValues?.theme }));

      if (getQuery()?.first === "sian") {
        await dispatch(
          createNewQuestion({
            // query: inputValues?.theme,
            mind: getQuery()?.first,
            api: getQuery()?.confirm,
            inputValues: inputValues,
            output: text?.result,
          })
        );
      } else {
        console.log(getQuery(), "getquery", mind);
        await dispatch(
          createNewQuestion({
            mind: getQuery()?.first,
            api: getQuery()?.confirm,
            inputValues: inputValues,
            output: text?.result,
          })
        );
      }

      setLoading(false);
    } catch (error) {
      console.log(error, "error");
      setLoading(false);
    }
  }

  return (
    <div
      className={
        "w-full flex items-center flex-col space-y-3" +
        (isGenesis ? "bg-[#e9e6e6] bg-opacity-10 " : "bg-transparent")
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
        {typeof text?.result === "string" ? (
          <div className="max-w-full py-2 ">
            <p
              className="max-w-full text-wrap 	 flex items-center"
              dangerouslySetInnerHTML={{
                __html: editedText,
              }}
            ></p>
            {isGenesis &&
              (!loading ? (
                <div className="flex items-center py-6 flex-row space-x-6">
                  <button
                    onClick={approve}
                    className="bg-green-500 rounded-full hover:text-purple-500 hover:shadow-lg  px-3 py-3 text-2xl font-medium text-white"
                  >
                    Confirm
                  </button>
                  {/* <button
                    onClick={reject}
                    className="bg-red-600 rounded-full hover:text-purple-500 hover:shadow-lg px-3 py-3 text-2xl font-medium text-white"
                  >
                    Try Again
                  </button> */}
                </div>
              ) : (
                <Loader size={100} />
              ))}

            {/* <p className="max-w-full text-wrap	 flex items-center ">{text}</p> */}
          </div>
        ) : (
          <div className="w-full flex flex-row space-x-3 items-center py-2">
            <div className="w-full">
              <p
                className="max-w-full text-wrap	 flex items-center"
                dangerouslySetInnerHTML={{
                  __html: editedText,
                }}
              ></p>
              {isGenesis &&
                (!loading ? (
                  <div className="flex items-center py-6 flex-row space-x-6">
                    {/* <button
                      onClick={approve}
                      className="bg-green-500 rounded-full hover:text-purple-500 hover:shadow-lg  px-3 py-3 text-2xl font-medium text-white"
                    >
                      Approve
                    </button>
                    <button
                      onClick={reject}
                      className="bg-red-600 rounded-full hover:text-purple-500 hover:shadow-lg px-3 py-3 text-2xl font-medium text-white"
                    >
                      Try Again
                    </button> */}
                  </div>
                ) : (
                  <Loader size={100} />
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResponseCard;
