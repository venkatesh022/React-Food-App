import React from "react";
import "../Styles/About.css";
import masala from "../assets/masala.jpg";

const About = () => {
  return (
    <React.Fragment>
      <div className="about">
        <div
          className="aboutTop"
          style={{ backgroundImage: `url(${masala})` }}
        ></div>
        <div className="aboutBottom">
          <h1>About Us</h1>
          <p>
            India food like its culture is varied and is quite
            popular across the world. Indian food is the blend of varied herbs
            and spices which make every dish quite unique and special. Though
            most of the countries love Indian food, it is considered to be quite
            spicy when compared to the other cuisines. <br /> <br /> Most of them when they
            think of Indian food, all they can think of is the wide variety
            available. Be it the sweets or the rice dishes or the curries or the
            snacks, Indian cuisine has it all. Indian food is delicious and
            quite exciting and includes the use of various exotic flavors. Also,
            another thing that pops up in our mind when we think of Indian
            cuisine is the wonderful spices that are used in cooking.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
