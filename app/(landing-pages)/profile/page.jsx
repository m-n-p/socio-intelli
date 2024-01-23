"use client";
import createNewQuestion from "@/app/chat/components/ChatPanel/actions/conversation";
import { getProfileInfo } from "@/app/chat/components/ChatPanel/actions/getProfileInfo";
import LeftPanel from "@/app/chat/components/LeftPanel";
import { useAuthStateChange } from "@/app/hooks/useAuthStateChange";
import { useAppSelector } from "@/app/store";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const Page = () => {
  useAuthStateChange();
  const dispatch = useDispatch();
  const uuid = useAppSelector((state) => state.authentication.uuid);
  const threads = useAppSelector((state) => state.chatPanel);

  console.log(threads, "activeThread");
  useEffect(() => {
    if (uuid) {
      dispatch(getProfileInfo());
    }
  }, [dispatch, uuid]);

  return (
    <div className="w-screen h-screen max-h-screen overflow-hidden flex main-container">
      <div className="w-[20%] h-screen overflow-hidden  ">
        <LeftPanel />
      </div>
      <div
        className="max-w-[80%] grow h-full max-h-full bg-[#f4f4f4]"
        style={{ overflowY: "auto" }}
      >
        <div className=" min-h-screen bg-white">
          <div className="px-5 py-10 text-5xl font-semibold ">Profile Page</div>

          <div className="px-5 py-10 grid grid-cols-3 gap-10">
            <div className="bg-slate-200 rounded-full p-6 flex flex-col justify-center space-y-6">
              <div className="text-3xl font-semibold text-center">Balance</div>
              <div className="text-3xl font-semibold text-purple-500  text-center">
                {threads?.userInfo?.Balance}
              </div>
            </div>
            {/* <div className="bg-slate-200 rounded-full p-6 flex flex-col justify-center space-y-6">
          <div className="text-3xl font-semibold text-center">
            CreditsRemaining
          </div>
          <div className="text-3xl font-semibold text-purple-500  text-center">
            {threads?.userInfo?.CreditsRemaining}
          </div>
        </div> */}
            <div className="bg-slate-200 rounded-full p-6 flex flex-col justify-center space-y-6">
              <div className="text-3xl font-semibold text-center">
                CreditsUsed
              </div>
              <div className="text-3xl font-semibold text-purple-500  text-center">
                {threads?.userInfo?.CreditsUsed}
              </div>
            </div>
          </div>
          <div className="px-5 py-10 flex flex-col space-y-10">
            <div className="text-5xl font-semibold ">History</div>

            <div class="relative overflow-x-auto">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Conversation_Id
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Cost
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Timestamp
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Theme
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {threads?.userInfo?.userHistory?.map((his, index) => {
                    return (
                      <tr
                        key={index}
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      >
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {his?.conversation_id}
                        </th>
                        <td class="px-6 py-4">{his?.cost}</td>
                        <td class="px-6 py-4">{his?.thread?.[0]?.timestamp}</td>
                        <td class="px-6 py-4">{his?.thread?.[0]?.theme}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
