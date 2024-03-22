import { SendOutlined, WarningOutlined } from "@ant-design/icons";
import { Modal } from "antd";

interface Props {
  isModalOpen: boolean;
  isModalClose: () => void;
}

export default function ConfirmationModal({
  isModalOpen,
  isModalClose,
}: Props) {
  const handleOk = () => {
    console.log("test");
  };
  return (
    <>
      <Modal
        open={isModalOpen}
        closeIcon={null}
        footer={
          <div className="flex justify-between mx-10 mt-20 mb-4">
            <div>
              <button
                className="border w-32 h-10 bg-yellow-400 hover:bg-yellow-500 text-white font-normal rounded-md text-[18px]"
                onClick={isModalClose}
              >
                Cancel
              </button>
            </div>
            <div className="relative inline-block">
              <button
                className="border w-32 h-10 bg-teal-600 hover:bg-teal-500 text-white font-normal rounded-md text-[18px]"
                onClick={handleOk}
              >
                <span className="absolute left-0 top-0 bottom-0 flex items-center pl-2">
                  <SendOutlined />
                </span>
                Send
              </button>
            </div>
          </div>
        }
      >
        <div className="flex items-center justify-center flex-col space-y-10">
          <div className="header">
            <WarningOutlined className="text-[50px] text-yellow-400 mt-10" />
          </div>
          <div className="body">
            <p>Are you sure u want to send this message?</p>
          </div>
        </div>
      </Modal>
    </>
  );
}
