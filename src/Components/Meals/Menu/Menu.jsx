import React from 'react'
import './menu.css'

function Menu(props){
    const {meal, desc, price, id} = props;
        return (
            <div className='menuBox'>
                <div className='rowed'>
                    <div className='infoBox'>
                        <h4 className='mealName'>{meal}</h4>
                        <p className='mealDesc'>{desc}</p>
                        <p className='mealPrice'>${price}</p>
                    </div>
                    <form className='addBox' id={id} onSubmit = {props.addSubmitFunc}>
                        <div className='inputBox'>
                            <label className='addLabel'>Amount</label>
                            <input className='addInput' min={1} max={5} type="number" placeholder='1' />
                        </div>
                        <button type='submit' className='AddBtn'>+Add</button>
                    </form>
                </div>
                <hr />
            </div>
        )
}

export default Menu