import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./Contact";
import Page from "./Page";

import Home from "./Home";

import Mycontact from "./Mycontact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="mycontact" element={<Mycontact />}></Route>
      

          
          <Route path="/page" element={<Page />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
