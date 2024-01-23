import Image from "next/image";
import React, { useEffect } from "react";
import AddButton from "./AddButton";
import { useAppDispatch, useAppSelector } from "../../store";
import { getAllThreads } from "./ChatPanel/actions/getAllThreads";
import QuestionsList from "./ChatPanel/QuestionsList";
import { getProfileInfo } from "./ChatPanel/actions/getProfileInfo";
const LeftPanel = () => {
  const dispatch = useAppDispatch();

  const uuid = useAppSelector((state) => state.authentication.uuid);

  useEffect(() => {
    if (uuid) {
      dispatch(getProfileInfo());
    }
  }, [dispatch, uuid]);

  return (
    <div className="w-full h-full  text-black  flex flex-col overflow-hidden max-h-full">
      <div className="grow px-2 py-3 flex flex-col max-h-full overflow-hidden">
        <div>
          <AddButton />
        </div>
        <div className="flex flex-col grow max-h-full overflow-hidden">
          <QuestionsList />
        </div>
      </div>
      <button className="flex h-max items-center bg-white">
        <Image
          src="/MontaLogo.png"
          alt="Avatar"
          className="avatar bg-black"
          width={68}
          height={66}
        />
        <div className="text-black px-2">{"rohith@montaigne.co"}</div>
      </button>
    </div>
  );
};

export default LeftPanel;
