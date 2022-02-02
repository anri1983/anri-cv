import './Nav.css'

function Nav () {
  return (
    <div className='navSize'>
        <div className='whiteBlock'></div>
      <div className='navBlack'>
        <ul className='myNav'>
          <li data-to-scrollspy-id='skills'>
            <a to='#'>About Me</a>
          </li>
          <li data-to-scrollspy-id='about'>
            <a to='#'>My Skills</a>
          </li>
          <li data-to-scrollspy-id='contact'>
            <a to='#'>Portfolio</a>
          </li>
          <li data-to-scrollspy-id='contact'>
            <a to='#'>Contacts</a>
          </li>
        </ul>
        <div className='langSwitch'>
          <a>En</a> | <a>Ru</a>
        </div>
      </div>
    </div>
  )
}

export default Nav
