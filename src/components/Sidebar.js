// Imports for styling
import styled from "styled-components";

const Sidebar = () => {
  return (
    <StyledSidebar>
      <h1>Sidebar</h1>
    </StyledSidebar>
  );
};

// Styled Components
const StyledSidebar = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0.35;
`;

export default Sidebar;
