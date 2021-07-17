import React, {useState} from 'react';
import DatePicker from 'react-date-picker';
import './CreditCardForm.css';

const CreditCardForm = () => {
    const [creditCardNumber, setCreditCardNumber] = useState(0);
    const [CVC, setCVC] = useState(0);
    const [expiryDate, setExpiryDate] = useState(new Date());
    const [valid, setValid] = useState(false);

    const Submit = () => {
        if (valid) {
            console.log("Credit Card Number: ", creditCardNumber);
            console.log("CVC Number: ", CVC);
            console.log("Expiry Date: ", expiryDate);
        } else {
            console.log("Failed");
        }
    }

    const Validate = () => {
        if (creditCardNumber > 0 && CVC > 0 && expiryDate != null) {
            setValid(true);
        }
    }

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
            <button onClick={ Submit }>
                Submit
            </button>
        </div>
    );
};

export default CreditCardForm;