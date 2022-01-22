import { useState } from "react";

export default function Header() {
  const [click, setClick] = useState(true);
  const handleClick = () => {
    setClick((prev) => !prev);
  };

  return (
    <header className="header">
      <nav>
        <h1 className="right">Meme Generator</h1>
        <h4 className="left" onClick={handleClick}>
          {click ? "The Vyas Foundation" : "Harsh Vyas"}
        </h4>
      </nav>
    </header>
  );
}
