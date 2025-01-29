import React, { useState } from "react";

const Chat = () => {
  const [activeChat, setActiveChat] = useState(null);
  const [activeTab, setActiveTab] = useState("all"); // "all", "read", "unread"
  const [newMessage, setNewMessage] = useState("");

  const handleCall = (name) => {
    alert(`Calling ${name}...`);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const updatedChats = chats.map((chat) => {
      if (chat.id === activeChat.id) {
        return {
          ...chat,
          conversation: [
            ...chat.conversation,
            { type: "sent", text: newMessage.trim() },
          ],
        };
      }
      return chat;
    });

    setActiveChat((prevChat) => ({
      ...prevChat,
      conversation: [
        ...prevChat.conversation,
        { type: "sent", text: newMessage.trim() },
      ],
    }));

    setNewMessage(""); // Clear the input after sending
  };

  const chats = [
    {
      id: 1,
      name: "Felecia Rower",
      time: "4:30 PM",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      profilePic: "https://via.placeholder.com/50",
      isRead: true,
      conversation: [
        { type: "received", text: "Hi, how are you doing today?" },
        { type: "sent", text: "I'm good, thank you! What about you?" },
        { type: "received", text: "I'm doing great. Let's catch up soon." },
        { type: "sent", text: "Sure, let me know your availability!" },
      ],
    },
    {
      id: 2,
      name: "Adalabarto Granzin",
      time: "Aug 23",
      text: "Can you share the report by tomorrow?",
      profilePic: "https://via.placeholder.com/50",
      isRead: false,
      conversation: [
        { type: "received", text: "Can you share the report by tomorrow?" },
        { type: "sent", text: "Yes, I'll send it by evening." },
      ],
    },
    {
      id: 3,
      name: "John Doe",
      time: "Yesterday",
      text: "Meeting rescheduled to 2 PM.",
      profilePic: "https://via.placeholder.com/50",
      isRead: false,
      conversation: [
        { type: "received", text: "The meeting is rescheduled to 2 PM." },
        { type: "sent", text: "Got it, thanks for letting me know!" },
      ],
    },
    {
      id: 4,
      name: "Alice Morgan",
      time: "Today",
      text: "Don't forget to attend the meeting.",
      profilePic: "https://via.placeholder.com/50",
      isRead: true,
      conversation: [
        { type: "received", text: "Don't forget to attend the meeting." },
      ],
    },
    {
      id: 5,
      name: "Bob Richards",
      time: "Yesterday",
      text: "Can we reschedule our call?",
      profilePic: "https://via.placeholder.com/50",
      isRead: false,
      conversation: [
        { type: "received", text: "Can we reschedule our call?" },
      ],
    },
  ];

  const filteredChats =
    activeTab === "all"
      ? chats
      : chats.filter((chat) => (activeTab === "unread" ? !chat.isRead : chat.isRead));

  // Styles
  const containerStyle = {
    display: "flex",
    height: "100vh",  // Full height of the viewport
    width: "80vw",   // Full width of the viewport
    backgroundColor: "#f5f5f5",
};


  const sidebarStyle = {
    width: "350px",
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRight: "1px solid #ddd",
  };

  const searchBarStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  const tabsStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
    fontSize: "12px",
  };

  const tabStyle = {
    padding: "5px 15px",
    borderRadius: "15px",
    cursor: "pointer",
    border: "1px solid #ddd",
    backgroundColor: "#e0e0e0",
    textAlign: "center",
  };

  const activeTabStyle = {
    backgroundColor: "#6200ea",
    color: "white",
    borderColor: "#6200ea",
  };

  const messagesStyle = {
    overflowY: "auto",
  };

  const messageStyle = {
    display: "flex",
    backgroundColor: "#f9f9f9",
    padding: "10px",
    borderRadius: "10px",
    marginBottom: "10px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    alignItems: "center",
    width: "100%",
    cursor: "pointer",
  };

  const profilePicStyle = {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    marginRight: "15px",
    objectFit: "cover",
  };

  const nameStyle = {
    fontWeight: "bold",
    fontSize: "13px",
  };

  const timeStyle = {
    color: "gray",
    fontSize: "12px",
    marginLeft: "auto",
  };

  const textStyle = {
    marginTop: "5px",
    color: "#555",
    fontSize: "12px",
  };

  const chatContentStyle = {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ffffff",
  };

  const chatHeaderStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 20px",
    borderBottom: "1px solid #ddd",
    backgroundColor: "#f9f9f9",
  };

  const chatMessagesStyle = {
    flex: "1",
    padding: "20px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
  };

  const messageBubbleStyle = (type) => ({
    marginBottom: "10px",
    padding: "8px 12px",
    borderRadius: "12px",
    backgroundColor: type === "sent" ? "#6200ea" : "#f0f0f0",
    color: type === "sent" ? "white" : "black",
    alignSelf: type === "sent" ? "flex-end" : "flex-start",
    maxWidth: "60%",
    wordWrap: "break-word",
    textAlign: type === "sent" ? "right" : "left",
    marginLeft: type === "sent" ? "auto" : "0",
  });

  const inputBarStyle = {
    display: "flex",
    padding: "10px",
    borderTop: "1px solid #ddd",
    backgroundColor: "#f9f9f9",
  };

  const inputStyle = {
    flex: "1",
    padding: "10px",
    borderRadius: "20px",
    border: "1px solid #ccc",
    marginRight: "10px",
  };

  const sendButtonStyle = {
    padding: "10px 20px",
    borderRadius: "20px",
    backgroundColor: "#6200ea",
    color: "white",
    border: "none",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <div style={sidebarStyle}>
        <div>
          <input type="text" placeholder="Search" style={searchBarStyle} />
        </div>
        <div style={tabsStyle}>
          <button
            style={{ ...tabStyle, ...(activeTab === "all" && activeTabStyle) }}
            onClick={() => setActiveTab("all")}
          >
            All Messages
          </button>
          <button
            style={{ ...tabStyle, ...(activeTab === "read" && activeTabStyle) }}
            onClick={() => setActiveTab("read")}
          >
            Read
          </button>
          <button
            style={{ ...tabStyle, ...(activeTab === "unread" && activeTabStyle) }}
            onClick={() => setActiveTab("unread")}
          >
            Unread
          </button>
        </div>
        <div style={messagesStyle}>
          {filteredChats.map((chat) => (
            <div
              key={chat.id}
              style={messageStyle}
              onClick={() => setActiveChat(chat)}
            >
              <img
                src={chat.profilePic}
                alt="Profile"
                style={profilePicStyle}
              />
              <div>
                <span style={nameStyle}>{chat.name}</span>
                <span style={timeStyle}>{chat.time}</span>
                <p style={textStyle}>{chat.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {activeChat ? (
        <div style={chatContentStyle}>
          <div style={chatHeaderStyle}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={activeChat.profilePic}
                alt="Profile"
                style={{ ...profilePicStyle, marginRight: "10px" }}
              />
              <h3>{activeChat.name}</h3>
            </div>
            <div>
              <button
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "18px",
                  marginRight: "10px",
                }}
                onClick={() => handleCall(activeChat.name)}
              >
                📞
              </button>
              <button
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "18px",
                }}
              >
                ⋮
              </button>
            </div>
          </div>
          <div style={chatMessagesStyle}>
            {activeChat.conversation.map((msg, index) => (
              <div key={index} style={messageBubbleStyle(msg.type)}>
                {msg.text}
              </div>
            ))}
          </div>
          <div style={inputBarStyle}>
            <input
              type="text"
              placeholder="Type your message here..."
              style={inputStyle}
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button style={sendButtonStyle} onClick={handleSendMessage}>
              Send
            </button>
          </div>
        </div>
      ) : (
        <div style={chatContentStyle}>
          <div style={{ textAlign: "center", margin: "auto" }}>
            <h3>Select a chat to start messaging</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
