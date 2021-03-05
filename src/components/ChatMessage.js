// Imports from react
import React from "react";

// Imports for styling
import styled from "styled-components";

const ChatMessage = ({ name, message, timestamp, received }) => {
  return (
    <React.Fragment>
      {received ? (
        <ChatBodyMessageReceived>
          <ChatBodyMessageContainerName>{name}</ChatBodyMessageContainerName>
          {message}
          <ChatBodyMessageContainerTimestamp>
            {timestamp}
          </ChatBodyMessageContainerTimestamp>
        </ChatBodyMessageReceived>
      ) : (
        <ChatBodyMessage>
          <ChatBodyMessageContainerName>{name}</ChatBodyMessageContainerName>
          {message}
          <ChatBodyMessageContainerTimestamp>
            {timestamp}
          </ChatBodyMessageContainerTimestamp>
        </ChatBodyMessage>
      )}
    </React.Fragment>
  );
};

// Styled Components
const ChatBodyMessage = styled.p`
  position: relative;
  width: fit-content;
  padding: 10px;
  margin: 0 0 30px auto;
  font-size: 16px;
  background-color: #dcf8c6;
  border-radius: 10px;
`;

const ChatBodyMessageReceived = styled.p`
  position: relative;
  width: fit-content;
  padding: 10px;
  margin-bottom: 30px;
  font-size: 16px;
  background-color: white;
  border-radius: 10px;
`;

const ChatBodyMessageContainerName = styled.span`
  position: absolute;
  top: -15px;
  font-weight: 800;
  font-size: small;
`;

const ChatBodyMessageContainerTimestamp = styled.span`
  margin-left: 10px;
  font-size: x-small;
`;

export default ChatMessage;
