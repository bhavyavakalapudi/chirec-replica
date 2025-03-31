import React from 'react';

const SideBar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-6">
        {/* Parent Menu Item 1 */}
        <li className="relative group">
          <button className="text-white">Menu 1</button>
          {/* First Dropdown */}
          <ul className="absolute left-0 hidden mt-2 space-y-2 bg-gray-700 p-2 group-hover:block">
            <li className="relative group">
              <button className="text-white">Item 1.1</button>
              {/* Sub-dropdown for Item 1.1 */}
              <ul className="absolute left-full top-0 hidden mt-2 space-y-2 bg-gray-600 p-2 group-hover:block">
                <li><button className="text-white">Sub-item 1.1.1</button></li>
                <li><button className="text-white">Sub-item 1.1.2</button></li>
              </ul>
            </li>
            <li><button className="text-white">Item 1.2</button></li>
          </ul>
        </li>

        {/* Parent Menu Item 2 */}
        <li className="relative group">
          <button className="text-white">Menu 2</button>
          {/* Second Dropdown */}
          <ul className="absolute left-0 hidden mt-2 space-y-2 bg-gray-700 p-2 group-hover:block">
            <li className="relative group">
              <button className="text-white">Item 2.1</button>
              {/* Sub-dropdown for Item 2.1 */}
              <ul className="absolute left-full top-0 hidden mt-2 space-y-2 bg-gray-600 p-2 group-hover:block">
                <li><button className="text-white">Sub-item 2.1.1</button></li>
                <li><button className="text-white">Sub-item 2.1.2</button></li>
              </ul>
            </li>
            <li><button className="text-white">Item 2.2</button></li>
          </ul>
        </li>

        {/* Parent Menu Item 3 */}
        <li className="relative group">
          <button className="text-white">Menu 3</button>
          {/* Third Dropdown */}
          <ul className="absolute left-0 hidden mt-2 space-y-2 bg-gray-700 p-2 group-hover:block">
            <li><button className="text-white">Item 3.1</button></li>
            <li><button className="text-white">Item 3.2</button></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;