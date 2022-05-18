import React from 'react'
import Container from '../../../UI/Container/Container'
import "./header.css"

function Header(props){
    return (
            <header className='header'>
                <Container >
                    <div className='rowBox'>
                        <h2>ReactMeals</h2>
                        <button className='cardBtn' onClick={props.modalBtnFunc}>
                            <p className='btnName'>
                                <i className='bx bxs-cart-add' style={{color: '#fff'}} ></i>   
                                <span>Your Card</span>
                            </p>
                            <span className='counter'>{props.counter}</span>
                        </button>
                    </div>
                </Container>
            </header>
    )
}

export default Header