// Import of components
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";

// Imports for styling
import GlobalStyle from "./GlobalStyle";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Sidebar />
      <Chat />
    </div>
  );
};

export default App;
