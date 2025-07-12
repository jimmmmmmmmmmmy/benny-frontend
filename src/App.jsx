import React, { useState } from 'react';
import ChatBubble from './components/ChatBubble';
import ChatInput from './components/ChatInput';
import siteIcon from './assets/site_icon.png'; // This is the heart icon for the logo
import bennyIcon from './assets/benny_icon.png'; // This is the beaver/main character icon

function App() {
  const [messages, setMessages] = useState([
    { type: 'ai', text: "To be your best guide, I first need to understand what truly matters to you. In your own words, what are you hoping to achieve on your wellness journey?" }
  ]);

  const handleSubmit = (userInput) => {
    setMessages([...messages, { type: 'user', text: userInput }]);
    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'ai', text: "Thanks! Let's proceed." }]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="w-full p-4 flex items-center justify-between border-b border-gray-200">
        <div className="flex items-center">
          <div className="p-1 rounded-md ">
            <img src={siteIcon} alt="Site Icon" className="w-12 h-12" />
          </div>
          <h1 className="text-xl font-semibold text-gray-800">Benny</h1>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex flex-col items-center pt-16 px-4">
        
        {/* Large icon above the title */}
        <img src={bennyIcon} alt="Benny the Beaver" className="w-20 h-20 mb-4" />

        <h2 className="text-3xl font-bold mb-2 text-gray-800">Set Your Focus</h2>
        <p className="text-gray-500 mb-8">Let's start your wellness journey together</p>

        {/* Chat Interface */}
        <div className="w-full max-w-2xl">
          {messages.map((msg, idx) => (
            msg.type === 'ai' ? (
              <ChatBubble key={idx} message={msg.text} icon={bennyIcon} />
            ) : (
              <div key={idx} className="flex justify-end mb-4">
                <div className="bg-blue-100 p-4 rounded-lg">
                  <p>{msg.text}</p>
                </div>
              </div>
            )
          ))}
          <ChatInput onSubmit={handleSubmit} />
        </div>
      </main>
    </div>
  );
}

export default App;