import {React, useState} from 'react';



function Body() {
	//const [token, setToken] = React.useState(null);

    /*const getFormToken = async () =>{
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin' : '*',
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

        console.log(response);*/

        /*const json = JSON.parse(response);
        setToken(
            json.answer.formToken
        );  */
   /* }
    
    getFormToken();*/
    
    return (
        <div
            style={{
                textAlign:"center"
            }}>
            <div 
                class="kr-embedded" 
                kr-form-token="26tPW4dpIvTUCAobMKxakOCA21BeyJhbW91bnQiOjE4MCwiY3VycmVuY3kiOiJQRU4iLCJtb2RlIjoiUFJPRFVDVElPTiIsInZlcnNpb24iOjMsIm9yZGVySWQiOiJteU9yZGVySWQtOTk5OTk5Iiwic2hvcE5hbWUiOiJJWkkqWGlwcm9maXQgU0FDICg4OTM2OTMzKSIsInJpc2tBbmFseXNlciI6eyJmaW5nZXJQcmludHNJZCI6ImM0M2QwZmQ2LWY1NjYtNGYwZC1iNTA5LTYxMDFiMGVkOWY0MiIsImpzVXJsIjoiaHR0cHM6Ly9zZWN1cmUubWljdWVudGF3ZWIucGUvdHJhcy9hbmFseXplci9wdWJsaWMvdjEvY2hlY2tlci9jNDNkMGZkNi1mNTY2LTRmMGQtYjUwOS02MTAxYjBlZDlmNDIifSwiY2F0ZWdvcmllcyI6eyJkZWJpdENyZWRpdENhcmRzIjp7ImFwcElkIjoiY2FyZHMiLCJwYXJhbSI6WyJBTUVYIiwiTUFTVEVSQ0FSRF9ERUJJVCIsIk1BU1RFUkNBUkQiLCJNQ19DT1JET0JFU0EiLCJWSVNBIiwiVklTQV9FTEVDVFJPTiIsIkRJTkVSUyIsIlZJU0FfREVCSVQiXX19LCJjYXJkcyI6eyJBTUVYIjp7ImZpZWxkcyI6eyJzZWN1cml0eUNvZGUiOnsibWF4TGVuZ3RoIjo0fSwiaW5zdGFsbG1lbnROdW1iZXIiOnsidmFsdWUiOiItMSIsInZhbHVlcyI6eyItMSI6IjE6Ojo6OjE4MCIsIkRZTkFNSUMiOiI6Ojo6OiJ9LCJyZXF1aXJlZCI6dHJ1ZSwic2Vuc2l0aXZlIjpmYWxzZSwiaGlkZGVuIjpmYWxzZSwiY2xlYXJPbkVycm9yIjpmYWxzZX0sImZpcnN0SW5zdGFsbG1lbnREZWxheSI6eyJ2YWx1ZSI6IjAiLCJ2YWx1ZXMiOnsiMCI6IjAiLCJEWU5BTUlDIjoiRFlOQU1JQyJ9LCJyZXF1aXJlZCI6dHJ1ZSwic2Vuc2l0aXZlIjpmYWxzZSwiaGlkZGVuIjpmYWxzZSwiY2xlYXJPbkVycm9yIjpmYWxzZX19LCJjb3B5RnJvbSI6ImNhcmRzLkRFRkFVTFQifSwiTUFTVEVSQ0FSRF9ERUJJVCI6eyJmaWVsZHMiOnsiaW5zdGFsbG1lbnROdW1iZXIiOnsidmFsdWUiOiItMSIsInZhbHVlcyI6eyItMSI6IjE6Ojo6OjE4MCIsIkRZTkFNSUMiOiI6Ojo6OiJ9LCJyZXF1aXJlZCI6dHJ1ZSwic2Vuc2l0aXZlIjpmYWxzZSwiaGlkZGVuIjpmYWxzZSwiY2xlYXJPbkVycm9yIjpmYWxzZX0sImZpcnN0SW5zdGFsbG1lbnREZWxheSI6eyJ2YWx1ZSI6IjAiLCJ2YWx1ZXMiOnsiMCI6IjAiLCJEWU5BTUlDIjoiRFlOQU1JQyJ9LCJyZXF1aXJlZCI6dHJ1ZSwic2Vuc2l0aXZlIjpmYWxzZSwiaGlkZGVuIjpmYWxzZSwiY2xlYXJPbkVycm9yIjpmYWxzZX19LCJjb3B5RnJvbSI6ImNhcmRzLkRFRkFVTFQifSwiTUFTVEVSQ0FSRCI6eyJmaWVsZHMiOnsiaW5zdGFsbG1lbnROdW1iZXIiOnsidmFsdWUiOiItMSIsInZhbHVlcyI6eyItMSI6IjE6Ojo6OjE4MCIsIkRZTkFNSUMiOiI6Ojo6OiJ9LCJyZXF1aXJlZCI6dHJ1ZSwic2Vuc2l0aXZlIjpmYWxzZSwiaGlkZGVuIjpmYWxzZSwiY2xlYXJPbkVycm9yIjpmYWxzZX0sImZpcnN0SW5zdGFsbG1lbnREZWxheSI6eyJ2YWx1ZSI6IjAiLCJ2YWx1ZXMiOnsiMCI6IjAiLCJEWU5BTUlDIjoiRFlOQU1JQyJ9LCJyZXF1aXJlZCI6dHJ1ZSwic2Vuc2l0aXZlIjpmYWxzZSwiaGlkZGVuIjpmYWxzZSwiY2xlYXJPbkVycm9yIjpmYWxzZX19LCJjb3B5RnJvbSI6ImNhcmRzLkRFRkFVTFQifSwiTUNfQ09SRE9CRVNBIjp7ImZpZWxkcyI6eyJpbnN0YWxsbWVudE51bWJlciI6eyJ2YWx1ZSI6Ii0xIiwidmFsdWVzIjp7Ii0xIjoiMTo6Ojo6MTgwIiwiRFlOQU1JQyI6Ijo6Ojo6In0sInJlcXVpcmVkIjp0cnVlLCJzZW5zaXRpdmUiOmZhbHNlLCJoaWRkZW4iOmZhbHNlLCJjbGVhck9uRXJyb3IiOmZhbHNlfSwiZmlyc3RJbnN0YWxsbWVudERlbGF5Ijp7InZhbHVlIjoiMCIsInZhbHVlcyI6eyIwIjoiMCIsIkRZTkFNSUMiOiJEWU5BTUlDIn0sInJlcXVpcmVkIjp0cnVlLCJzZW5zaXRpdmUiOmZhbHNlLCJoaWRkZW4iOmZhbHNlLCJjbGVhck9uRXJyb3IiOmZhbHNlfX0sImNvcHlGcm9tIjoiY2FyZHMuREVGQVVMVCJ9LCJWSVNBIjp7ImZpZWxkcyI6eyJpbnN0YWxsbWVudE51bWJlciI6eyJ2YWx1ZSI6Ii0xIiwidmFsdWVzIjp7Ii0xIjoiMTo6Ojo6MTgwIiwiRFlOQU1JQyI6Ijo6Ojo6In0sInJlcXVpcmVkIjp0cnVlLCJzZW5zaXRpdmUiOmZhbHNlLCJoaWRkZW4iOmZhbHNlLCJjbGVhck9uRXJyb3IiOmZhbHNlfSwiZmlyc3RJbnN0YWxsbWVudERlbGF5Ijp7InZhbHVlIjoiMCIsInZhbHVlcyI6eyIwIjoiMCIsIkRZTkFNSUMiOiJEWU5BTUlDIn0sInJlcXVpcmVkIjp0cnVlLCJzZW5zaXRpdmUiOmZhbHNlLCJoaWRkZW4iOmZhbHNlLCJjbGVhck9uRXJyb3IiOmZhbHNlfX0sImNvcHlGcm9tIjoiY2FyZHMuREVGQVVMVCJ9LCJWSVNBX0VMRUNUUk9OIjp7ImZpZWxkcyI6eyJpbnN0YWxsbWVudE51bWJlciI6eyJ2YWx1ZSI6Ii0xIiwidmFsdWVzIjp7Ii0xIjoiMTo6Ojo6MTgwIiwiRFlOQU1JQyI6Ijo6Ojo6In0sInJlcXVpcmVkIjp0cnVlLCJzZW5zaXRpdmUiOmZhbHNlLCJoaWRkZW4iOmZhbHNlLCJjbGVhck9uRXJyb3IiOmZhbHNlfSwiZmlyc3RJbnN0YWxsbWVudERlbGF5Ijp7InZhbHVlIjoiMCIsInZhbHVlcyI6eyIwIjoiMCIsIkRZTkFNSUMiOiJEWU5BTUlDIn0sInJlcXVpcmVkIjp0cnVlLCJzZW5zaXRpdmUiOmZhbHNlLCJoaWRkZW4iOmZhbHNlLCJjbGVhck9uRXJyb3IiOmZhbHNlfX0sImNvcHlGcm9tIjoiY2FyZHMuREVGQVVMVCJ9LCJERUZBVUxUIjp7ImZpZWxkcyI6eyJwYW4iOnsibWluTGVuZ3RoIjoxMCwibWF4TGVuZ3RoIjoxOSwidmFsaWRhdG9ycyI6WyJOVU1FUklDIiwiTFVITiJdLCJyZXF1aXJlZCI6dHJ1ZSwic2Vuc2l0aXZlIjp0cnVlLCJoaWRkZW4iOmZhbHNlLCJjbGVhck9uRXJyb3IiOmZhbHNlfSwiZXhwaXJ5RGF0ZSI6eyJyZXF1aXJlZCI6dHJ1ZSwic2Vuc2l0aXZlIjp0cnVlLCJoaWRkZW4iOmZhbHNlLCJjbGVhck9uRXJyb3IiOmZhbHNlfSwic2VjdXJpdHlDb2RlIjp7Im1pbkxlbmd0aCI6MywibWF4TGVuZ3RoIjo0LCJ2YWxpZGF0b3JzIjpbIk5VTUVSSUMiXSwicmVxdWlyZWQiOnRydWUsInNlbnNpdGl2ZSI6dHJ1ZSwiaGlkZGVuIjpmYWxzZSwiY2xlYXJPbkVycm9yIjp0cnVlfSwiaW5zdGFsbG1lbnROdW1iZXIiOnsidmFsdWUiOiItMSIsInZhbHVlcyI6eyItMSI6IjE6Ojo6OjE4MCJ9LCJyZXF1aXJlZCI6ZmFsc2UsInNlbnNpdGl2ZSI6ZmFsc2UsImhpZGRlbiI6ZmFsc2UsImNsZWFyT25FcnJvciI6ZmFsc2V9LCJmaXJzdEluc3RhbGxtZW50RGVsYXkiOnsidmFsdWUiOiIwIiwidmFsdWVzIjp7IjAiOiIwIn0sInJlcXVpcmVkIjpmYWxzZSwic2Vuc2l0aXZlIjpmYWxzZSwiaGlkZGVuIjpmYWxzZSwiY2xlYXJPbkVycm9yIjpmYWxzZX19fSwiVklTQV9ERUJJVCI6eyJmaWVsZHMiOnsiaW5zdGFsbG1lbnROdW1iZXIiOnsidmFsdWUiOiItMSIsInZhbHVlcyI6eyItMSI6IjE6Ojo6OjE4MCIsIkRZTkFNSUMiOiI6Ojo6OiJ9LCJyZXF1aXJlZCI6dHJ1ZSwic2Vuc2l0aXZlIjpmYWxzZSwiaGlkZGVuIjpmYWxzZSwiY2xlYXJPbkVycm9yIjpmYWxzZX0sImZpcnN0SW5zdGFsbG1lbnREZWxheSI6eyJ2YWx1ZSI6IjAiLCJ2YWx1ZXMiOnsiMCI6IjAiLCJEWU5BTUlDIjoiRFlOQU1JQyJ9LCJyZXF1aXJlZCI6dHJ1ZSwic2Vuc2l0aXZlIjpmYWxzZSwiaGlkZGVuIjpmYWxzZSwiY2xlYXJPbkVycm9yIjpmYWxzZX19LCJjb3B5RnJvbSI6ImNhcmRzLkRFRkFVTFQifSwiRElORVJTIjp7ImZpZWxkcyI6eyJpbnN0YWxsbWVudE51bWJlciI6eyJ2YWx1ZSI6Ii0xIiwidmFsdWVzIjp7Ii0xIjoiMTo6Ojo6MTgwIiwiRFlOQU1JQyI6Ijo6Ojo6In0sInJlcXVpcmVkIjp0cnVlLCJzZW5zaXRpdmUiOmZhbHNlLCJoaWRkZW4iOmZhbHNlLCJjbGVhck9uRXJyb3IiOmZhbHNlfSwiZmlyc3RJbnN0YWxsbWVudERlbGF5Ijp7InZhbHVlIjoiMCIsInZhbHVlcyI6eyIwIjoiMCIsIkRZTkFNSUMiOiJEWU5BTUlDIn0sInJlcXVpcmVkIjp0cnVlLCJzZW5zaXRpdmUiOmZhbHNlLCJoaWRkZW4iOmZhbHNlLCJjbGVhck9uRXJyb3IiOmZhbHNlfX0sImNvcHlGcm9tIjoiY2FyZHMuREVGQVVMVCJ9fSwicGFzc0FjdGl2YXRlZCI6dHJ1ZSwiYXBpUmVzdFZlcnNpb24iOiI0LjAiLCJjb3VudHJ5IjoiUEUifQad02">
            
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
