import React from 'react';
import './Submit.css';

interface Props {
    buttonClick: boolean;
    creditCardNumber: string;
    CVC: string;
    expiryDate: string;
}

const Submit: React.FC<Props> = ({ buttonClick, creditCardNumber, CVC, expiryDate}) => {
    const Validate = (creditCardNumber: string, CVC:string, expiryDate: string) => {
        if(ValidateNumber(creditCardNumber)){
            alert("Please Enter Valid Credit Card Number.\r\n" +
            "The Credit Card Number should be 16 digits.");
        }  
        else if (ValidateNumber(CVC)) {
            alert("Please Enter Valid CVC Number.\r\n" +
            "The CVC Number should be 3 digits.");
        }
        else if (!ValidateDate(expiryDate)) {
            alert("Please Enter Valid Expiry Date.\r\n" +
            "The format MM/YY should be used.");
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
            <button className="SubmitButton" disabled={ !buttonClick } onClick={ () => Validate(creditCardNumber, CVC, expiryDate) }>
                Submit
            </button>
        </div>
    );
}

const ValidateNumber = (number: string) => {
    number = number.replaceAll(/ /g, "");
    let num = Number(number);

    return (isNaN(num) || num === 0);
}

const ValidateDate = (date: string) => {
    let month = date.substring(0, 2);
    let year = date.substring(3, 5);
    let num = Number(year);

    return (Number(month) > 0 && Number(month) <= 12 && !isNaN(num));
}

export default Submit;