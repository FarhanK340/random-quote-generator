import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
const Footer = (color) => {
    return (
        <div className='py-2 text-white'>
            <FontAwesomeIcon icon={faCopyright} color={color} className='pr-2'/>
            by Farhan    
        </div>
    )
}

export default Footer