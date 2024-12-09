import React, { useState } from 'react';
import { useStore } from '../lib/store';
import { Send } from 'lucide-react';

export function Chat() {
  const [message, setMessage] = useState('');
  const messages = useStore((state) => state.messages);
  const addMessage = useStore((state) => state.addMessage);
  const user = useStore((state) => state.user);

  const handleSend = () => {
    if (!message.trim() || !user) return;

    addMessage({
      id: Date.now().toString(),
      content: message,
      userId: user.id,
      userName: user.name,
      timestamp: new Date(),
    });
    setMessage('');
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.userId === user?.id ? 'justify-end' : 'justify-start'}`}
          >
            <div className="bg-gray-800 rounded-lg p-3 max-w-[80%]">
              <div className="text-sm text-gray-400">{msg.userName}</div>
              <div className="text-white">{msg.content}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-800 p-4">
        <div className="flex space-x-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type a message..."
            className="flex-1 bg-gray-800 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            onClick={handleSend}
            className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-md transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}