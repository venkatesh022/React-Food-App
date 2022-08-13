import React from 'react'
import '../Styles/Footer.css'

const Footer = () => {
  return (
    <React.Fragment>
        <div className="footer">
            <div className="socialMedia">
                {/* <h1>lorem ipsum dolor</h1> */}
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-linkedin"></i>
            </div>
            <p>&copy; 2022 Indian Food.Inc</p>
        </div>
    </React.Fragment>
  )
}

export default Footer