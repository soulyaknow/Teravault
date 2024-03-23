import {
  FilePdfOutlined,
  RobotFilled,
  SendOutlined,
  SmileTwoTone,
} from "@ant-design/icons";
import React, { useState } from "react";
import ConfirmationModal from "../ModalContent/ConfirmationModal";

interface State {
  state: number;
}

export default function Chats({ state }: State) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
    console.log("testing");
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="message border shadow-md text-custom-text-gray w-[80%] ">
        <div className="chat-box mt-20 space-y-10 space-x-4 overflow-y-auto">
          <div className="message-sender mb-2 flex justify-end pr-4">
            <div className="flex flex-col">
              <p className="bg-blue-100 p-4 inline-block rounded-b-lg rounded-tl-lg break-words w-96">
                i would like to report about the current progress of the
                project..
              </p>
              <span className="date text-[10px] pt-1 pr-1 text-right">
                27th Aug MM 12:40
              </span>
            </div>
          </div>
          <div className="message-receiver mb-2 flex flex-col justify-start w-80">
            <div className="flex">
              <span className="text-custom-text-gray pr-2">Anonymous</span>
              <RobotFilled />
            </div>
            <div className="flex flex-col">
              <p className="bg-violet-50 p-4 flex rounded-b-lg rounded-tr-lg break-words w-96 flex-col">
                i would like to check on the status on this report.
                <span className="pt-2">
                  <FilePdfOutlined className="text-[32px]" />
                  text.pdf
                </span>
              </p>
              <span className="date text-[10px] pt-1 pl-2">
                27th Aug MM 12:40
              </span>
            </div>
          </div>
          <div className="message-sender mb-2 flex  justify-end pr-4">
            <div className="flex flex-col">
              <p className="bg-blue-100 p-4 inline-block rounded-b-lg rounded-tl-lg break-words w-96">
                i would like to check the on the status???
              </p>
              <span className="date text-[10px] pt-1 pr-1 text-right">
                27th Aug MM 12:40
              </span>
            </div>
          </div>
        </div>
        <div className="inputs mt-20 mx-4 mb-6 flex items-center">
          <input
            type="text"
            className="w-full px-2 py-1 h-10 border-2 rounded border-blue-300 mr-2"
          />
          <div className="relative">
            <SmileTwoTone className="absolute right-4 top-0 bottom-0 m-auto text-gray-400 cursor-pointer text-[20px]" />
          </div>
          <SendOutlined
            className="px-4 py-1 text-[24px] text-blue-300 font-semibold"
            onClick={showModal}
          />
        </div>
        {state === 4 ? (
          <ConfirmationModal
            isModalOpen={isModalOpen}
            isModalClose={closeModal}
          />
        ) : null}
      </div>
      <div className="user-involve border shadow-md md:w-[20%] flex flex-col">
        <div className="flex justify-start items-center border-b">
          <img
            src="https://static.vecteezy.com/system/resources/previews/003/809/772/original/portrait-of-an-attractive-young-girl-illustration-in-flat-style-vector.jpg"
            alt="profile-img"
            className="w-10 h-10 border rounded-full m-2"
          />
          <h4 className="text-custom-text-gray flex justify-center items-center text-[12px]">
            Testing123 <span className="text-[10px]">(Master reviewer)</span>
          </h4>
        </div>
        <div className="flex justify-start items-center border-b">
          <img
            src="https://static.vecteezy.com/system/resources/previews/003/809/772/original/portrait-of-an-attractive-young-girl-illustration-in-flat-style-vector.jpg"
            alt="profile-img"
            className="w-10 h-10 border rounded-full m-2"
          />
          <h4 className="text-custom-text-gray flex justify-center items-center text-[12px]">
            Testing123 <span className="text-[10px]">(Sensitive reviewer)</span>
          </h4>
        </div>
        <div className="flex justify-start items-center border-b">
          <img
            src="https://static.vecteezy.com/system/resources/previews/003/809/772/original/portrait-of-an-attractive-young-girl-illustration-in-flat-style-vector.jpg"
            alt="profile-img"
            className="w-10 h-10 border rounded-full m-2"
          />
          <h4 className="text-custom-text-gray flex justify-center items-center text-[12px]">
            Testing123 <span className="text-[10px]">(Delagated reviewer)</span>
          </h4>
        </div>
        <div className="flex justify-start items-center border-b">
          <img
            src="https://static.vecteezy.com/system/resources/previews/003/809/772/original/portrait-of-an-attractive-young-girl-illustration-in-flat-style-vector.jpg"
            alt="profile-img"
            className="w-10 h-10 border rounded-full m-2"
          />
          <h4 className="text-custom-text-gray flex justify-center items-center text-[12px]">
            Testing123
          </h4>
        </div>
        <div className="flex justify-start items-center border-b">
          <img
            src="https://static.vecteezy.com/system/resources/previews/003/809/772/original/portrait-of-an-attractive-young-girl-illustration-in-flat-style-vector.jpg"
            alt="profile-img"
            className="w-10 h-10 border rounded-full m-2"
          />
          <h4 className="text-custom-text-gray flex justify-center items-center text-[12px]">
            Testing123
          </h4>
        </div>
      </div>
    </>
  );
}
