import React from 'react'
import { CalculatorHyperData } from './CalculatorData'
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';

const Calculator = () => {
	
  const ariaLabel = { 'aria-label': 'description' };	
  const[slidervalue, setSliderValue] = React.useState(30);
  
  const[hypervaultamount, setHypervaultamount] = React.useState(0);
  const[hypervaultprice, setHypervaultprice] = React.useState(0.2001145);
  const[futurehypervaultprice, setFuturehypervaultprice] = React.useState(0.2001145);
  
  const[initialinvestment, setInitialinvestment] = React.useState("0.00");
  const[rewardestimation, setRewardestimation] = React.useState("0.00");
  const[potentialreturn, setPotentialreturn] = React.useState("0.00");
  
  const[datepow, setDatepow] = React.useState(Math.pow(1.018999, 30));
  console.log(datepow);
  
  const handleValue = (event: any, newValue: any) => {
	setSliderValue(newValue);
	setDatepow(Math.pow(1.018999, (newValue - 1)));
	setRewardestimation(Number((newValue*(Math.pow(1.018999, (newValue - 1)))).toFixed(2)));
	setPotentialreturn(Number((newValue*hypervaultprice*(Math.pow(1.018999, (newValue - 1)))).toFixed(2)));
}
  
  const hypervaultamountHandler = (e) => {
	const temp = e.target.value;
	setHypervaultamount(temp);
	setInitialinvestment(Number((temp*hypervaultprice).toFixed(2)));
	setRewardestimation(Number((temp*datepow).toFixed(2)));
	setPotentialreturn(Number((temp*hypervaultprice*datepow).toFixed(2)));
  }
  
  const hypervaultpriceHandler = (e) => {
	const temp = e.target.value;
	setHypervaultprice(temp);
	setInitialinvestment(Number((temp*hypervaultamount).toFixed(2)));
}
  
  const futurehypervaultpriceHandler = (e) => {
	const temp = e.target.value;
	setFuturehypervaultprice(temp);
  }
	
  return (
    <div className="calculator">
        <h4>Calculator</h4>
        <p className='calculator_p'>Estimate your returns</p>
        <div className="calculator_hyper_vault">
            {CalculatorHyperData.map((val, ind)=>{
                return(
                    <div className='calculator_hyper_vault_box' key={ind}>
                        <h3>{val.title}</h3>
                        <p>{val.value}</p>
                    </div>
                )
            })}
        </div>
        <div className="calculator_amount">
            <div className="calculator_amount_box">
				<p>HyperVault Amount</p>
				<div className="calculator_amount_box_content">
					 <TextField defaultValue="0" inputProps={ariaLabel} onChange={hypervaultamountHandler}/>
					<p className="calculator_amount_box_content_position">Max</p>
				</div>
			</div>
			<div className="calculator_amount_box">
				<p>APY (%)</p>
				<div className="calculator_amount_box_content">
					<p className="calculator_amount_box_content_p">617,122.283</p>
					<p className="calculator_amount_box_content_position">Current</p>
				</div>
			</div>
			<div className="calculator_amount_box">
				<p>HyperVault Price at Purchase ($)</p>
				<div className="calculator_amount_box_content">
					 <TextField defaultValue="0.2001145" inputProps={ariaLabel} onChange={hypervaultpriceHandler}/>
					<p className="calculator_amount_box_content_position">Current</p>
				</div>
			</div>
			<div className="calculator_amount_box">
				<p>Future HyperVault Price ($)</p>
				<div className="calculator_amount_box_content">
					 <TextField defaultValue="0.2001145" inputProps={ariaLabel} onChange={futurehypervaultpriceHandler}/>
					<p className="calculator_amount_box_content_position">Current</p>
				</div>
			</div>
        </div>
        <div className="calculator_days">
            <p>{slidervalue} Days</p>
            <Slider
                aria-label="Temperature"
                defaultValue={30}
                valueLabelDisplay="auto"
                min={1}
                max={365}
                color="primary"
                background= "#24D5A9"
				onChange={handleValue}
            />
        </div>
        <div className="titano_price_duplicate">
            <div className='titano_price_duplicate_box'>
				<p className='titano_price_duplicate_title'>Your initial investment</p>
				<p className='titano_price_duplicate_value'>$ {initialinvestment}</p>
			</div>
			<div className='titano_price_duplicate_box'>
				<p className='titano_price_duplicate_title'>Current wealth</p>
				<p className='titano_price_duplicate_value'>$ 0.00</p>
			</div>
			<div className='titano_price_duplicate_box'>
				<p className='titano_price_duplicate_title'>HyperVault rewards estimation</p>
				<p className='titano_price_duplicate_value'>{rewardestimation} HyperVault</p>
			</div>
			<div className='titano_price_duplicate_box'>
				<p className='titano_price_duplicate_title'>Potential return</p>
				<p className='titano_price_duplicate_value'>$ {potentialreturn}</p>
			</div>
        </div>
    </div>
  )
}

export default Calculator