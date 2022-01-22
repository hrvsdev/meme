import memes from "./memesData";
import {useState} from 'react'

export default function Main() {
  // We should pass callback function inside useState setter, if original and previous State is required to perform a function
  const [imgUrl, setImgUrl] = useState(false);
  function handleClick(){
    setImgUrl(memes[Math.floor(Math.random() * memes.length)].url)
  }
  return (
    <main>
      <div className="wrapper">
        <div className="input-box">
          <input
            type="text"
            className="top textInput"
            placeholder="Enter top text"
          />
          <input
            type="text"
            className="bottom textInput"
            placeholder="Enter bottom text"
          />
        </div>
        <div className="button-box">
          <button onClick={handleClick}>Generate New Random Meme</button>
        </div>
      </div>
      {imgUrl && <div className="image-box">
        <img src={imgUrl} alt="" />
      </div>}
    </main>
  );
}
