import React from 'react'
import { marketplaceData, nextRebaseData, nofIncinatorData, nofPriceData, titanoPriceData } from './HomeData'

const Home = () => {
  return (
    <div className='home'>
        <div className="marketplace_desc">
            {marketplaceData.map((val, ind)=>{
              return(
                <div className="marketplace_desc_poperty" style={{background : `${val.bgColor}`}} key={ind}>
                  <p className='heading'>{val.first}</p>
                  <p className='value'>{val.value1}</p>
                  <p className='heading'>{val.second}</p>
                  <p className='value'>{val.value2}</p>
                </div>
              )
            })}
        </div>
        <div className="titano_price">
         {titanoPriceData.map((val, ind)=>{
           return(
            <div className='titano_price_box' key={ind}>
              <div className="desc">
                  <p className='desc_title'>{val.title}</p>
                  <p className='desc_value'>{val.value}</p>
              </div>
              <div className="share">
                <p>{val.share}</p>
              </div>
            </div>
           )
         })}
        </div>
        <div className="reward">
          <p className="total_reward">Totla Reward</p>
          <p className='reward_value'>$0.00</p>
          <p className='reward_desc'>0.00 HyperVault (0.00% increase)</p>
        </div>
        <div className="next_rebase">
          {nextRebaseData.map((val, ind)=>{
            return(
              <div className="next_rebase_box" style={{borderRight : `${(val.id===3)? "":"1px solid rgba(255, 255, 255, 0.36)"}`}} key={ind}>
                  <p className="next_rebase_title">{val.first}</p>
                  <p className="next_rebase_value">{val.value1}</p><br/><br/>
                  <p className="next_rebase_title">{val.second}</p>
                  <p className="next_rebase_value">{val.value2}</p>
              </div>
            )
          })}
        </div>
        <div className="nof_price">
          {nofPriceData.map((val, ind)=>{
            return(
              <div className="nof_price_box"  key={ind}>
                <p className="nof_price_title">{val.title}</p>
                <p className="nof_price_value">{val.value}</p>
              </div>
            )
          })}
        </div>
        <div className="nof_incinator">
          {nofIncinatorData.map((val, ind)=>{
            return(
              <div className="nof_incinator_box" key={ind}>
                <p className="nof_incinator_title">{val.title}</p>
                <p className="nof_incinator_value">{val.value}</p>
              </div>
            )
          })}
        </div>
    </div>

  )
}

export default Home