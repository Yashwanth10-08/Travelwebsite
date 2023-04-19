import "./Hero.css";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="bgImg" src={props.bgImg} />
        <div className="herotext">
          <h2>{props.title}</h2>
          <p> {props.text}</p> <br />
          <a href={props.url} className={props.buttonClass}>
            {props.buttontext}
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
