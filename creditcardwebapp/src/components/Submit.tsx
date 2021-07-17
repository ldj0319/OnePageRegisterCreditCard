import React from 'react';
import './Submit.css';

interface Props {
    buttonClick: boolean;
    creditCardNumber: string;
    CVC: string;
    expiryDate: string;
}

const Submit: React.FC<Props> = ({ buttonClick, creditCardNumber, CVC, expiryDate}) => {
    const ClickSubmit = (creditCardNumber: string, CVC:string, expiryDate: string) => { 
        if(ValidateDate(expiryDate)) {
            console.log("Succeed");
            console.log("Credit Card Number: ", creditCardNumber);
            console.log("CVC Number: ", CVC);
            console.log("Expiry Date: ", expiryDate);
        } else {
            alert("Please Enter Valid Expiry Date.\r\n" +
            "The format MM/YY should be used.");
        }
    }

    const ValidateDate = (date: string) => {
        let month = date.substring(0, 2);
        let year = date.substring(3, 5);
        let num = Number(year);
    
        return (Number(month) > 0 && Number(month) <= 12 && !isNaN(num));
    }

    return (
        <div className="Submit">
            <button className="SubmitButton" disabled={ !buttonClick } onClick={ () => ClickSubmit(creditCardNumber, CVC, expiryDate) }>
                Submit
            </button>
        </div>
    );
}

export default Submit;