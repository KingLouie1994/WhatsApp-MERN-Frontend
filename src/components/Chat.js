// Imports of components
import { Avatar, IconButton } from "@material-ui/core";
import ChatMessage from "./ChatMessage";

// Imports of icons
import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";

// Imports for styling
import styled from "styled-components";

const Chat = () => {
  return (
    <StyledChat>
      <ChatHeader>
        <Avatar />
        <ChatHeaderInfo>
          <ChatHeaderInfoName>Room name</ChatHeaderInfoName>
          <ChatHeaderInfoDate>Last seen at ...</ChatHeaderInfoDate>
        </ChatHeaderInfo>
        <ChatHeaderRight>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </ChatHeaderRight>
      </ChatHeader>
      <ChatBody>
        <ChatMessage />
      </ChatBody>
    </StyledChat>
  );
};

// Styled Components
const StyledChat = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.65;
`;

const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;

const ChatHeaderInfo = styled.div`
  flex: 1;
  padding-left: 20px;
`;

const ChatHeaderInfoName = styled.p`
  margin-bottom: 3px;
  font-size: 20px;
  font-weight: bold;
  color: black;
`;

const ChatHeaderInfoDate = styled.p`
  color: grey;
`;

const ChatHeaderRight = styled.div``;

const ChatBody = styled.div`
  flex: 1;
  padding: 30px;
  overflow-y: scroll;
  background-image: url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png");
  background-repeat: repeat;
  background-position: center;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

export default Chat;
