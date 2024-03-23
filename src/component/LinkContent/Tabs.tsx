import { UsergroupAddOutlined } from "@ant-design/icons";
import Chats from "../ChatContent/Chats";
import DropdownModal from "../ModalContent/DropdownModal";
import { useState } from "react";
import UpdateContent from "../UpdateContent/UpdateContent";
import Comment from "../NotesContent/Comment";
import FileUpload from "../FileContent/FileUpload";

interface Tabs {
  navigation: number;
}
export default function UpdateHistory({ navigation }: Tabs) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
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
            <UpdateContent />
          </div>
        </section>
      )}
      {navigation === 2 && (
        <section>
          <div className="upper flex justify-between my-4">
            <h2 className="pl-4">Notes/Comments</h2>
          </div>
          <div className="lower flex flex-col justify-between w-full h-full">
            <div className="flex space-x-4 mx-8">
              <Comment />
            </div>
          </div>
        </section>
      )}
      {navigation === 3 && (
        <section>
          <div className="upper flex justify-between my-4">
            <h2 className="pl-4">Files</h2>
          </div>
          <div className="lower flex flex-col justify-between w-full h-full">
            <div className="flex flex-col space-x-4 mx-8">
              <FileUpload />
            </div>
          </div>
        </section>
      )}
      {navigation === 4 && (
        <section>
          <div className="upper flex justify-between my-4">
            <h2 className="pl-4">Collaboration</h2>
            <UsergroupAddOutlined
              className="mr-4 text-semibold text-[24px] cursor-pointer"
              onClick={handleOpen}
            />
            <DropdownModal open={open} close={handleClose} />
          </div>
          <div className="lower flex flex-col justify-between w-full h-full">
            <div className="flex space-x-4 mx-8">
              <Chats state={navigation} />
            </div>
          </div>
        </section>
      )}
      {navigation === 5 && (
        <section>
          <div className="upper flex justify-between my-4">
            <h2 className="pl-4">Internal Collaboration</h2>
            <UsergroupAddOutlined
              className="mr-4 text-semibold text-[24px] cursor-pointer"
              onClick={handleOpen}
            />
            <DropdownModal open={open} close={handleClose} />
          </div>
          <div className="lower flex flex-col justify-between w-full">
            <div className="flex space-x-4 mx-8">
              <Chats state={navigation} />
            </div>
          </div>
        </section>
      )}
      {navigation === 6 && <section>6</section>}
      {navigation === 7 && <section>7</section>}
    </>
  );
}
