import React from "react";
import { FaThumbsUp, FaEllipsisH, FaReply } from "react-icons/fa";

function ChatMessage({ text, sender }) {
  return (
    <div
      className={`flex items-center ${sender ? "justify-end" : ""} group mb-3`}
    >
      <div
        className={`p-3 rounded-t-full rounded-r-full ${
          sender
            ? "bg-blue-300 text-white ml-auto"
            : "bg-gray-300 text-gray-800 mr-auto"
        } max-w-xs lg:max-w-md`}
      >
        {text}
      </div>
      <button
        type="button"
        className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
      >
        {sender ? <FaThumbsUp /> : <FaReply />}
      </button>
      <button
        type="button"
        className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
      >
        <FaEllipsisH />
      </button>
    </div>
  );
}

export default ChatMessage;
