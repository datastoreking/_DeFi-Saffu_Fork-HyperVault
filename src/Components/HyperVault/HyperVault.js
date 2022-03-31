import React from 'react'
import Countdown from 'react-countdown'

const HyperVault = () => {
  const renderer = ({days, hours, minutes, seconds, completed })=>{
    return(
      <p className='time'><span>{`${days}`} <br /><small> Days</small></span> : <span>{hours} <br /><small> Hours</small></span> : <span>{minutes}<br /><small> Min</small></span> : <span>{seconds}<br /><small> Sec</small></span></p>
    )
  }
  return (
    <div className="hyper_vault">
        <div className="vault_balance">
            <p className='vault_balance_title'>HyperVault Balance</p>
            <p className='vault_balance_value'>$1000</p>
        </div>
        <div className="locked_amount">
            <p className="locked_amount_heading">TOTAL LOCKED TOKEN AMOUNT : 5000</p>
            <div className="countdownTimer">
                <Countdown
                  date={Date.now() + 865000000}
                  renderer = {renderer}
                />
            </div>
            <div className="increase_apy_rate">
                <div className="increase_apy_rate_heading">Increased APY rate :  <span style={{color : "#24D5A9", textShadow: "0px 1px 14px rgba(36, 213, 169, 0.66)"}}>1,016,088.893%</span></div>
                <div className="field__title">
                <p>Token Amount to lock</p> 
                <span>Max</span> 
                </div>
                <input type="text" placeholder="0.0"/><br/><br/>
                <button>Lock</button>
            </div>
        </div>
    </div>
  )
}

export default HyperVault