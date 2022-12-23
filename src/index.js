import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from "styled-components";

//import { Header, Main, Prices } from "./components";
import { Header, Main } from "./components";
import "./index.css";

const App = () => {
  return (
    <AppWrapper className="App">
      <Header />
      <Main />
    </AppWrapper>
  );
};

//    <Main />
// <Prices /> 

const AppWrapper = styled.div({
  height: "100vh",
  background: "linear-gradient(150deg, #87CEFA, #FFF0F5)", //#B0C4DE, D9E4F5 -cиниват, F6F0C4- беловат
});

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
