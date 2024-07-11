import React from 'react'
import './card.css'
import { Children } from 'preact/compat'


const Card = ({children, backgroundColor, textTransform, textColor}) => {
    return (
        <div className='card' style={{backgroundColor: backgroundColor, color: textColor, textTransform: textTransform}}>
              {children}
        </div>
    )


}

Card.defaultProps ={
    backgroundColor: 'lightblue',
    textTransform: 'uppercase',
    textColor: 'purple'
    
}

export default Card