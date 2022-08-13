import React from 'react';
import banner from '../assets/food.jpeg';
import '../Styles/Home.css'

const Home = () => {
  return (
    <React.Fragment>
        <div className="home" style={{backgroundImage: `url(${banner}`}}>
            <div className="headerContainer">
                <h1>Indian Food</h1>
                <p>Taste the Indian recipe</p>
                <button>Order Now</button>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Home