import './App.css';
import StudentData from "./data.json";
import Student from './Student';
function App() {
 
  return (
    <div className="App">
      <h1>Student List</h1>
      <div style={{margin:"20px"}}>
        {StudentData.map((el)=><Student key={el.regNo} data={el}/>)}
      </div>
    </div>
  );
}

export default App;
