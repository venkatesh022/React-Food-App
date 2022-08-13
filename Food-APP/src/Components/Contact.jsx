import React from 'react';
import fooda from '../assets/fooda.jpeg';
import '../Styles/ContactStyle.css'

const Contact = () => {
  return (
    <React.Fragment>
        <div className="contact">
            <div className="leftSide" style={{backgroundImage : `url(${fooda})`}}>
                
            </div>
            <div className="rightSide">
                <h1>Contact Us</h1>
                <form action="" id='contact-form' method='POST'>
                    <label htmlFor="">User Name :</label>
                    <input type="text" name="name" id="" placeholder="User name" />
                    <label htmlFor="">Email :</label>
                    <input type="email" name="email" id="" placeholder='Email' />
                    <label htmlFor="">Message</label>
                    <textarea name="message" id="" placeholder='Enter your message' cols="0" rows="6"></textarea>
                    <button type='submit'>Send Message</button>
                </form>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Contact