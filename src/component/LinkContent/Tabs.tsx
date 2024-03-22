import { Timeline, ConfigProvider } from "antd";
import {
  RobotFilled,
  SendOutlined,
  SmileTwoTone,
  UsergroupAddOutlined,
} from "@ant-design/icons";
interface Links {
  navigation: number;
}
export default function UpdateHistory({ navigation }: Links) {
  return (
    <>
      {navigation === 1 && (
        <section>
          <div className="upper flex justify-between my-4">
            <h2 className="pl-4">Update History</h2>
            <button className="mr-4 w-24 h-8 bg-teal-500 text-semibold text-white rounded">
              Update
            </button>
          </div>
          <div className="lower flex justify-center items-center w-full">
            <ConfigProvider
              theme={{
                components: {
                  Timeline: {
                    dotBorderWidth: 6,
                    tailWidth: 3,
                    itemPaddingBottom: 100,
                  },
                },
              }}
            >
              <Timeline
                className="pt-20 w-full"
                mode="left"
                items={[
                  {
                    label: (
                      <>
                        <div className="flex flex-col text-green-500 text-left pl-[350px]  font-normal">
                          <span className="font-bold">November 21, 2023</span>
                          <span>10: 30 AM</span>
                          <span>Tuesday</span>
                        </div>
                      </>
                    ),
                    color: "green",
                    children: (
                      <>
                        <div className="text-green-500 text-left pl-28">
                          <p>"Report updates for all users and cases..."</p>
                        </div>
                      </>
                    ),
                  },
                  {
                    label: (
                      <>
                        <div className="flex flex-col text-left pl-[350px] font-normal">
                          <span className="font-bold text-gray-600">
                            November 21, 2023
                          </span>
                          <span className="text-custom-text-gray">
                            10: 30 AM
                          </span>
                          <span className="text-custom-text-gray">Tuesday</span>
                        </div>
                      </>
                    ),
                    color: "gray",
                    children: (
                      <>
                        <div className="text-left pl-28">
                          <p>"Report updates for all users and cases..."</p>
                        </div>
                      </>
                    ),
                  },
                  {
                    label: (
                      <>
                        <div className="flex flex-col text-left pl-[350px] font-normal">
                          <span className="font-bold text-gray-600">
                            November 21, 2023
                          </span>
                          <span className="text-custom-text-gray">
                            10: 30 AM
                          </span>
                          <span className="text-custom-text-gray">Tuesday</span>
                        </div>
                      </>
                    ),
                    color: "gray",
                    children: (
                      <>
                        <div className="text-left pl-28">
                          <p>"Report updates for all users and cases..."</p>
                        </div>
                      </>
                    ),
                  },
                  {
                    label: (
                      <>
                        <div className="flex flex-col text-left pl-[350px] font-normal">
                          <span className="font-bold text-gray-600">
                            November 21, 2023
                          </span>
                          <span className="text-custom-text-gray">
                            10: 30 AM
                          </span>
                          <span className="text-custom-text-gray">Tuesday</span>
                        </div>
                      </>
                    ),
                    color: "gray",
                    children: (
                      <>
                        <div className="text-left pl-28">
                          <p>"Report updates for all users and cases..."</p>
                        </div>
                      </>
                    ),
                  },
                ]}
              />
            </ConfigProvider>
          </div>
        </section>
      )}
      {navigation === 2 && <section>2</section>}
      {navigation === 3 && <section>3</section>}
      {navigation === 4 && (
        <section>
          <div className="upper flex justify-between my-4">
            <h2 className="pl-4">Collaboration</h2>
            <UsergroupAddOutlined className="mr-4 text-semibold text-[24px] cursor-pointer" />
          </div>
          <div className="lower flex flex-col justify-between w-full">
            <div className="flex space-x-4 mx-8">
              <div className="message border shadow-md text-custom-text-gray w-[80%]">
                <div className="chat-box mt-20 overflow-y-auto space-y-10 space-x-4">
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
                      <span className="text-custom-text-gray pr-2">
                        Anonymous
                      </span>
                      <RobotFilled />
                    </div>
                    <div className="flex flex-col">
                      <p className="bg-violet-50 p-4 inline-block rounded-b-lg rounded-tr-lg break-words w-96">
                        i would like to check on the status on this report
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
                  <SendOutlined className="px-4 py-1 text-[24px] text-blue-300 font-semibold" />
                </div>
              </div>
              <div className="user-involve border shadow-md md:w-[20%] flex flex-col">
                <div className="flex justify-start items-center border-b">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/003/809/772/original/portrait-of-an-attractive-young-girl-illustration-in-flat-style-vector.jpg"
                    alt="profile-img"
                    className="w-10 h-10 border rounded-full m-2"
                  />
                  <span className="text-custom-text-gray">Testing123</span>
                </div>
                <div className="flex justify-start items-center border-b">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/003/809/772/original/portrait-of-an-attractive-young-girl-illustration-in-flat-style-vector.jpg"
                    alt="profile-img"
                    className="w-10 h-10 border rounded-full m-2"
                  />
                  <span className="text-custom-text-gray">Testing123</span>
                </div>
                <div className="flex justify-start items-center border-b">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/003/809/772/original/portrait-of-an-attractive-young-girl-illustration-in-flat-style-vector.jpg"
                    alt="profile-img"
                    className="w-10 h-10 border rounded-full m-2"
                  />
                  <span className="text-custom-text-gray">Testing123</span>
                </div>
                <div className="flex justify-start items-center border-b">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/003/809/772/original/portrait-of-an-attractive-young-girl-illustration-in-flat-style-vector.jpg"
                    alt="profile-img"
                    className="w-10 h-10 border rounded-full m-2"
                  />
                  <span className="text-custom-text-gray">Testing123</span>
                </div>
                <div className="flex justify-start items-center border-b">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/003/809/772/original/portrait-of-an-attractive-young-girl-illustration-in-flat-style-vector.jpg"
                    alt="profile-img"
                    className="w-10 h-10 border rounded-full m-2"
                  />
                  <span className="text-custom-text-gray">Testing123</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {navigation === 5 && <section>5</section>}
      {navigation === 6 && <section>6</section>}
      {navigation === 7 && <section>7</section>}
    </>
  );
}
