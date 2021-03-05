// Imports from react
import { useState, useEffect } from "react";

// Import pusher for real time chat
import Pusher from "pusher-js";

// Import axios to handle data
import axios from "axios";

// Import of components
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";

// Imports for styling
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";

const App = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/messages/all")
      .then((response) => {
        setMessages(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const pusher = new Pusher(process.env.REACT_APP_PUSHER_KEY, {
      cluster: process.env.REACT_APP_PUSHER_CLUSTER,
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessage) => {
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  return (
    <StyledApp>
      <GlobalStyle />
      <Container>
        <Sidebar />
        <Chat messages={messages} />
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
