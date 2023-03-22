import "./err.css";
function Err(props) {
  return (
    <div className="err">
      <div>{props.title}</div>
      <p>{props.message}</p>
      <button onClick={props.onConfirm}>Ok</button>
    </div>
  );
}
export default Err;
