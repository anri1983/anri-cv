import './Portfolio.css'

function Portfolio () {
  return (
    <div className='portfolioMain'>
      <div className='greyBlock'>
        <div className='portfolioContainer'>
          <div className='imageCover'>
            <div className='imageBlock'></div>
          </div>

          <div className='infoBlock'>
            <h2>Portfolio</h2>
            <div className='yellowStripe'></div>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam
              consequat sunt nostrud amet
            </p>
            <div>
              <div className='linkSee'>See more</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
