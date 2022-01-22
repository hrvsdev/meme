import { useState } from "react";

export default function Header() {
  const [click, setClick] = useState(false);
  const handleClick = ()=>{
    setClick(!click)
  }
  let value = click ? "Harsh Vyas" : "The Vyas Foundation"
  
  return (
    <header className="header">
      <nav>
        <h1 className="right">Meme Generator</h1>
        <h4 className="left" onClick={handleClick}>{value}</h4>
      </nav>
    </header>
  );
}
