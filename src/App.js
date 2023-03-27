
import './App.css';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { useState } from 'react';
function App() {
  const defaultText = `
# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:
### KColjsdjf;aldjasdj
Heres some code, \` <div></div>\`, between 2 backticks.

~~~javascript
// this is multi-line code:kj

function anotherExample(firstLine, lastLine) {
  if (firstLine == '~~~
  ' && lastLine == '~~~
  ') {
    return multiLineCode;
  }
}
~~~


You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

  `;
  const [inputText, setInputText] = useState(defaultText)

function handleInputChange(event){
  setInputText(event.target.value)
}
  return (
    <div className="App">
      <div className='editor'>
        <header>
          <i class="fa-brands fa-markdown"></i>
          Editor
          <i class="fa fa-arrows-alt"></i></header>
        <textarea onChange={handleInputChange}value={inputText} id="editor"/>
      </div>
      <div className='preview' >
        <header>
          <i class="fa-brands fa-markdown"></i>
          Preview
          <i class="fa fa-arrows-alt"></i></header>
          <div className='prev-boy' id="preview">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            children={inputText}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, "")}
                    // theme
                    language={match[1]}
                    PreTag='section' // parent tag
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          /></div>
</div>
    </div>
  );
}

export default App;
