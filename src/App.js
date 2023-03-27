
import './App.css';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function App() {
  return (
    <div className="App">
     <ReactMarkdown>**A bold text**</ReactMarkdown>
<ReactMarkdown>*An italic text*</ReactMarkdown>
<ReactMarkdown>__A strong text__</ReactMarkdown>
<ReactMarkdown>1. An ordered list text</ReactMarkdown>
<ReactMarkdown>- An unordered list text</ReactMarkdown>
<ReactMarkdown> ~~A strikethrough text~~ </ReactMarkdown>
<ReactMarkdown remarkPlugins={[remarkGfm]}>
    ~~A strikethrough text~~
</ReactMarkdown>
    </div>
  );
}

export default App;
