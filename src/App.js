import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import memes from "./components/memesData";
import { useState } from "react";

export default function App() {
  const [imgUrl, setImgUrl] = useState(false);
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const handleClick = () => {
    setImgUrl(memes[Math.floor(Math.random() * memes.length)].url);
  };

  const topChange = (e) => {
    setTopText(e.target.value);
  };

  function bottomChange(e) {
    setBottomText(e.target.value);
  }
  return (
    <>
    <Header/>
    <Main
      imgUrl={imgUrl}
      topText={topText}
      bottomText={bottomText}
      handleClick={handleClick}
      topChange={topChange}
      bottomChange={bottomChange}
    />
    </>
  );
}
