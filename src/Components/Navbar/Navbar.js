import React from 'react'
import {GrCircleInformation} from 'react-icons/gr'
import { Link } from 'react-router-dom'
import NavLogo from '../Images/navLogo.png'

const Navbar = ({ sidebar, set, setShowModal}) => {
  const openModal = (e) => {
		console.log("hwllo");
		e.preventDefault();
		setShowModal((prev) => !prev);
	};
  const openSidebar = ()=>{
    set(!sidebar)
  }
  return (
    <div className="navbar">
        <img src={NavLogo} alt={NavLogo}/>

            <p>HyperVault <span>$0.1964</span> USD</p>

        <Link to="#" onClick={openModal}>Connect Wallet</Link>
        <div
					className={sidebar ? "hamburger toggle" : "hamburger"}
					onClick={openSidebar}
				>
					<div className="line1"></div>
					<div className="line2"></div>
					<div className="line3"></div>
				</div>
    </div>
  )
}

export default Navbar