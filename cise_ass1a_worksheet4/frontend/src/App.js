import React, { Component } from "react";
import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom";
import Home from "./pages/Home";
import SEPractice from "./pages/SE-Practice";
import SubmitArticle from "./pages/Submit-Article";
import NotFoundPage from "./pages/404";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Software Practice Empirical Evidence Database (SPEED)</h1>
          <ul className="header">
            <li>
              <Link exact to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/SEPractice">Select the Practice</Link>
            </li>
            <li>
              <Link to="/SubmitArticle">Submit an Article</Link>
            </li>
          </ul>
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/SEPractice" element={<SEPractice />} />
              <Route path="/SubmitArticle" element={<SubmitArticle />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
