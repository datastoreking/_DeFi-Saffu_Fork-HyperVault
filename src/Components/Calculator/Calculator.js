import React from 'react'
import { CalculatorAmountData, CalculatorHyperData, CalculatorTitanoPriceData } from './CalculatorData'
import Slider from '@mui/material/Slider';

const Calculator = () => {
	
  const[slidervalue, setSliderValue] = React.useState(30);
	
  const handleValue = (event: any, newValue: any) => {
	  setSliderValue(newValue);
	  console.log(slidervalue);
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
            {CalculatorAmountData.map((val, ind)=>{
                return(
                    <div className="calculator_amount_box" key={ind}>
                        <p>{val.title}</p>
                        <div className="calculator_amount_box_content">
                            <p className="calculator_amount_box_content_p">{val.value}</p>
                            <p className="calculator_amount_box_content_position">{val.position}</p>
                        </div>
                    </div>
                )
            })}
			<div className="calculator_amount_box">
				<p>Future HyperVault PRICE ($)</p>
				<div className="calculator_amount_box_content">
					<p className="calculator_amount_box_content_p">{slidervalue}</p>
					<p className="calculator_amount_box_content_position">Current</p>
				</div>
			</div>
        </div>
        <div className="calculator_days">
            <p>30 Days</p>
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
            {CalculatorTitanoPriceData.map((val, ind)=>{
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

export default Calculator