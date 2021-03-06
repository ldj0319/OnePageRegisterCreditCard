import React, {useState} from 'react';
import NumberFormat from 'react-number-format'
import Submit from './Submit';
import './CreditCardForm.css';

const CreditCardForm = () => {
    enum fieldName {
        CreditCardNumber,
        CVC,
        ExpiryDate
    }

    const [creditCardNumber, setCreditCardNumber] = useState("");
    const [CVC, setCVC] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [buttonClick, setButtonClick] = useState(false);

    const changeState = (value: string, stateName: fieldName) => {
        switch (stateName) {
            case fieldName.CreditCardNumber:
                setCreditCardNumber(value);
                Validate(value, CVC, expiryDate);
                break;
            case fieldName.CVC:
                setCVC(value);
                Validate(creditCardNumber, value, expiryDate);
                break;
            case fieldName.ExpiryDate:
                setExpiryDate(value);
                Validate(creditCardNumber, CVC, value);
                break;
            default:
                break;
        }
    }

    const Validate = (creditCardNumber: string, CVC:string, expiryDate: string) => {
        if(ValidateNumber(creditCardNumber) && ValidateNumber(CVC) && ValidateNumber(expiryDate)){
            setButtonClick(true);
        }  
        else {     
            setButtonClick(false);
        }  
    }

    const ValidateNumber = (number: string) => {
        number = number.replace(/ /g, "");
        number = number.replace(/\//g, "");
        let num = Number(number);
    
        return (!isNaN(num) && number !== "");
    }
    
    return (
        <div className="CreditCardForm">
            <div className="row">
                <div className="CreditCardNumberField">
                    <NumberFormat 
                        className="CreditCardNumberInput"
                        onChange={ event => changeState(event.target.value, fieldName.CreditCardNumber) } 
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
                            onChange={ event => changeState(event.target.value, fieldName.CVC) } 
                            placeholder="CVC" 
                            format="###" 
                            mask="#"/>
                    </div>
                </div>
                <div className="col right">
                    <div className="ExpiryDateField">
                        <NumberFormat 
                            className="ExpiryDateInput"
                            onChange={ event => changeState(event.target.value, fieldName.ExpiryDate) } 
                            placeholder="Expiry Date" 
                            format="##/##" 
                            mask={['M', 'M', 'Y', 'Y']}/>
                    </div>
                </div>
            </div>
            <Submit buttonClick= { buttonClick } creditCardNumber={ creditCardNumber } CVC={ CVC } expiryDate={ expiryDate }/>
        </div>
    );
};

export default CreditCardForm;