import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

// import {
//   BrowserRouter as Router,
//   Route,
//   //Link,
//   //BrowserRouter,
//   Routes
// } from "react-router-dom";



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
      document.body.style.backgroundColor = '#394252';
      showAlert("Dark Mode has been Enabled!","success");
      document.title = "TextAnalyzer - Dark Mode";
      // setInterval(() => {
      //   document.title = "TextAnalyzer - Amzing tool";
      // }, 3000);
      // setInterval(() => {
      //   document.title = "Welcome to TextAnalyzer!";
      // }, 1500);
    }
    else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been Enabled!","success");
        document.title = "TextAnalyzer - Light Mode";
        
      }
    }
  return (
    <>
    
    {/* <Router> */}
    <Navbar title="TextAnalyzer" aboutText="About TextAnalyzer" mode={mode} toggleMode={toggleMode}/> 
    {/* <Navbar/> */}
    <Alert alert={alert}/>
    <div className="container my-3">
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          {/* <Routes> */}
            {/* <Route exact path="/about" element= {<About />}></Route> */}
            {/* <Route exact path="/" element= { */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze:" mode={mode} />
            {/* }></Route> */}
          {/* </Routes> */}
    </div>
    {/* </Router> */}
    
    </>  
  );
}

export default App;


