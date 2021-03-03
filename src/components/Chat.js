// Imports of components
import { Avatar, IconButton } from "@material-ui/core";
import ChatMessage from "./ChatMessage";

// Imports of icons
import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";

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
      <ChatFooter>
        <InsertEmoticonIcon />
        <form>
          <input type="text" placeholder="Type a message" />
          <button type="submit">Send</button>
        </form>
        <MicIcon />
      </ChatFooter>
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

const ChatFooter = styled.div`
  height: 62px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0 10px;
  border-top: 1px solid lightgray;
  form {
    flex: 1;
    display: flex;
    input {
      flex: 1;
      border-radius: 30px;
      margin: 10px;
      padding: 10px;
      border: none;
      outline-width: 0;
    }
    button {
      display: none;
    }
  }
  .MuiSvgIcon-root {
    color: grey;
  }
`;

export default Chat;
