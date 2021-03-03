// Import of components
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";

// Imports for styling
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";

const App = () => {
  return (
    <StyledApp>
      <GlobalStyle />
      <Container>
        <Sidebar />
        <Chat />
      </Container>
    </StyledApp>
  );
};

// Styled Components
const StyledApp = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  background: #dadbd3;
`;

const Container = styled.div`
  height: 90vh;
  width: 90vw;
  display: flex;
  background: #ededed;
  box-shadow: -1px 4px 20px -6px rgba(0, 0, 0, 0.75);
`;

export default App;
