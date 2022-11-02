
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
function App() {
  return (
    <div className="App">
      <NavBar />
    <Routes>
      <Route exact path="/" element={<Home/ >}></Route>
      <Route exact path="/about_us" element={<AboutUs/>}></Route>
      <Route exact path="/contact_us" element={<ContactUs/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
