import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/darkly/bootstrap.min.css";

import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Postlist from "./components/Postlist";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Postlist}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/register" exact component={Register}></Route>
      </Switch>
    </div>
  );
}

export default App;
