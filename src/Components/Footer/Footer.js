import React from 'react'
import FooterArrow from '../Images/FooterArrow.png'
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer_box">
            <p>HYPER VOULT</p>
            <Link to="#"><img src={FooterArrow} alt={FooterArrow}/> What is Hyper Voult</Link>
            <Link to="#"><img src={FooterArrow} alt={FooterArrow}/> Get Hyper Voult</Link>
            <Link to="#"><img src={FooterArrow} alt={FooterArrow}/> Trading Chart</Link>
            <Link to="#"><img src={FooterArrow} alt={FooterArrow}/> Smart Contracts</Link>
            <Link to="#"><img src={FooterArrow} alt={FooterArrow}/> Liquidity Lock</Link>
            <Link to="#"><img src={FooterArrow} alt={FooterArrow}/> Whitepaper</Link>
        </div>
        <div className="footer_box">
            <p>COMMUNITY</p>
            <Link to="#"><img src={FooterArrow} alt={FooterArrow}/> Coingecko</Link>
            <Link to="#"><img src={FooterArrow} alt={FooterArrow}/> CoinMarketCap</Link>
            <Link to="#"><img src={FooterArrow} alt={FooterArrow}/> Twitter</Link>
            <Link to="#"><img src={FooterArrow} alt={FooterArrow}/> Telegram</Link>
        </div>
        <div className="footer_box">
            <p>QUESTIONS</p>
            <Link to="#"><img src={FooterArrow} alt={FooterArrow}/> Telegram DM</Link>
            <Link to="#"><img src={FooterArrow} alt={FooterArrow}/> e-mail</Link>       
        </div>
    </div>
  )
}

export default Footer