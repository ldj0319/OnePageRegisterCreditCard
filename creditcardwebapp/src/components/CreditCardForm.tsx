import React, {useState} from 'react';
import DatePicker from 'react-date-picker';
import './CreditCardForm.css';

const CreditCardForm = () => {
    const [creditCardNumber, setCreditCardNumber] = useState(0);
    const [CVC, setCVC] = useState(0);
    const [expiryDate, setExpiryDate] = useState(new Date());
    
    return (
        <div className="CreditCardForm">

            <div className="CreditCardNumberField">
                <input 
                    className="CreditCardNumberInput"
                    onChange={ event => setCreditCardNumber(Number(event.target.value)) } 
                    placeholder="Credit Card Number" 
                    type="number"/>
            </div>

            <div className="CVCField">
                <input 
                    className="CVCInput"
                    onChange={ event => setCVC(Number(event.target.value)) } 
                    placeholder="CVC" 
                    type="number"/>
            </div>

            <div className="ExpiryDateField">
                <DatePicker className="ExpiryDateInput" 
                    onChange={ setExpiryDate } 
                    value={ expiryDate } />
            </div>
        </div>
    );
};

export default CreditCardForm;