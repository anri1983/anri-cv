import './About.css'

function About () {
  return (
    <div className='about'>
      <div className='grey'>
        <div className='aboutMe'>
          <div className='aboutImage'></div>
          <div className='aboutText'>
            <h2>About Me</h2>
            <span className='yellowLn'></span>
            <p>
              Hello! I’m Front-end Developer based in Minsk, Belarus.
              </p>
              <p>Amet minim
              mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              Velit officia consequat duis enim velit mollit. Exercitation
              veniam consequat sunt nostrud amet
            </p>
          </div>
        </div>
      </div>
      {/* <p id='about' className="aboutForm">Hello I`m Andrew FE dev</p> */}
    </div>
  )
}

export default About
