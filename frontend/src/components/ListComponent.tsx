import "./ListComponent.css"
interface Pops {
  sortUrl: string;
  url: string;
  transitions: number;
  openStatistics: boolean
}
function ListCommponent({ sortUrl, url, transitions, openStatistics }: Pops) {
  return (
    <tr className="element">
      <td className="right">
        {sortUrl}
      </td>
      <td className="right">
        <div className="scroll">{url}</div>
      </td>
      <td className="right center">
        {transitions}
      </td>
      <td className="center" style={{ borderLeft: "10px solid #727171" }}>
        <input type="checkbox" checked={openStatistics} />
      </td>
    </tr>
  )
}
export default ListCommponent
