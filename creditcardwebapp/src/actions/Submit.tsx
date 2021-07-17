import React, {useState} from 'react';
import './Submit.css';

interface Props {
    creditCardNumber: string;
    CVC: string;
    expiryDate: string;
}

const Submit: React.FC<Props> = ({ creditCardNumber, CVC, expiryDate}) => {
    const Validate = (creditCardNumber: string, CVC:string, expiryDate: string) => {
        if(ValidateNumber(creditCardNumber)){
            console.log("Credit Card Number Failed", creditCardNumber);
        }  
        else if (ValidateNumber(CVC)) {
            console.log("CVC Failed", CVC);
        }
        else if (!ValidateDate(expiryDate)) {
            console.log("Expiry Date Failed", expiryDate);
        }
        else {     
            console.log("Succeed");
            console.log("Credit Card Number: ", creditCardNumber);
            console.log("CVC Number: ", CVC);
            console.log("Expiry Date: ", expiryDate);
        }  
    }

    return (
        <div className="Submit">
            <button onClick={ () => Validate(creditCardNumber, CVC, expiryDate) }>
                Submit
            </button>
        </div>
    );
}

const ValidateNumber = (number: string) => {
    number = number.replaceAll(/ /g, "");
    let num = Number(number);

    return (isNaN(num) || num == 0);
}

const ValidateDate = (date: string) => {
    let month = date.substring(0, 2);
    let year = date.substring(3, 5);
    let num = Number(year);

    return (Number(month) > 0 && Number(month) <= 12 && !isNaN(num));
}

export default Submit;