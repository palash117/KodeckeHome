import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import DocscannerPolicy from "./components/DocscannerPolicy";

function App() {
  return (
    <div style={styles.app}>
      <Router>
        <Switch>
          <Route path="/DOCSCANNERPOLICY">
            <DocscannerPolicy />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const styles = {
  app: {
    width: "100%",
    borderWidth: "1px",
    height: "100%",
  },
};
export default App;
