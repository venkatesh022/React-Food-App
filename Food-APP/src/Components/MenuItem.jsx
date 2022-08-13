import React from 'react'

const MenuItem = ({image, name, price}) => {
  return (
    <React.Fragment>
        <div className="menuItem">
            <div style={{backgroundImage : `url(${image})`}}></div>
                <h1>{name}</h1>
                <p>&#8377;{price}</p>
        </div>
    </React.Fragment>
  )
}

export default MenuItem