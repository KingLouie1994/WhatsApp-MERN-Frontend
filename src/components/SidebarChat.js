// Imports of components
import { Avatar } from "@material-ui/core";

// Imports for styling
import styled from "styled-components";

const SidebarChat = () => {
  return (
    <StyledSidebarChat>
      <Avatar />
      <SidebarChatInfo>
        <SidebarChatInfoName>Room name</SidebarChatInfoName>
        <p>This is the last message</p>
      </SidebarChatInfo>
    </StyledSidebarChat>
  );
};

// Styled Components
const StyledSidebarChat = styled.div`
  display: flex;
  padding: 20px;
  border-bottom: 1px solid #f6f6f6;
  cursor: pointer;
  :hover {
    background-color: #ebebeb;
  }
`;

const SidebarChatInfo = styled.div`
  margin-left: 15px;
`;

const SidebarChatInfoName = styled.p`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 8px;
`;

export default SidebarChat;
