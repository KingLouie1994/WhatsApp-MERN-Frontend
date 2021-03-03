// Imports for styling
import styled from "styled-components";

const ChatMessage = () => {
  return (
    <ChatBodyMessage>
      <ChatBodyMessageContainerName>Luis</ChatBodyMessageContainerName>
      This is a message
      <ChatBodyMessageContainerTimestamp>
        {new Date().toUTCString()}
      </ChatBodyMessageContainerTimestamp>
    </ChatBodyMessage>
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
