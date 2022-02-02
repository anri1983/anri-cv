import './Footer.css'

function Footer () {
  return (
    <div className='mainGrey'>
      <div className='footerContainer'>
        <div className='information'>
          <div className='footerIcons'>
            <div className='iconBehans'>
              <a></a>
            </div>
            <div className='iconLinkidin'>
            <a></a>
            </div>
            <div className='iconVK'>
            <a></a>
            </div>
            <div className='iconFacebook'>
            <a></a>
            </div>
          </div>
          <div className='contactData'>
            <div>
              <p>+375 (29) 173-43-33</p>
            </div>
            <div>
              <p>31101983@rambler.ru</p>
            </div>
          </div>
        </div>
        <div className='designInfo'>
          <p>© 2022. All right reserved.</p>
          <p>Design by Marina Tolkachyova</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
