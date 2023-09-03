import React, { useState } from "react"
import "./Link.css"
import "./CreateLink.css"

function CreateLink() {
  const [isRandom, setRandom] = useState(false)
  const [url, setUrl] = useState('')
  const [shortUrl, setShort] = useState('')
  const [isOpen, setOpen] = useState(false)
  const isLogin = false
  const doClassName = () => {
    if (isRandom) {
      return "opacity"
    } else {
      return ""
    }
  }
  const sendForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }
  return (
    <form className="main" onSubmit={sendForm}>
      <h2>Create Link</h2>
      <label>link</label>
      <input className="url" type="url" value={url} onChange={(e) => {
        setUrl(e.target.value)
      }} />
      <label>Short link</label>
      <div>
        <span id="url" className={doClassName()}>https://url.com/</span>
        <input type="text" aria-describedby="url" className="span" readOnly={isRandom} value={shortUrl} onChange={(e) => { setShort(e.target.value) }} />
      </div>
      <div>
        <label>Random Link</label>
        <input type="checkbox" onClick={() => (setRandom(!isRandom))} />
        <label>Open statistics</label>
        <input type="checkbox" onClick={() => setOpen(!isOpen)} />
      </div>
      <ul className="error">
      </ul>
      <div className="submit">
        <input type="submit" value="Create" readOnly={!isLogin} />
      </div>
    </form>
  )
}
export default CreateLink
