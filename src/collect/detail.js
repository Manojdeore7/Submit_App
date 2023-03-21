import "./detail.css";

function ElementUser(props) {
  let str = ` ${props.name} ( max age is ${props.age}  ) `;
  console.log(str);
  return (
    <div className="detail">
      <div>{str}</div>
    </div>
  );
}
export default ElementUser;
