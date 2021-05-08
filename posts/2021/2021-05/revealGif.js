import React, { useState } from "react"

export const RevealGif = () => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <>
      <button onClick={() => setIsVisible(!isVisible)}>This is me now</button>
      <div>
        {isVisible ? (
          <img src="https://media.giphy.com/media/vqJAJMr4klojK/giphy.gif"></img>
        ) : null}
      </div>
    </>
  )
}
