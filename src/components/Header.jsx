import React from 'react'

const Header = ({handleToggleMode}) => {
  return (
    <div className='header'>
        <h1>Notas</h1>
        <button 
            className='save' 
            onClick={
                () => handleToggleMode((previusDarkMode) => !previusDarkMode)
                }>
                    Cambiar de modo
        </button>
    </div>
  )
}

export default Header;