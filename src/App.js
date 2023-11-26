
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

function App() {
  const [mode, setMode] = useState('light') // Whether dark mode enabled or not. 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#394252'
      showAlert("Dark Mode has been Enabled!","success")
    }
    else{
        setMode('light');
        document.body.style.backgroundColor = 'white'
        showAlert("Light mode has been Enabled!","success")
      }
    }
  return (
    <>
    <Navbar title="TextAnalyzer" aboutText="About TextAnalyzer" mode={mode} toggleMode={toggleMode}/> 
    {/* <Navbar/> */}
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading="Enter the text to analyze:" mode={mode} />
    {/* <About/> */}
    </div>
    
    </>  
  );
}

export default App;


