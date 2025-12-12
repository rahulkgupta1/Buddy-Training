import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { orderId, paymentId, signature } = body

    if (!orderId || !paymentId || !signature) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Verify signature
    const hmac = crypto.createHmac(
      'sha256',
      process.env.RAZORPAY_KEY_SECRET || ''
    )
    hmac.update(`${orderId}|${paymentId}`)
    const generated_signature = hmac.digest('hex')

    if (generated_signature === signature) {
      // Payment verified successfully
      // Here you can save the enrollment to database, send confirmation email, etc.
      
      return NextResponse.json({
        success: true,
        message: 'Payment verified successfully',
        paymentId,
        orderId,
      })
    } else {
      return NextResponse.json(
        { error: 'Payment verification failed' },
        { status: 400 }
      )
    }
  } catch (error) {
    console.error('Verification error:', error)
    return NextResponse.json(
      { error: 'Verification failed' },
      { status: 500 }
    )
  }
}
