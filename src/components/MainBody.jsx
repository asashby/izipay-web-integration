
import React, { useEffect } from 'react';
import { useMercadopago } from 'react-sdk-mercadopago';

const MainBody = () => {
    
    const mercadopago = useMercadopago.v2('YOUR_PUBLIC_KEY', {
        locale: 'en-US'
    });

    useEffect(() => {
        if (mercadopago) {
            mercadopago.checkout({
                preference: {
                    id: 'YOUR_PREFERENCE_ID'
                },
                render: {
                    container: '.cho-container',
                    label: 'Pay',
                }
            })
        }
    }, [mercadopago])

    return (
        <div>
            <div class="cho-container" />
        </div>
    )

}
export default MainBody;