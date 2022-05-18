import React from 'react'
import './loyout.css'

function Layout(props){
    return (
        <div className='loyout'>
            {props.children}
        </div>
    )
}

export default Layout