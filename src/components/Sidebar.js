// Imports of components
import { Avatar, IconButton } from "@material-ui/core";
import SidebarChat from "./SidebarChat";

// Imports of icons
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";

// Imports for styling
import styled from "styled-components";

const Sidebar = () => {
  return (
    <StyledSidebar>
      <SidebarHeader>
        <Avatar src="https://avatars.githubusercontent.com/u/53607532?s=400&u=4198dc59a06dea2c75aa80b3ed88cbaa2bfc8715&v=4" />
        <SidebarHeaderRight>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </SidebarHeaderRight>
      </SidebarHeader>
      <SidebarSearch>
        <SidebarSearchContainer>
          <SearchIcon />
          <input type="text" placeholder="Search or start new chat" />
        </SidebarSearchContainer>
      </SidebarSearch>
      <SidebarChats>
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </SidebarChats>
    </StyledSidebar>
  );
};

// Styled Components
const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.35;
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-right: 1px solid lightgray;
`;

const SidebarHeaderRight = styled.div`
  min-width: 10vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 2vw;
  .MuiSvgIcon-root {
    font-size: 24px !important;
  }
`;

const SidebarSearch = styled.div`
  height: 39px;
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #f6f6f6;
`;

const SidebarSearchContainer = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: white;
  border-radius: 20px;
  .MuiSvgIcon-root {
    color: grey;
  }
  input {
    width: 100%;
    border: none;
    margin-left: 10px;
    outline-width: 0;
  }
`;

const SidebarChats = styled.div``;

export default Sidebar;
