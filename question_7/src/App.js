import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import data from "./data.json"; 
import Carousel from "./components/Carousel";
import NavBar from './components/NavBar';
import Item from "./components/Item";
import Footer from "./components/Footer"
// const data = []
function App() {
  return (

    <div className="App">
      <NavBar />
      <div className='container mt-3' >
        <div className='row mt-3 FuS'>
          <div className='col-md-12 mt-3'>
            <Carousel className={"dark"} />
            </div>
            <div className='col-md-12 mt-3 d-flex flex-row justify-content-around flex-wrap'>
            {data.map((item) => <Item item={item}/>)}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
