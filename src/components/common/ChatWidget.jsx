import React from "react";
import { BotMessageSquare } from "lucide-react";
import { useEffect, useRef, useState } from "react";
const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const chatModel = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (chatModel.current && !chatModel.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-secondary hover:bg-primary/80 text-white rounded-full p-4 shadow-lg transition-all duration-200"
      >
        <BotMessageSquare className="w-8 h-8" />
      </button>
      {isOpen && (
        <div
          ref={chatModel}
          className="absolute bottom-16 right-0 w-80 h-96 bg-white rounded-lg shadow-xl border"
        >
          <div className="p-4 border-b">
            <h3 className="font-semibold text-gray-900">Support Chat</h3>
          </div>
          <div className="p-4 h-64 overflow-y-auto">
            <p className="text-sm text-gray-600">How can we help you today?</p>
          </div>
          <div className="p-4 border-t">
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 "
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
