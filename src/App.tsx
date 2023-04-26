import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { UserContextProvider } from "./contexts/UserContext";
import Router from "./Router";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Header />
        <Router />
        <Footer />
      </UserContextProvider>
    </div>
  );
}

export default App;
