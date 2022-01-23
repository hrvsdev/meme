import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import memes from "./components/memesData";
import { useState } from "react";

export default function App() {
  const [imgUrl, setImgUrl] = useState(false);
  const [text, setText] = useState({ topText: "", bottomText: "" });

  const handleClick = () => {
    setImgUrl(memes[Math.floor(Math.random() * memes.length)].url);
  };

  const textChange = (e) => {
    setText((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Header />
      <Main
        imgUrl={imgUrl}
        text={text}
        textChange={textChange}
        handleClick={handleClick}
      />
    </>
  );
}
