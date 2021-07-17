import React from 'react';
import './Button.css';
import Card from './Card'

const Button = () => {
    return (
        <Card>
            <div className='btn-list'>
                <ul>
                    <li className='button'>5%</li>
                    <li className='button'>10%</li>
                    <li className='button'>15%</li>
                    <li className='button'>25%</li>
                    <li className='button'>25%</li>

                </ul>
            </div>

        </Card>
    )
}

export default Button;