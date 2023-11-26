import React, {useState} from 'react'



export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpClick = () => {
        //console.log("Upper case was clicked."+text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Tex has bee converted to UpperCase!","success");
    }
    const handleLoClick = () => {
        //console.log("Upper case was clicked."+text)
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Tex has bee converted to LowerCase!","success");
    }
    const handleCapitalize = () => {
        //console.log("Upper case was clicked."+text)
        let newText = text.charAt(0).toUpperCase()+text.toLowerCase().slice(1);
        setText(newText);
        props.showAlert("Tex has bee Capitalized!","success");
    }
    
    const handleClear = () => {
        let clearText = "";
        setText(clearText);
        props.showAlert("Tex Cleared!","success");
    }
    const handleCopy = () => {
        console.log("Clicked on Copy Text.")
        let text_area = document.getElementById("myBox");
        text_area.select();
        navigator.clipboard.writeText(text_area.value)
        props.showAlert("Copied to Clipboard!","success");
    }
    
    const handleSpaces = () => {
        let newText = text.split(/[ ]+/);    
        setText(newText.join(" "));
        props.showAlert("Extra spaces has bee removed!","success");
    }

    const handleOnChange = (event) => {
       // console.log("Text area changed.")
        setText(event.target.value)
    }

    //text = "dfeggdsfh" // Worng way to change the state.
    //setText("sdefkjgk") //correct way to change the state,this is a function to update the text.
  return (
    <>
    <div className="container" style={{color:props.mode === 'dark'? 'white':'black'}}>
        <h2 >{props.heading}</h2>
    <div className="mb-3">
    <textarea className="form-control" id="myBox" value = {text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'? 'grey':'white', color:props.mode==='dark' ? 'white':'black'}}rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Case</button> 
    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lower Case</button>
    <button className="btn btn-primary mx-2" onClick={handleCapitalize}>Capitalize</button>
    <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
    <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary mx-2" onClick={handleSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-2" style={{color:props.mode === 'dark'? 'white':'black'}} >
        <h2>Your text summary</h2>
        <p>{text.trim() === "" ? 0: text.trim().split(" ").length} words, {text.length} characters</p>
        <p>{0.0109 * (text.trim() === "" ? 0: text.trim().split(" ").length)} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length >0 ? text:"Enter the text in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
