import React from 'react'
import Layout from '../../../Layout/Layout'
import "./orderSummary.css"

function OrderSummary(props) {
    let allPrice = null;
    let newPriceAll = null;
    const ingredientSummary =  props.newMenu.map((item, i) => {
        allPrice = (item.price * item.count).toFixed(2);
        newPriceAll = allPrice + allPrice;
        return (
            <div key={i} className='modal__item'>
                <div>
                    <h3 className='modal__title'>{item.meal}</h3>
                    <p className='modal__price'>${allPrice}</p>
                </div>
                <p className='modal__count'>{item.count}x</p>
                <div className='modal__btns'>
                    <button className='modal__btn'><i className='bx bx-plus'></i></button>
                    <button className='modal__btn'><i className='bx bx-minus'></i></button>
                </div>
            </div>
        )
    })
    return (
        <Layout >
            <div className='modalBox'>
                <div className='modal__list'>
                    <div className='modal__inner'>
                       {ingredientSummary}
                    </div>
                </div>
                <div className='modal__amount'>
                    <div>
                        <h3 className='modal__amout-price'>Total Amount</h3>
                    </div>
                    <div className='modal__price-btns'>
                        <h3 className='modal__price-amount'>${newPriceAll}</h3>
                        <button className='modal__close' onClick={props.purchaseCansel}>Close</button>
                        <button className='modal__order' onClick={props.purchaseOrder}>Order</button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default OrderSummary