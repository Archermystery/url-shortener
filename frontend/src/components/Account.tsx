import "./Account.css"
function Account() {
  let img_url = "undefined.png"
  let isLogin = false
  if (isLogin) {
    return (
      <div className="dropdown">
        <img src={img_url} className="dropbtn" height="50" />
        <div className="dropdown-content">
          <a href="urls">My links</a>
          <a href="out" style={{ color: "#ba0303" }}>Sing out</a>
        </div>
      </div>
    )
  } else {
    return (
      <div className="unlogged">
        <a href="singup" className="singup">
          Sing up
        </a>
        <a href="singin" className="singin">
          Sing in
        </a>
      </div>
    )
  }
}
export default Account
