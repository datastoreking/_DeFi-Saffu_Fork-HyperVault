import React from 'react'
import logo from '../Images/Logo.png'
import {NavLink, Link} from 'react-router-dom'
import SidebarData from './SidebarData'


//Social Images
import s1 from '../Images/Social/S1.png'
import s2 from '../Images/Social/S2.png'
import s3 from '../Images/Social/S3.png'
import s4 from '../Images/Social/S5.png'


const Sidebar = ({sidebar, set}) => {
  return (
    <div className={sidebar ? "sidebar open" : "sidebar" }>
      <img className='logo' src={logo} alt="logo"/>
      <div className="menu">
        {SidebarData.map((val, ind)=>{
          return(
            <div key={ind}> <NavLink activeclassName="active" to={val.path} onClick={()=>set(!sidebar)}><img alt='' src={val.menuIcon}/><span>{val.name}</span></NavLink></div>
          )
        })}
      </div>
      <div className="social">
        <Link to="#"><img src={s1} alt=""/></Link>
        <Link to="#"><img src={s2} alt=""/></Link>
        <Link to="#"><img src={s3} alt=""/></Link>
        <Link to="#"><img src={s4} alt=""/></Link>
      </div>
    </div>
  )
}

export default Sidebar