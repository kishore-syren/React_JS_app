import React, {useState} from 'react'



export default function TextForm(props) {
    const [text, setText] = useState("Enter text here");
    const handleUpClick = () => {
        //console.log("Upper case was clicked."+text)
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleOnChange = (event) => {
       // console.log("Text area changed.")
        setText(event.target.value)
    }

    //text = "dfeggdsfh" // Worng way to change the state.
    //setText("sdefkjgk") //correct way to change the state,this is a function to update the text.
  return (
    <div>
        <h2>{props.heading}</h2>
    <div className="mb-3">
    <textarea className="form-control" id="myBox" value = {text} onChange={handleOnChange} rows="8"></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upper Case</button>
    </div>
  )
}
