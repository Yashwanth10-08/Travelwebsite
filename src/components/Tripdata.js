import "./Trip.css";
function Tripdata(props) {
  return (
    <div className="t-card">
      <div className="t-image">
        <img src={props.image} alt="" />
      </div>
      <h4>{props.heading}</h4>
      <p style={{ fontweight: "300" }}>{props.text}</p>
    </div>
  );
}

export default Tripdata;
