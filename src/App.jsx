import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Navigation from "./Components/Navigation";
import Create from "./Pages/Create";
import BlogDetails from "./Pages/BlogDetails";
import ErrorPage from "./Pages/404page";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="*" element={<ErrorPage />}></Route>
          </Routes>
          
        </div>
      </div>
    </Router>
  );
}

export default App;
