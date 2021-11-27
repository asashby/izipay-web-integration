import {React, useState} from 'react';



function Body() {
	//const [token, setToken] = React.useState(null);

    const getFormToken = async () =>{
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Authorization': 'Basic ODQ1NjI4MzM6cHJvZHBhc3N3b3JkX1MwQ2lGMHhNUUowOG9oVVVFR282U3BZajZ2QUVxYWVkbFQ5aG1mV1JLVmtJbg=='
            },
            body: JSON.stringify({ 
                amount: 180,
                currency: 'PEN',
                orderId: 'myOrderId-999999',
                customer: {
                    email: 'sample@example.com'
                }
            })
        };
        const response = fetch('https://api.micuentaweb.pe/api-payment/V4/Charge/CreatePayment', requestOptions)
                            .then(response => response.json())
                            .then(data => this.setState({ postId: data.id }));

        console.log(response);

        /*const json = JSON.parse(response);
        setToken(
            json.answer.formToken
        );  */
    }
    
    getFormToken();
    
    return (
        <div
            style={{
                textAlign:"center"
            }}>
            <div 
                class="kr-embedded" 
                kr-form-token="{token}">
            
                <div class="kr-pan"></div>
                <div class="kr-expiry"></div>
                <div class="kr-security-code"></div>
            
                <button class="kr-payment-button"></button>
            
                <div class="kr-form-error"></div>
            </div>
        </div>
    )
}

export default Body;
