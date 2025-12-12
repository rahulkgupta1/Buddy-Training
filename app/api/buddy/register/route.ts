import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

export async function POST(request: Request) {
  try {
    // In a real application, you would validate the request body here
    // and save the buddy's information to your database
    
    // For now, we'll just log the data and return a success response
    const body = await request.json();
    console.log('Buddy registration data:', body);

    // Initialize Razorpay with your key_id and key_secret
    const razorpay = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || '',
      key_secret: process.env.RAZORPAY_KEY_SECRET || ''
    });

    // Create a Razorpay order
    const payment_capture = 1;
    const amount = 3999 * 100; // amount in paise
    const currency = 'INR';
    const options = {
      amount: amount.toString(),
      currency,
      receipt: `rcpt_${Date.now()}`,
      payment_capture,
      notes: {
        registrationType: 'buddy',
        name: body.fullName,
        email: body.email
      }
    };

    const response = await razorpay.orders.create(options);

    return NextResponse.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
      order_id: response.id
    }, { status: 200 });

  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    return NextResponse.json(
      { error: 'Error creating payment order' },
      { status: 500 }
    );
  }
}
