import React from 'react'
import Layout from '../../Layout/Layout'
import Backdrop from '../Backdrop/Backdrop'
import './modal.css'

function Modal(props){
    return (
        <Layout>
            <Backdrop show = {props.show} clicked = {props.modalClose} />
            <div className='Modal'
                style={{
                    transition: 'all .5s ease',
                    transform: props.show ? "translateY(0)" : "translateY(-100vh)",
                    opacity: props.show ? '1' : '0'
                }}
            >
                {props.children} 
            </div>
        </Layout>
    )
}

export default Modal