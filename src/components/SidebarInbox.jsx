import React from "react";
import { Link } from "react-router-dom";

const SidebarInbox = () => {
  return (
    <div className="w-64 bg-gray-100 p-4">
      <nav>
        <ul className="space-y-2">
          <li>
            <Link to="/inbox" className="block p-2 hover:bg-gray-200">
              Inbox
            </Link>
          </li>
          <li>
            <Link to="/sent" className="block p-2 hover:bg-gray-200">
              Sent
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SidebarInbox;
