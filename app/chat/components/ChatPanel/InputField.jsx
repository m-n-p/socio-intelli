import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import createNewQuestion from "./actions/conversation";
import Loader from "../Loader";
import { addQuestionToList } from "../ConversationPanel/reducers";

const InputField = ({
  activeThread,
  inputValues,
  followup,
  siantoggle,
  setSiantoggle,
  adsOrArticle,
}) => {
  const inputRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const getQuery = () => {
    if (activeThread?.mind === "Email-Writer") {
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
    } else if (activeThread?.mind === "Linkedin-Twitter-Writer") {
      if (siantoggle === "instagram") {
        return {
          first: "sianins3",
          confirm: "confirm_lntw",
          retry: "retry_lntw",
        };
      } else if (siantoggle === "lit") {
        return {
          first: "sianv1",
          confirm: "confirm_lntw",
          retry: "retry_lntw",
        };
      } else if (siantoggle === "linkedin") {
        return {
          first: "sianlnk3",
          confirm: "confirm_lntw",
          retry: "retry_lntw",
        };
      } else if (siantoggle === "watsapp") {
        return {
          first: "sianwhapp",
          confirm: "confirm_sianwhapp",
          retry: "retry_lntw",
        };
      }
    } else if (activeThread?.mind === "Blog-Article-Writer") {
      if (adsOrArticle === true) {
        return {
          first: "steve",
          confirm: "confirm_steve",
          retry: "retry_amelia",
        };
      } else {
        return {
          first: "gads",
          confirm: "confirm_gads",
          retry: "retry_amelia",
        };
      }
    }
  };
  console.log(getQuery(), "getQuery", siantoggle);

  async function askQuestion(e) {
    setLoading(true);
    try {
      await dispatch(addQuestionToList({ query: inputValues?.theme }));
      await dispatch(
        createNewQuestion({
          query: inputValues?.theme,
          mind: activeThread?.mind,
          api: getQuery()?.first,
          inputValues: inputValues,
        })
      );

      setLoading(false);
    } catch (error) {
      console.log(error, "error");
      setLoading(false);
    }
  }

  async function approve(e) {
    setLoading(true);
    try {
      // dispatch(addQuestionToList({ query: inputValues?.theme }));
      await dispatch(
        createNewQuestion({
          query: inputValues?.theme,
          mind: activeThread?.mind,
          api: getQuery()?.confirm,
          inputValues: inputValues,
        })
      );

      setLoading(false);
    } catch (error) {
      console.log(error, "error");
      setLoading(false);
    }
  }
  async function reject(e) {
    setLoading(true);
    try {
      // dispatch(addQuestionToList({ query: inputValues?.theme }));
      await dispatch(
        createNewQuestion({
          query: inputValues?.theme,
          mind: activeThread?.mind,
          api: getQuery()?.retry,
          inputValues: inputValues,
        })
      );

      setLoading(false);
    } catch (error) {
      console.log(error, "error");
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center space-y-3 w-4/5 mx-auto ">
      {/* <p>
        Responses are generated from the Knowledge Base, an outcome of our
        research findings and strategy perspective.
      </p> */}
      <div className="w-full flex justify-center">
        {loading ? (
          <div className="flex justify-center mx-auto">
            <Loader size={100} />
          </div>
        ) : (
          <div
            onClick={askQuestion}
            class="relative cursor-pointer inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-purple-500  border-2 border-purple-500 rounded-full hover:text-white group hover:bg-gray-50"
          >
            <span class="absolute left-0 block w-full h-0 transition-all bg-purple-500  opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span class="relative">Ask Me</span>
          </div>
        )}
      </div>
      {/* <div className="w-full relative ">
        <button
          onClick={askQuestion}
          className="bg-[#1B68DC] rounded-full px-4 py-2 absolute right-3 top-1/2 -translate-y-1/2 w-28"
        ></button>
      </div> */}
      <p>
        2023 All Rights Reserved.Socio-Intelli is a product by Montaigne &
        Partners
      </p>
    </div>
  );
};

export default InputField;
