import React from 'react'
import * as ReactDOM from 'react-dom'
import CreditCardForm from './components/CreditCardForm';
import { fireEvent } from '@testing-library/react';

describe("Credit Card Form Test", () => {
    let container: HTMLDivElement;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<CreditCardForm />, container)
    })

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    })

    it('Renders correctly initial document', () => {
        const inputs = container.querySelectorAll('input');
        expect(inputs).toHaveLength(3);

        expect(inputs[0].className).toBe('CreditCardNumberInput');
        expect(inputs[1].className).toBe('CVCInput');
        expect(inputs[2].className).toBe('ExpiryDateInput');

        const label = container.querySelector('label');
        expect(label).not.toBeInTheDocument();

        const button = container.querySelectorAll('button');
        expect(button).toHaveLength(1);
        expect(button[0].className).toBe('SubmitButton');
    });

    it('Test; Submit button is able to click', () => {
        const inputs = container.querySelectorAll('input');
        const CreditCardNumberInput = inputs[0];
        const CVCInput = inputs[1];
        const ExpiryDateInput = inputs[2];

        const button = container.querySelectorAll('button');
        const SubmitButton = button[0];

        fireEvent.change(CreditCardNumberInput, { target: { value: "1111 1111 1111 1111" } });
        fireEvent.change(CVCInput, { target: { value: "111" } });
        fireEvent.change(ExpiryDateInput, { target: { value: "11/11" } });
        
        expect(SubmitButton.disabled).toBe(false);  
    });

    it('Test; Submit button is disable to click', () => {
      const inputs = container.querySelectorAll('input');
      const CreditCardNumberInput = inputs[0];
      const CVCInput = inputs[1];
      const ExpiryDateInput = inputs[2];

      const button = container.querySelectorAll('button');
      const SubmitButton = button[0];

      fireEvent.change(CreditCardNumberInput, { target: { value: "1111 1111 1111 111" } });
      fireEvent.change(CVCInput, { target: { value: "111" } });
      fireEvent.change(ExpiryDateInput, { target: { value: "11/11" } });
      
      expect(SubmitButton.disabled).toBe(true);  
  });

  it('Test; Alert message when expiry date is not valid', () => {
    const inputs = container.querySelectorAll('input');
    const CreditCardNumberInput = inputs[0];
    const CVCInput = inputs[1];
    const ExpiryDateInput = inputs[2];

    const button = container.querySelectorAll('button');
    const SubmitButton = button[0];

    fireEvent.change(CreditCardNumberInput, { target: { value: "1111 1111 1111 1111" } });
    fireEvent.change(CVCInput, { target: { value: "111" } });
    fireEvent.change(ExpiryDateInput, { target: { value: "99/11" } });
    
    expect(SubmitButton.disabled).toBe(false);
    
    let alertMessage: string = '';
    window.alert = (message: string) => {alertMessage = message};
    fireEvent.click(SubmitButton);
    expect(alertMessage).toEqual("Please Enter Valid Expiry Date.\r\n" + "The format MM/YY should be used.");
  });
})