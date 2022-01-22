export default function Main(props) {
  return (
    <main>
      <div className="wrapper">
        <div className="input-box">
          <input
            type="text"
            className="top-input textInput"
            placeholder="Enter top text"
            value={props.topText}
            onChange={props.topChange}
          />
          <input
            type="text"
            className="bottom-input textInput"
            placeholder="Enter bottom text"
            value={props.bottomText}
            onChange={props.bottomChange}
          />
        </div>
        <div className="button-box">
          <button onClick={props.handleClick}>Generate New Random Meme</button>
        </div>
      </div>
      {props.imgUrl && (
        <div className="image-box">
          <h3 className="top">{props.topText.toUpperCase()}</h3>
          <h3 className="bottom">{props.bottomText.toUpperCase()}</h3>
          <img src={props.imgUrl} alt="" />
        </div>
      )}
    </main>
  );
}
