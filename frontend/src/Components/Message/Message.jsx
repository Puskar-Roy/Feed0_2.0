import React from "react";
import { FaPencilAlt } from "react-icons/fa";
import MessageList from "./MessageUI/MessageList";
function Message() {
  return (
    <div className="m-10 mt-[8rem] ">
      <div className="grid grid-cols-2 mx-auto shadow-xl mx-auto rounded-lg ">
        <div className="w-1/3 flex flex-col space-y-4">
          <h1 className="flex justify-between">
            <span>Feed0 Messages</span>
            <span>
              <FaPencilAlt />
            </span>
          </h1>

          <div className="overflow-y-auto p-2">
            <MessageList />
          </div>
        </div>
        <div className="w-2/3">chat section</div>
      </div>
    </div>
  );
}

export default Message;
