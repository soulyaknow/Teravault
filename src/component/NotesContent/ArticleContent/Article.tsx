import { useState } from "react";

export default function Article() {
  const [open, setOpen] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState<Number>();

  const handleDropDown = (e: number) => {
    if (e === isDropdownVisible && open) {
      setOpen(false);
    } else {
      setIsDropdownVisible(e);
      setOpen(true);
    }
  };
  return (
    <>
      <article className="py-4 text-base bg-white w-full">
        <footer className="flex justify-between items-center mb-2 relative px-2">
          <div className="flex items-center">
            <p className="inline-flex items-center mr-3 text-sm text-gray-900 font-semibold">
              <img
                className="mr-2 w-6 h-6 rounded-full"
                src="https://static.vecteezy.com/system/resources/previews/003/809/772/original/portrait-of-an-attractive-young-girl-illustration-in-flat-style-vector.jpg"
                alt="User1"
              />
              User1
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <time dateTime="2022-02-08" title="February 8th, 2022">
                Feb. 8, 2022
              </time>
            </p>
          </div>
          <button
            id="dropdownComment1Button"
            onClick={() => handleDropDown(1)}
            className="relative inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50"
            type="button"
          >
            <svg
              className="w-4 h-4 text-black"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 3"
            >
              <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
            </svg>
            <span className="sr-only">Comment settings</span>
          </button>
          {isDropdownVisible === 1 && open && (
            <div id="dropdownComment1" className="absolute right-0 z-10 top-8">
              <ul
                className="py-1 text-sm text-gray-700 dark:text-gray-200 bg-white rounded divide-y divide-gray-100 shadow"
                aria-labelledby="dropdownMenuIconHorizontalButton"
              >
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Edit
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Remove
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Report
                  </a>
                </li>
              </ul>
            </div>
          )}
        </footer>
        <p className="text-gray-500 dark:text-gray-400 px-4 break-words">
          Very straight-to-point article. Really worth time reading. Thank you!
          But tools are just the instruments for the UX designers. The knowledge
          of the design tools are as important as the creation of the design
          strategy.
        </p>
      </article>
      <article className="py-4 text-base bg-white w-full">
        <footer className="flex justify-between items-center mb-2 relative px-2">
          <div className="flex items-center">
            <p className="inline-flex items-center mr-3 text-sm text-gray-900 font-semibold">
              <img
                className="mr-2 w-6 h-6 rounded-full"
                src="https://static.vecteezy.com/system/resources/previews/003/809/772/original/portrait-of-an-attractive-young-girl-illustration-in-flat-style-vector.jpg"
                alt="User2"
              />
              User2
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <time dateTime="2022-02-08" title="February 12th, 2022">
                Feb. 12, 2022
              </time>
            </p>
          </div>
          <button
            id="dropdownComment1Button"
            onClick={() => handleDropDown(2)}
            className="relative inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50"
            type="button"
          >
            <svg
              className="w-4 h-4 text-black"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 3"
            >
              <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
            </svg>
            <span className="sr-only">Comment settings</span>
          </button>
          {isDropdownVisible === 2 && open && (
            <div id="dropdownComment1" className="absolute right-0 z-10 top-8">
              <ul
                className="py-1 text-sm text-gray-700 dark:text-gray-200 bg-white rounded divide-y divide-gray-100 shadow"
                aria-labelledby="dropdownMenuIconHorizontalButton"
              >
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Edit
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Remove
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Report
                  </a>
                </li>
              </ul>
            </div>
          )}
        </footer>
        <p className="text-gray-500 dark:text-gray-400 px-4 break-words">
          Much appreciated! Glad you liked it ☺️
        </p>
      </article>
    </>
  );
}
