import React from 'react'
import CreditCardForm from '../components/CreditCardForm';
import './HomePage.css'

const HomePage = () => {
    return (
        <div>
            <div className="Welcome">
                Welcome to Register Card Form
            </div>
            <CreditCardForm />
        </div>
    )
}

export default HomePage;