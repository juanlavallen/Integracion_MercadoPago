const axios = require('axios');

class PaymentService {
    async createPayment() {
        const url = process.env.API_KEY;

        const body = {
            payer_email: 'test_user_44154164165@testuser.com',
            items: [
                {
                    title: 'Dummy Title',
                    description: 'Dummy description',
                    picture_url: 'http://www.personalwebsite.com/myimage.jpg',
                    category_id: 'category0303',
                    quantity: 1,
                    unit_price: 200
                }
            ],
            back_urls: {
                failure: '/failure',
                pending: '/pending',
                success: '/success'
            }
        };

        const payment = await axios.post(url, body, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
            }
        });

        return payment.data;
    }

    async createSubscription() {
        const url = 'https://api.mercadopago.com/preapproval';

        const body = {
            reason: 'Subscription Example',
            auto_recurring: {
                frequency: 1,
                frequency_type: 'months',
                transaction_amount: 10,
                currency_id: 'ARS'
            },
            back_url: 'https://google.com.ar',
            payer_email: 'test_user_46945293@testuser.com'
        };

        const subscription = await axios.post(url, body, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
            }
        });

        return subscription.data;
    }
}

module.exports = PaymentService;