import "./Sing.css"
function SingUp() {
  return (
    <form className="sing">
      <h2>Sing up</h2>
      <label>Email</label>
      <input type="email" className="text-input" />
      <label>Passwold</label>
      <input type="password" className="text-input" />
      <label>Repeat the password</label>
      <input type="password" className="text-input" />
      <a href="singin">Already have an account?</a>
      <div className="center">
        <input type="submit" value={"Sing up"} />
      </div>
    </form>

  )
}
export default SingUp
