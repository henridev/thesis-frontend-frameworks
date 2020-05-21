import React from "react";
import "./App.css";
import Profile from "./pages/Profile";
import Navbar from "./components/global/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Todo from "./pages/Todo";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Profile />
        </Route>
        <Route path="/chat">
          <Chat />
        </Route>
        <Route path="/todo">
          <Todo />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
