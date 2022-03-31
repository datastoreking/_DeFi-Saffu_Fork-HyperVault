import React from 'react'
import { titanoPriceData } from './AccountsData'

const Accounts = () => {
  return (
    <div className="accounts">
        <div className="total_earned">
            <p className="total_earned_p">Total Earned</p>
            <p className="total_earned_p_value">$0.00</p>
            <p className="total_earned_p_share">0.00 HyperVault (0.00% increase)</p>
        </div>
        <div className="apy">
            <div className="apy_box_related">
                <div className="apy_box">
                    <p className="apy_box_title">APY</p>
                    <p className="apy_box_value">102,483.58%</p>
                    <p className="apy_box_share">Daily ROI 1.9176%</p>
                </div>
                <div className="balance_box">
                    <p className="balance_box_title">Your Balance</p>
                    <div className='balance_box_div'></div>
                    <p className="balance_box_share">Daily ROI 1.9176%</p>
                </div>
            </div>
            <div className="apy_box_related">
                <div className="apy_box">
                    <p className="apy_box_title">APY</p>
                    <p className="apy_box_value">102,483.58%</p>
                    <p className="apy_box_share">Daily ROI 1.9176%</p>
                </div>
                <div className="balance_box">
                    <p className="balance_box_title">Your Balance</p>
                    <div className='balance_box_div'></div>
                    <p className="balance_box_share">Daily ROI 1.9176%</p>
                </div>
            </div>
        </div>
        <div className="titano_price_duplicate">
            {titanoPriceData.map((val, ind)=>{
                return(
                    <div className='titano_price_duplicate_box' key={ind}>
                        <p className='titano_price_duplicate_title'>{val.title}</p>
                        <p className='titano_price_duplicate_value'>{val.value}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Accounts