import "./Contactform.css";
function contactform() {
  return (
    <div className="form-container">
      <h1>Send a message to us!</h1>

      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Subject" />
        <textarea placeholder="Message" rows="4"></textarea>
        <br />
        <button>Send</button>
      </form>
    </div>
  );
}
export default contactform;
