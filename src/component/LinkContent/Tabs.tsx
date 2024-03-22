import { Timeline, ConfigProvider } from "antd";
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
      {navigation === 4 && <section>4</section>}
      {navigation === 5 && <section>5</section>}
      {navigation === 6 && <section>6</section>}
      {navigation === 7 && <section>7</section>}
    </>
  );
}
