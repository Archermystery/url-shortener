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
        <a href="singin" className="in">
          Sing in
        </a>
        <a href="singup" className="up">
          Sing up
        </a>


      </div>
    )
  }
}
export default Account
