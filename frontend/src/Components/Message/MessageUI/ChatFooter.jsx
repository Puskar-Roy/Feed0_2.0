import React, { useState } from "react";
import {
  FaImage,
  FaMicrophone,
  FaSmile,
  FaPaperPlane,
  FaHeart,
} from "react-icons/fa";

function ChatFooter() {
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleInputChange = (event) => {
    setMessage(event.target.value);
    setIsTyping(event.target.value.length > 0);
  };

  return (
    <div className="flex flex-row items-center p-4">
      <button
        type="button"
        className="flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6"
      >
        <FaImage />
      </button>
      <button
        type="button"
        className="flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6"
      >
        <FaMicrophone />
      </button>
      <button
        type="button"
        className="flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6"
      >
        <FaSmile />
      </button>
      {isTyping ? (
        <button
          type="button"
          className="flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6"
        >
          <FaPaperPlane />
        </button>
      ) : (
        <button
          type="button"
          className="flex flex-shrink-0 focus:outline-none mx-2 block text-red-600 hover:text-red-700 w-6 h-6"
        >
          <FaHeart />
        </button>
      )}
      <div className="relative flex-grow">
        <label>
          <input
            className="rounded-full py-2 pl-3 pr-10 w-full border border-gray-800 focus:border-gray-700 bg-gray-800 focus:bg-gray-900 focus:outline-none text-gray-200 focus:shadow-md transition duration-300 ease-in"
            type="text"
            value={message}
            onChange={handleInputChange}
            placeholder="Aa"
          />
          <button
            type="button"
            className="absolute top-0 right-0 mt-2 mr-3 flex flex-shrink-0 focus:outline-none block text-blue-600 hover:text-blue-700 w-6 h-6"
          >
            <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
              <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM6.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm2.16 3a6 6 0 0 1-11.32 0h11.32z" />
            </svg>
          </button>
        </label>
      </div>
    </div>
  );
}

export default ChatFooter;
