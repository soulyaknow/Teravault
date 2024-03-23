import { CloudDownloadOutlined } from "@ant-design/icons";
import Tables from "./TableContent/Tables";

export default function FileUpload() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <CloudDownloadOutlined className="w-8 h-8 mb-4 text-gray-500 text-[38px]" />
            <p className="mb-2 text-sm text-gray-500">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500">
              PDF, PNG, JPG or DOCS (MAX. 800x400px)
            </p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>

        <div className="w-full flex items-center justify-center mt-20">
          <Tables />
        </div>
      </div>
    </>
  );
}
