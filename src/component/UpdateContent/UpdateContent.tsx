import { ConfigProvider, Timeline } from "antd";

export default function UpdateContent() {
  return (
    <>
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
                    <span className="text-custom-text-gray">10: 30 AM</span>
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
                    <span className="text-custom-text-gray">10: 30 AM</span>
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
                    <span className="text-custom-text-gray">10: 30 AM</span>
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
    </>
  );
}
