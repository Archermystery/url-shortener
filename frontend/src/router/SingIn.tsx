import "./Sing.css"
function SingIn() {
  return (
    <form className="sing">
      <h2>Sing in</h2>
      <label>Email</label>
      <input type="email" className="text-input" />
      <label>Passwold</label>
      <input type="password" className="text-input" />
      <a href="fogot">Forgot your password?</a>
      <div className="center">
        <input type="submit" value={"Sing in"} />
      </div>
    </form>
  )
}
export default SingIn
