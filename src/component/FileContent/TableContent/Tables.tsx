export default function Tables() {
  return (
    <>
      <div className="w-full mb-20 shadow-lg">
        <table className="w-full text-sm text-left rtl:text-right  text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3 border-2 border-gray-300">
                File name
              </th>
              <th scope="col" className="px-6 py-3 border-2 border-gray-300">
                Uploaded by
              </th>
              <th scope="col" className="px-6 py-3 border-2 border-gray-300">
                File size
              </th>
              <th scope="col" className="px-6 py-3 border-2 border-gray-300">
                Uploaded date
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-2 border-gray-300 text-gray-900">
              <th
                scope="row"
                className="px-6 py-4 font-medium  whitespace-nowrap border-r-2 border-gray-300"
              >
                test.pdf
              </th>
              <td className="px-6 py-4 border-r-2 border-gray-300">User1</td>
              <td className="px-6 py-4 border-r-2 border-gray-300">20kb</td>
              <td className="px-6 py-4 border-r-2 border-gray-300">
                November 21, 2023
              </td>
            </tr>
            <tr className="bg-white border-2 border-gray-300 text-gray-900">
              <th
                scope="row"
                className="px-6 py-4 font-medium  whitespace-nowrap  border-r-2 border-gray-300"
              >
                test.docx
              </th>
              <td className="px-6 py-4  border-r-2 border-gray-300">User2</td>
              <td className="px-6 py-4  border-r-2 border-gray-300">100mb</td>
              <td className="px-6 py-4  border-r-2 border-gray-300">
                November 22, 2023
              </td>
            </tr>
            <tr className="bg-white border-2 border-gray-300 text-gray-900">
              <th
                scope="row"
                className="px-6 py-4 font-medium  whitespace-nowrap  border-r-2 border-gray-300"
              >
                test.png
              </th>
              <td className="px-6 py-4  border-r-2 border-gray-300">User3</td>
              <td className="px-6 py-4  border-r-2 border-gray-300">1gb</td>
              <td className="px-6 py-4  border-r-2 border-gray-300">
                November 23, 2023
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
