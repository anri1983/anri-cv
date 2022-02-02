import './Contact.css'

function Contact () {
  return (
    <div className='contactMain'>
      <div className='contactContainer'>
        <h2>Contact me</h2>
        <div className='yellowSt'></div>
        <p>
          If you have a job offer or would like to ask me a question, please
          fill out this form
        </p>
        <form className='inputForm'>
          <div className='inputName'>
            <input></input>
            <input></input>
          </div>
          <input className='inputSubject'></input>
          <input id='inputMessage'></input>
          <button className='linkMessage'>Send message</button>
        </form>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default Contact
