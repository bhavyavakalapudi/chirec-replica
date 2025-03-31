import React from 'react'
import { NavBarData } from './NavBarData'
import SubNav from './SubNav'

const NavBar = () => {
  return (
    <div>
        {NavBarData.map((item, index) => {
            return <SubNav item={item} key={index}/>
        })}
    </div>
  )
}

export default NavBar