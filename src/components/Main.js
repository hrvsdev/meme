export default function Main(props) {
  return (
    <main>
      <div className="wrapper">
        <div className="input-box">
          <input
            name="topText"
            className="top-input textInput"
            placeholder="Enter top text"
            value={props.text.topText}
            onChange={props.textChange}
          />
          <input
            name="bottomText"
            className="bottom-input textInput"
            placeholder="Enter bottom text"
            value={props.text.bottomText}
            onChange={props.textChange}
          />
        </div>
        <div className="button-box">
          <button onClick={props.handleClick}>Generate New Random Meme</button>
        </div>
      </div>
      {props.imgUrl && (
        <div className="image-box">
          <h3 className="top">{props.text.topText.toUpperCase()}</h3>
          <h3 className="bottom">{props.text.bottomText.toUpperCase()}</h3>
          <img src={props.imgUrl} alt="" />
        </div>
      )}
    </main>
  );
}
