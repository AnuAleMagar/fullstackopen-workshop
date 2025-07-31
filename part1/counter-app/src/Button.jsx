import React from 'react'

function Button({handleClick,content}) {
  return (
    <div>
        <button onClick={handleClick}>{content}</button>
    </div>
  )
}

export default Button