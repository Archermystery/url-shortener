import ListCommponent from "./ListComponent";
import "./LinkList.css"
function LinkList() {
  return (
    <table>
      <tbody>
        <tr className="header">
          <th>
            Short link
          </th>
          <th>
            Link
          </th>
          <th>
            Transitions
          </th>
          <th>
            Open
            statistics
          </th>
        </tr>
        <ListCommponent sortUrl="https://url.com/asdf" url="https://www.youtube.com/watch?v=_S7WEVLbQ-Y" transitions={10} openStatistics={true} />
      </tbody>
    </table>
  )
}
export default LinkList;
