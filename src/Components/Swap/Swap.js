import React,{useState} from 'react'
import SwapLogo from '../Images/SwapLogo.png'
import Settings from '../Images/Settings.png'
import Reverse from '../Images/Reverse.png'
import Next from '../Images/Next.png'
import icon from '../Images/icon.png'
import Arrow from '../Images/Arrow.png'
import {MdOutlineCancel} from 'react-icons/md'
import {AiOutlineDown} from 'react-icons/ai'
import { SwapData } from './SwapData'
import BNB from '../Images/BNB.png'
import HyperVault from '../Images/HyperVault.png'



const Swap = () => {
    const [Bnb, setBnb] = useState(false);
    const [Vault, setVault] = useState(false);

    const [dataBnb, setDataBnb] = useState("BNB");
    const [dataVault, setDataVault] = useState("HyperVault");
    const swapSystem=(data)=>{
        setDataBnb(data)
        setBnb(!Bnb)
    }
    const swapSystem2=(data)=>{
        setDataVault(data)
        setVault(!Vault);
    }
   
  return (
    <div className="swap">
        <div className="swap_logo">
           <div className='swap_logo_box'>
                {/* <img src={SwapLogo} alt="" /> */}
                <div className="swap_box">
                    <p className="swap_heading">Swap</p>
                    <img src={Settings} alt="" />
                    <img src={Reverse} alt="" />
                    <img src={Next} alt="" />
                </div>
           </div>
            <p>Trade tokens in an instant</p>
            
        </div>
        <div className="input_box">
           <div style={{display:"flex", flexDirection:"column"}}>  
               <div className='Bnb'>
                   <div className='swap_box_bnb' onClick={()=>setBnb(!Bnb)}>
                        <img src={!dataBnb.logo ? BNB : dataBnb.logo} alt=""/>
                        <div >
                            <p>{!dataBnb.title? "BNB" : dataBnb.title}</p>
                            {/* <p>{data.title}</p> */}
                            <p><AiOutlineDown/></p>
                        </div>
                   </div>
                    <div className="field__title">
                        <span>Max</span> 
                    </div>
               </div>
               <div className='box_input'>
                    <input type="text" placeholder="0.0"/>
               </div>
           </div>
           <div style={{display:"flex", justifyContent:"center", cursor:"pointer", marginBottom:"20px"}}><img src={Arrow} alt=""/></div>
           <div style={{display:'flex', flexDirection:"column"}}>
               <div className="Vault">
                    <div className='swap_box_bnb' onClick={()=>setVault(!Vault)}>
                        <img src={!dataVault.logo? HyperVault : dataVault.logo} alt=""/>
                        <div >
                            <p>{!dataVault.title? <p>HyperVault</p>: dataVault.title}</p>
                            {/* <p>{data.title}</p> */}
                            <p><AiOutlineDown/></p>
                        </div>
                   </div>
               </div>
                <div className='box_input'>
                    <input type="text" placeholder="0.0"/>
               </div>
           </div>
           <div className="slippage_tollarance">
               <p>Slippage Tollarance</p><span>0.5%</span>
            </div>
            <button className='hyperswap_button'>Swap</button>
        </div>
        {Bnb ? <div className='swap_option'>
            <div className='swap_option_select'>
                <p>Select a Token : </p>
                <p style={{cursor : "pointer"}}><MdOutlineCancel onClick={()=>setBnb(!Bnb)}/></p>
            </div>
            <div className="swap_2">
                {SwapData.map((val, ind)=>{
                    return(
                        <div className='swap_option_box' key={ind} onClick={()=>swapSystem(val)}>
                            <img src={val.logo}/>
                            <div>
                                <p>{val.title}</p>
                                <p>{val.title}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div> : ""}
        {Vault ? <div className='swap_option'>
            <div className='swap_option_select'>
                <p>Select a Token : </p>
                <p style={{cursor : "pointer"}}><MdOutlineCancel onClick={()=>setVault(!Vault)}/></p>
            </div>
            <div className="swap_2">
                {SwapData.map((val, ind)=>{
                    return(
                        <div className='swap_option_box' key={ind} onClick={()=>swapSystem2(val)}>
                            <img src={val.logo}/>
                            <div>
                                <p>{val.title}</p>
                                <p style={{color: "gray"}}>{val.title}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div> : ""}
    </div>
  )
}

export default Swap