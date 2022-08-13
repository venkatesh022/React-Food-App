import React from 'react'
import {Data} from './Data'
import MenuItem from './MenuItem'
import '../Styles/Menu.css'

const Menu = () => {
  return (
    <React.Fragment>
        <div className="menu">
            <div className="menuTitle">
                <div className="menuList">
                  {/* <h1>Lorem, ipsum dolor.</h1> */}
                  {Data.map((menuItem, key) => {
                    return(
                      <MenuItem key={key} 
                        image = {menuItem.image}
                        name = {menuItem.name}
                        price = {menuItem.price}
                      />
                    )
                  })}
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Menu