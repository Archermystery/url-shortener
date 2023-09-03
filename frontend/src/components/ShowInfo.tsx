import "./ShowInfo.css";
import "./Link.css";
function ShowInfo() {
  return (
    <div className="main">
      <h2>Link Info</h2>
      <label>link</label>
      <input type="url" className="info" readOnly={true} />
      <label>Short link</label>
      <input type="text" className="info" readOnly={true} />
      <div>
        <label>Open statistics</label>
        <input type="checkbox" className="info" checked={true} />
      </div>
    </div>
  );
}
export default ShowInfo;
