import React, {useState} from 'react'



export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpClick = () => {
        //console.log("Upper case was clicked."+text)
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () => {
        //console.log("Upper case was clicked."+text)
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleCapitalize = () => {
        //console.log("Upper case was clicked."+text)
        let newText = text.charAt(0).toUpperCase()+text.slice(1);
        setText(newText)
    }

    const handleOnChange = (event) => {
       // console.log("Text area changed.")
        setText(event.target.value)
    }

    //text = "dfeggdsfh" // Worng way to change the state.
    //setText("sdefkjgk") //correct way to change the state,this is a function to update the text.
  return (
    <>
    <div className="container">
        <h2>{props.heading}</h2>
    <div className="mb-3">
    <textarea className="form-control" id="myBox" value = {text} onChange={handleOnChange} rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Case</button> 
    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lower Case</button>
    <button className="btn btn-primary mx-2" onClick={handleCapitalize}>Capitalize</button>
    </div>
    <div className="container my-2">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.0109 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
