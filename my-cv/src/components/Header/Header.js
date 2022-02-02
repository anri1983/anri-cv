import './Header.css'

function Header () {
  return (
    <div className='container'>
      <div className='headerName'>
        <div className='headerContact'>
          <h1>Andrei Kazbanov</h1>
          <h3>Front-end Developer</h3>
          <div className='headerLinkContact'>
            <a>Contact me</a>
          </div>
          <span className='yellowLine'></span>
        </div>
      </div>
      <div className='headerBounce'>
          <div className='bigFrame'></div>
          <div className='smallFrame'></div>
      </div>
    </div>
  )
}

export default Header
