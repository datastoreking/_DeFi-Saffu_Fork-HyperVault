import React from 'react'
import { marketplaceData, nofIncinatorData, nofPriceData } from './HomeData'

const Home = () => {
  return (
    <div className='home'>
        <div className="marketplace_desc">
            {marketplaceData.map((val, ind)=>{
              return(
                <div className="marketplace_desc_poperty" style={{background : `${val.bgColor}`}} key={ind}>
                  <p className='heading'>{val.first}</p>
                  <p className='value'>{val.value1}</p>
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