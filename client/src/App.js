import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import GroupForms from "./components/groupForms/GroupForms"
import HomePage from "./pages/HomePage/HomePage";
import MainGroupPage from "./pages/main-group-page/MainGroupPage";


function App() {
  return (
  <Router>
    <>
    <HomePage/>
    <Route exact path="/" component={GroupForms}></Route>
    <Route exact path="/:_id/:name" component={MainGroupPage}
    ></Route>
    </>
  </Router>
  )
}

export default App;

