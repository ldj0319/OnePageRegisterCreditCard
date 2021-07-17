import React, {useState} from 'react';
import NumberFormat from 'react-number-format'
import Submit from '../actions/Submit';
import './CreditCardForm.css';

const CreditCardForm = () => {
    const [creditCardNumber, setCreditCardNumber] = useState("");
    const [CVC, setCVC] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    
    return (
        <div className="CreditCardForm">
            <div className="row">
                <div className="CreditCardNumberField">
                    <NumberFormat 
                        className="CreditCardNumberInput"
                        onChange={ event => setCreditCardNumber(event.target.value) } 
                        placeholder="Credit Card Number" 
                        format="#### #### #### ####" 
                        mask="#"/>
                </div>
            </div>
            <div className="row">
                <div className="col left">
                    <div className="CVCField">
                        <NumberFormat 
                            className="CVCInput"
                            onChange={ event => setCVC(event.target.value) } 
                            placeholder="CVC" 
                            format="###" 
                            mask="#"/>
                    </div>
                </div>
                <div className="col right">
                    <div className="ExpiryDateField">
                        <NumberFormat 
                            className="ExpiryDateInput"
                            onChange={ event => setExpiryDate(event.target.value) } 
                            placeholder="Expiry Date" 
                            format="##/##" 
                            mask={['M', 'M', 'Y', 'Y']}/>
                    </div>
                </div>
            </div>
            <Submit creditCardNumber={ creditCardNumber } CVC={ CVC } expiryDate={ expiryDate }/>
        </div>
    );
};

export default CreditCardForm;