
import './App.css';
import React, {useState, useRef } from 'react'
// import { marked } from 'marked'; 
function App() {
  const [text, setText] = useState("")
  const html = useRef("")
  function handleTextChange(event){
    const input =event.target.value 
    setText(input)
    html.current = window.marked.parse(input)

  }
  return (
    <div className="App" >
      <textarea id="editor" onChange={handleTextChange} value={text} />
      <div id="preview" dangerouslySetInnerHTML={{ __html: html.current }}/>
    </div>
  );
}

export default App;
