import { Modal, Select, Space } from "antd";
import type { SelectProps } from "antd";
import { useState } from "react";

interface Props {
  open: boolean;
  close: () => void;
}

export default function DropdownModal({ open, close }: Props) {
  const [message, setMessage] = useState(false);
  const [name, setName] = useState<String[]>();
  const options: SelectProps["options"] = [
    {
      label: "user1",
      value: "user1",
    },
    {
      label: "user2",
      value: "user2",
    },
    {
      label: "user3",
      value: "user3",
    },
    {
      label: "user4",
      value: "user4",
    },
    {
      label: "user5",
      value: "user5",
    },
  ];

  const handleChange = (value: string[]) => {
    if (value.length === 0) {
      setMessage(false);
    } else {
      setName(value);
      setMessage(true);
    }
  };
  return (
    <>
      <Modal
        className="mt-20"
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
            <div>
              <button className="border w-32 h-10 bg-teal-600 hover:bg-teal-500 text-white font-normal rounded-md text-[18px]">
                Confirm
              </button>
            </div>
          </div>
        }
      >
        <section className="w-full flex items-center justify-center flex-col">
          <Space className="w-full" direction="vertical">
            <Select
              mode="multiple"
              allowClear
              className="w-full mt-10 h-12"
              placeholder="Please select user"
              onChange={handleChange}
              options={options}
            />
          </Space>
          {message && (
            <p className="pt-10 flex flex-col">
              Are you sure you want to add this user
              <span className="text-center">{name}</span>
            </p>
          )}
        </section>
      </Modal>
    </>
  );
}
