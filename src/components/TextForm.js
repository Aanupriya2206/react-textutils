import React,{useState} from 'react'

export default function TextForm(props) {

  const handleUpperClick=()=>{
    let newText=text.toUpperCase();
    setText(newText)
  }

  const handleLowerClick=()=>{
    let newText=text.toLowerCase();
    setText(newText)
  }

  const handleClearClick=()=>{
    let newText=('');
    setText(newText)
  }

  const handleOnChange=(event)=>{
    setText(event.target.value)
  }

  const handleCopy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  const [text,setText]=useState('');
  return (
    <>
    <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpperClick}>UPPERCASE</button>
        <button className="btn btn-success mx-2" onClick={handleLowerClick}>LOWERCASE</button>
        <button className="btn btn-secondary mx-2" onClick={handleClearClick}>CLEAR</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>COPY TEXT</button>
        <button className="btn btn-success mx-2" onClick={handleExtraSpaces}>REMOVE EXTRA SPACES</button>
    </div>
    <div className="container my-2">
      <h3>Text Summary</h3>
      <p>no.of words={text.split(" ").length} and no.of character={text.length}</p>
      <p>no. of whitespaces={text.split(' ').length-1}</p>
      <p>Text can be read in {0.008*text.split(" ").length} minutes</p>
      <h3>Preview:</h3>
      <p>{text}</p>
    </div>
    </>
  )
}
