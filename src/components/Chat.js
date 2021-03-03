// Imports for styling
import styled from "styled-components";

const Chat = () => {
  return (
    <StyledChat>
      <h1>Chat</h1>
    </StyledChat>
  );
};

// Styled Components
const StyledChat = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.65;
`;

export default Chat;
