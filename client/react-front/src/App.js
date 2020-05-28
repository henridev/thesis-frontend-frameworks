import React, { useState } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Todo from "./pages/Todo";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Authorization from "./pages/Authorization";

function App() {
  const [user, setUser] = useState(null);

  function handleLogout() {
    setUser(null);
  }

  return (
    <div>
      <Navigation user={user}>
        {user && (
          <button
            className="btn btn-primary my-2 my-sm-0"
            onClick={handleLogout}
          >
            <Link
              className="link nav-link"
              style={{ color: "white" }}
              to="/authorization"
            >
              logout
            </Link>
          </button>
        )}
      </Navigation>
      <div className="container-fluid">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/todos"
            render={() => <Todo username={user ? user.name : "stranger"} />}
          />
          <Route
            path="/authorization"
            render={() => <Authorization setUser={setUser} />}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
