import Sidebar from "./Sidebar";
import Navar from "./Navar";
import { useState } from "react";
import Tabs from "./LinkContent/Tabs";

export default function CoreStatus() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };
  return (
    <div className="max-w-full min-h-screen bg-white font-montserrat flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navar />
          <div className="header mt-8 mb-4">
            <span className="pl-10 font-semibold text-[20px]">Case Status</span>
          </div>
          <div className="hero flex flex-col w-full">
            <div className="border bg-white mx-10 py-2 shadow-md">
              <div className="grid grid-cols-2 mt-4 mb-10">
                <div className="flex flex-col">
                  <div className="flex flex-col pl-4 space-y-2 text-[14px]">
                    <div className="flex text-custom-text-gray">
                      <h2>Title:</h2>
                      <span className="pl-2 text-black font-normal">
                        The quick brown fox jumps over the lazy dog near the
                        riverbank
                      </span>
                    </div>
                    <div className="flex text-custom-text-gray">
                      <h2>Assignee:</h2>
                      <span className="pl-2 text-black font-medium flex">
                        <span className="h-5 w-6 text-custom-text-gray text-[10px] bg-green-300 rounded-full flex items-center justify-center">
                          JD
                        </span>
                        <span className="pl-2 font-normal">Jane Doe</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-x-1 pl-60">
                  <div className="text-left">
                    <span className="text-[20px] text-red-500">123456723</span>
                  </div>
                  <div className="text-left">
                    <span className="font-normal text-[14px] text-custom-text-gray">
                      Tracking Number
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 w-full mb-6">
                <div className="flex flex-col">
                  <div className="flex space-x-20 pl-4 text-left pt-4">
                    <div>
                      <h2 className="text-red-500">High</h2>
                      <span className="text-[14px] text-custom-text-gray">
                        Priority
                      </span>
                    </div>
                    <div>
                      <h2>11/21/23</h2>
                      <span className="text-[14px] text-custom-text-gray">
                        Target Date
                      </span>
                    </div>
                    <div>
                      <h2>John Doe</h2>
                      <span className="text-[14px] text-custom-text-gray">
                        Reported / Creator
                      </span>
                    </div>
                    <div>
                      <h2>Fraud</h2>
                      <span className="text-[14px] text-custom-text-gray">
                        Tag
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col pl-60 pt-2">
                  <div className="text-left">
                    <h2 className="text-[24px] text-green-400">COMPLETED</h2>
                  </div>
                  <div className="text-left">
                    <span className="text-[14px] text-custom-text-gray">
                      Current Status
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="nav-links mb-4 mt-8 flex space-x-14 text-[14px] font-normal  justify-center items-center">
            <a
              href="#"
              className={activeTab === 1 ? "font-bold" : "font-normal"}
              onClick={() => handleTabClick(1)}
            >
              Update History
            </a>
            <a
              href="#"
              className={activeTab === 2 ? "font-bold" : "font-normal"}
              onClick={() => handleTabClick(2)}
            >
              Notes/Comments
            </a>
            <a
              href="#"
              className={activeTab === 3 ? "font-bold" : "font-normal"}
              onClick={() => handleTabClick(3)}
            >
              Files
            </a>
            <a
              href="#"
              className={activeTab === 4 ? "font-bold" : "font-normal"}
              onClick={() => handleTabClick(4)}
            >
              Report's Collab
            </a>
            <a
              href="#"
              className={activeTab === 5 ? "font-bold" : "font-normal"}
              onClick={() => handleTabClick(5)}
            >
              Internal Collab
            </a>
            <a
              href="#"
              className={activeTab === 6 ? "font-bold" : "font-normal"}
              onClick={() => handleTabClick(6)}
            >
              Related Reports
            </a>
            <a
              href="#"
              className={activeTab === 7 ? "font-bold" : "font-normal"}
              onClick={() => handleTabClick(7)}
            >
              Reports Logs
            </a>
          </div>
          <section className="border h-screen mx-10 shadow-md">
            <Tabs navigation={activeTab} />
          </section>
        </div>
      </div>
    </div>
  );
}
