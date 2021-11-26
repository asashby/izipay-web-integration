import React from 'react';

function Body() {

    return (
        <div
            style={{
                textAlign:"center"
            }}>
            <div 
                class="kr-embedded" 
                kr-form-token="">
            
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
