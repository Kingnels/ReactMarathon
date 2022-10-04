import React from 'react'
function Button({text, icon, color, textcolor}) {
  return (
    <div className='btn-container'>
        <button style={{backgroundColor:color, color: textcolor}} className='btn'>{icon} {text} </button>
    </div>
  )
}
export default Button
