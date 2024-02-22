import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const InputMain = ({ name, typevar, value, onChange }) => {
  return (
    <div className="py-6 flex flex-col space-y-4">
      <div className="text-2xl font-medium">{name}</div>
      <input
        type={typevar}
        value={value}
        onChange={onChange}
        className="text-black text-xl font-medium border border-purple-500 py-3 px-3 rounded-2xl "
      />
    </div>
  );
};
const InputMain2 = ({ name, typevar, value, onChange }) => {
  return (
    <div className="py-6 flex flex-col space-y-4">
      <div className="text-2xl font-medium">{name}</div>
      <textarea
        rows={6}
        type={typevar}
        value={value}
        onChange={onChange}
        className="text-black text-xl font-medium border border-purple-500 py-3 px-3 rounded-2xl "
      />
    </div>
  );
};

const EmaiWriterInput = ({
  activeThread,
  inputValues,
  setInputValues,
  setFollowup,
  followup,
  siantoggle,
  setSiantoggle,
}) => {
  // Single state object for all inputs

  // Function to handle input changes
  const handleInputChange = (e, fieldName) => {
    if (fieldName === "project" || fieldName === "product") {
      setInputValues({ ...inputValues, [fieldName]: e });
    } else {
      setInputValues({ ...inputValues, [fieldName]: e.target.value });
    }
  };

  return (
    <div className="flex flex-col space-y-3">
      <div className="flex flex-col  justify-center w-2/3 mx-auto">
        <InputMain
          name="Objective"
          typevar="text"
          value={
            activeThread?.chats?.length > 0
              ? activeThread?.chats[0]?.objective
              : inputValues.theme
          }
          onChange={(e) => handleInputChange(e, "theme")}
        />
        <InputMain
          name="Target Audience:"
          typevar="text"
          value={
            activeThread?.chats?.length > 0
              ? activeThread?.chats[0]?.target_audience
              : inputValues.targetAudience
          }
          onChange={(e) => handleInputChange(e, "targetAudience")}
        />
        <InputMain
          name="Industry:"
          typevar="text"
          value={inputValues?.industry}
          onChange={(e) => handleInputChange(e, "industry")}
        />
        {activeThread?.mind === "Email-Writer" && (
          <div className="w-full flex justify-center">
            <label class="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                class="sr-only peer"
                onChange={() => setFollowup(!followup)}
              />
              <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Follow Up
              </span>
            </label>
          </div>
        )}
        {/* {activeThread?.mind === "Linkedin-Twitter-Writer" && (
          <InputMain
            name="Industry:"
            typevar="text"
            value={inputValues?.industry}
            onChange={(e) => handleInputChange(e, "industry")}
          />
        )} */}
        {activeThread?.mind === "Linkedin-Twitter-Writer" && (
          <div className="w-full flex justify-center items-center flex-row space-x-3">
            <div class="flex items-center ">
              <input
                checked
                onClick={() => setSiantoggle("linkedin")}
                id="default-radio-1"
                type="radio"
                value="linkedin"
                name="default-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-radio-1"
                class="ms-2 text-lg font-medium text-gray-900 dark:text-gray-300"
              >
                Linkedin
              </label>
            </div>
            <div class="flex items-center">
              <input
                checked
                onClick={() => setSiantoggle("instagram")}
                id="default-radio-2"
                type="radio"
                value="instagram"
                name="default-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-radio-2"
                class="ms-2 text-lg font-medium text-gray-900 dark:text-gray-300"
              >
                Instagram
              </label>
            </div>
            <div class="flex items-center">
              <input
                checked
                onClick={() => setSiantoggle("lit")}
                id="default-radio-2"
                type="radio"
                value="instagram"
                name="default-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-radio-2"
                class="ms-2 text-lg font-medium text-gray-900 dark:text-gray-300"
              >
                Social Posts (LinkedIn, Instagram, Twitter)
              </label>
            </div>
          </div>
        )}
        {/* {followup && (
          <InputMain
            name="Industry:"
            typevar="text"
            value={inputValues?.industry}
            onChange={(e) => handleInputChange(e, "industry")}
          />
        )} */}
        {followup && (
          <InputMain2
            name="Earlier Email:"
            typevar="text"
            value={inputValues?.earlier_email}
            onChange={(e) => handleInputChange(e, "earlier_email")}
          />
        )}

        {/* <InputMain
          name="Product"
          typevar="text"
          value={inputValues.product}
          onChange={(e) => handleInputChange(e, "product")}
        /> */}
      </div>
      {/* <div className="flex flex-row space-x-3 justify-center">
        {mind === "Email-Writer" && (
          <InputMain
            name="Email Sequence Number"
            typevar="number"
            value={inputValues.emailSeqNumber}
            onChange={(e) => handleInputChange(e, "emailSeqNumber")}
          />
        )}
        {mind !== "Blog-Article-Writer" && (
          <InputMain
            name="Special Offer"
            typevar="text"
            value={inputValues.specialOffer}
            onChange={(e) => handleInputChange(e, "specialOffer")}
          />
        )}
      </div> */}
      <div className="w-[30%] mx-auto flex justify-center flex-col space-y-6 ">
        <DropdownMenu className="border-none ">
          <DropdownMenuTrigger className="border-black border-2 px-4 py-3 rounded-full text-xl font-medium  hover:bg-purple-400 hover:text-white hover:border-white">
            {inputValues?.project === ""
              ? " Click Here To Select Project"
              : inputValues?.project}
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-[10rem]">
            {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="cursor-pointer hover:text-purple-400"
              onClick={() => handleInputChange("agmv", "project")}
            >
              AGMV
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer hover:text-purple-400"
              onClick={() => handleInputChange("unwinded", "project")}
            >
              MU
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer hover:text-purple-400"
              onClick={() => handleInputChange("mnp", "project")}
            >
              MNP
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer hover:text-purple-400"
              onClick={() => handleInputChange("luxofy", "project")}
            >
              Luxofy
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        {inputValues?.project !== "" && (
          <DropdownMenu className="border-none ">
            <DropdownMenuTrigger className="border-black border-2 px-4 py-3 rounded-full text-xl font-medium  hover:bg-purple-400 hover:text-white hover:border-white">
              {inputValues?.product === ""
                ? " Click Here To Select Product"
                : inputValues?.product}
            </DropdownMenuTrigger>
            {inputValues?.project === "agmv" && (
              <DropdownMenuContent className="w-[10rem]">
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="cursor-pointer hover:text-purple-400"
                  onClick={() => handleInputChange("etx", "product")}
                >
                  etx
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer hover:text-purple-400"
                  onClick={() => handleInputChange("aftc", "product")}
                >
                  aftc
                </DropdownMenuItem>
              </DropdownMenuContent>
            )}
            {inputValues?.project === "luxofy" && (
              <DropdownMenuContent className="w-[10rem]">
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="cursor-pointer hover:text-purple-400"
                  onClick={() => handleInputChange("pinecliff", "product")}
                >
                  Pinecliff
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer hover:text-purple-400"
                  onClick={() => handleInputChange("floretta", "product")}
                >
                  Floretta
                </DropdownMenuItem>
              </DropdownMenuContent>
            )}
            {inputValues?.project === "mnp" && (
              <DropdownMenuContent className="w-[10rem]">
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="cursor-pointer hover:text-purple-400"
                  onClick={() => handleInputChange("software", "product")}
                >
                  Software
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer hover:text-purple-400"
                  onClick={() => handleInputChange("marketing", "product")}
                >
                  Marketing
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer hover:text-purple-400"
                  onClick={() => handleInputChange("ai", "product")}
                >
                  AI
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer hover:text-purple-400"
                  onClick={() => handleInputChange("strategy", "product")}
                >
                  Strategy
                </DropdownMenuItem>
              </DropdownMenuContent>
            )}
            {inputValues?.project === "unwinded" && (
              <DropdownMenuContent className="w-[10rem]">
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="cursor-pointer hover:text-purple-400"
                  onClick={() => handleInputChange("universe", "product")}
                >
                  Universe
                </DropdownMenuItem>
              </DropdownMenuContent>
            )}
          </DropdownMenu>
        )}
      </div>
    </div>
  );
};

export default EmaiWriterInput;
