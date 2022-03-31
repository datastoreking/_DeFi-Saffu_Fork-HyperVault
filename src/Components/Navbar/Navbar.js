import React, {useState, useEffect} from 'react'
import NavLogo from '../Images/navLogo.png'
import { ethers } from "ethers";

const Navbar = ({ sidebar, set, setShowModal, walletProvider}) => {

  const [walletAddress, setWalletAddress] = useState('');

  const openModal = (e) => {
		e.preventDefault();
		setShowModal((prev) => !prev);
    console.log(walletAddress);
	};

  const openSidebar = ()=>{
    set(!sidebar)
  }

  useEffect(() => {
		const fetchWalletProvider = async() => {
        if(walletProvider === ''){
            return;
        }
        const provider = new ethers.providers.Web3Provider(walletProvider);
        const signer = provider.getSigner();
        const temp_address = await signer.getAddress();
        console.log(temp_address)
        setWalletAddress(temp_address.substr(0, 6) + '...' + temp_address.substr(-4));            
    }
    fetchWalletProvider();
	});

  return (
    <div className="navbar">
        <img src={NavLogo} alt={NavLogo}/>

            <p>HyperVault <span>$0.1964</span> USD</p>

        <div className="connectwalletBtn" onClick={openModal}>{walletProvider ? walletAddress : "Connect Wallet"}</div>
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