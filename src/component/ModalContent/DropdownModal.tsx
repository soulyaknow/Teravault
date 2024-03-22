import { SendOutlined } from "@ant-design/icons";
import { Modal } from "antd";

interface Props {
  open: boolean;
  close: () => void;
}

export default function DropdownModal({ open, close }: Props) {
  return (
    <>
      <Modal
        open={open}
        closeIcon={null}
        footer={
          <div className="flex justify-between mx-10 mt-20 mb-4">
            <div>
              <button
                className="border w-32 h-10 bg-yellow-400 hover:bg-yellow-500 text-white font-normal rounded-md text-[18px]"
                onClick={close}
              >
                Cancel
              </button>
            </div>
            <div className="relative inline-block">
              <button className="border w-32 h-10 bg-teal-600 hover:bg-teal-500 text-white font-normal rounded-md text-[18px]">
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
          <section className="w-full border">
            <select name="user" className="w-full">
              <option value="name1">Test1</option>
            </select>
          </section>
        </div>
      </Modal>
    </>
  );
}
