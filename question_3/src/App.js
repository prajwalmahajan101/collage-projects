import './App.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box } from '@mui/system';
function App() {
  const [count,setCount] = useState(0);
  const increaseCounter = () =>{
    setCount(prevState => prevState+1);
  }
  const decreaseCounter = () =>{
    setCount(prevState => {
      if(prevState>0){
        prevState -=1; 
      }
      return prevState
    });
  }
  return (
    <div className="App">
     <Card sx={{ minWidth: 275,margin:"20px",marginTop:"100px",backgroundColor:"#77d488",paddingY:"100px"}}>
      <CardContent>
      <Typography sx={{ fontSize: 48,marginLeft:"40%"}} color="text.secondary" gutterBottom>
          {count} Count
        </Typography>
        <Box sx ={{marginLeft:"40%"}}>
        <Button variant="contained" onClick={increaseCounter} endIcon={<AddIcon />}>
          Increase
        </Button>
        <span style={{marginLeft:"20px"}}></span>
        <Button variant="contained" onClick={decreaseCounter} endIcon={<RemoveIcon />}>
          Decrease
        </Button>
        </Box>
      </CardContent>
      </Card>
    </div>
  );
}

export default App;
