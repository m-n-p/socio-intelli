import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import createNewQuestion from "./actions/conversation";
import Loader from "../Loader";
import { addQuestionToList } from "../ConversationPanel/reducers";

const InputField = ({ activeThread, inputValues, setInputValues }) => {
  const inputRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  async function askQuestion(e) {
    try {
      setLoading(true);
      dispatch(addQuestionToList({ query: inputValues?.theme }));
      dispatch(
        createNewQuestion({
          query: inputValues?.theme,
          mind: activeThread?.mind,
          api: activeThread?.mind === "Email-Writer" ? "martha" : "query_k2",
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
      <p>
        Responses are generated from the Knowledge Base, an outcome of our
        research findings and strategy perspective.
      </p>
      <div className="w-full flex justify-center">
        <button
          onClick={askQuestion}
          className="bg-[#1B68DC] rounded-full px-6 py-3 text-4xl"
        >
          {loading ? <Loader /> : " Ask Me!"}{" "}
        </button>
      </div>
      {/* <div className="w-full relative ">
        <button
          onClick={askQuestion}
          className="bg-[#1B68DC] rounded-full px-4 py-2 absolute right-3 top-1/2 -translate-y-1/2 w-28"
        ></button>
      </div> */}
      <p>
        2023 All Rights Reserved. Market Universe is a product of Market
        Unwinded by Montaigne & Partners
      </p>
    </div>
  );
};

export default InputField;
