# Payment Integration Setup Guide

This guide will help you set up Razorpay payment integration for the PANHA Buddy Training landing page.

## 🚀 Quick Start

### Step 1: Create Razorpay Account

1. Go to [Razorpay Dashboard](https://dashboard.razorpay.com/)
2. Sign up for a free account
3. Complete KYC verification (required for live payments)
4. Navigate to **Settings → API Keys**

### Step 2: Get Your API Keys

1. In the Razorpay dashboard, go to **Settings → API Keys**
2. Copy your **Key ID** (public key)
3. Copy your **Key Secret** (private key)

### Step 3: Configure Environment Variables

1. Create a `.env.local` file in the project root:
```bash
cp .env.example .env.local
```

2. Add your Razorpay keys:
```env
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_key_id_here
RAZORPAY_KEY_SECRET=your_key_secret_here
```

### Step 4: Install Dependencies

```bash
npm install razorpay axios
```

### Step 5: Test Payment Flow

1. Start the development server:
```bash
npm run dev
```

2. Click "Enroll Now" button
3. Fill in the enrollment form
4. Use Razorpay test credentials:
   - **Card Number**: 4111 1111 1111 1111
   - **Expiry**: Any future date (e.g., 12/25)
   - **CVV**: Any 3 digits (e.g., 123)
   - **OTP**: 123456

## 📋 Payment Flow

### 1. User Enrollment
- User clicks "Enroll Now" button
- Modal opens with enrollment form
- User fills in: Name, Email, Phone, Degree Level

### 2. Order Creation
- Form submission triggers `/api/payment` endpoint
- Backend creates Razorpay order
- Returns order ID to frontend

### 3. Payment Processing
- Razorpay checkout opens
- User enters payment details
- Razorpay processes payment

### 4. Payment Verification
- After successful payment, Razorpay returns payment details
- Frontend calls `/api/verify-payment` endpoint
- Backend verifies payment signature
- User is redirected to success page

## 🔐 Security Best Practices

### Frontend Security
- ✅ Public key is exposed (safe)
- ✅ Payment details never touch your server
- ✅ Razorpay handles PCI compliance

### Backend Security
- ✅ Secret key is kept private in `.env.local`
- ✅ Payment verification uses signature validation
- ✅ Never expose secret key in frontend code

### Signature Verification
The payment verification uses HMAC-SHA256 signature:
```
signature = HMAC-SHA256(order_id|payment_id, secret_key)
```

This ensures payment authenticity and prevents tampering.

## 💾 Database Integration (Optional)

To store enrollments in a database:

1. **Install database client**:
```bash
npm install prisma @prisma/client
npm install -D prisma
```

2. **Initialize Prisma**:
```bash
npx prisma init
```

3. **Update schema** (`prisma/schema.prisma`):
```prisma
model Enrollment {
  id        String   @id @default(cuid())
  name      String
  email     String   @unique
  phone     String
  degree    String
  paymentId String   @unique
  orderId   String
  status    String   @default("completed")
  createdAt DateTime @default(now())
}
```

4. **Update verification API** to save enrollment:
```typescript
// In /api/verify-payment
await prisma.enrollment.create({
  data: {
    name: body.name,
    email: body.email,
    phone: body.phone,
    degree: body.degree,
    paymentId,
    orderId,
  },
})
```

## 📧 Email Notifications (Optional)

To send confirmation emails using SendGrid:

1. **Install SendGrid**:
```bash
npm install @sendgrid/mail
```

2. **Add to `.env.local`**:
```env
SENDGRID_API_KEY=your_sendgrid_api_key
SENDGRID_FROM_EMAIL=noreply@panha.com
```

3. **Create email service** (`lib/email.ts`):
```typescript
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '')

export async function sendConfirmationEmail(email: string, name: string) {
  await sgMail.send({
    to: email,
    from: process.env.SENDGRID_FROM_EMAIL || '',
    subject: 'Welcome to PANHA Buddy Training!',
    html: `<h1>Welcome ${name}!</h1><p>Your enrollment is confirmed...</p>`,
  })
}
```

## 🧪 Testing

### Test Cards (Razorpay Sandbox)

**Successful Payment:**
- Card: 4111 1111 1111 1111
- Expiry: 12/25
- CVV: 123
- OTP: 123456

**Failed Payment:**
- Card: 4000 0000 0000 0002
- Expiry: 12/25
- CVV: 123
- OTP: 123456

### Test Webhook (Optional)

Razorpay can send webhooks for payment events:

1. Go to **Settings → Webhooks**
2. Add webhook URL: `https://yourdomain.com/api/webhook`
3. Select events: `payment.authorized`, `payment.failed`

## 🚀 Going Live

### 1. Switch to Live Mode
- In Razorpay dashboard, toggle to **Live Mode**
- Get live API keys
- Update `.env.local` with live keys

### 2. Update Amount (if needed)
- Current: ₹3,999
- Edit in `EnrollmentForm.tsx` line 84

### 3. Deploy
```bash
npm run build
npm run start
```

### 4. Monitor Payments
- Check Razorpay dashboard for all transactions
- Set up email notifications for payments
- Monitor failed payments

## 📊 Monitoring & Analytics

### Track Payments
- Razorpay Dashboard → Payments
- Filter by date, status, amount
- Export transaction reports

### Set Alerts
- Failed payments
- High-value transactions
- Suspicious activity

## ❓ Troubleshooting

### Payment Not Processing
- Check API keys are correct
- Verify `.env.local` is loaded
- Check browser console for errors

### Signature Verification Failed
- Ensure `RAZORPAY_KEY_SECRET` is correct
- Verify order ID and payment ID match
- Check signature calculation

### Modal Not Opening
- Verify Razorpay script loads
- Check browser console for errors
- Ensure form validation passes

## 📞 Support

- **Razorpay Support**: https://razorpay.com/support/
- **Documentation**: https://razorpay.com/docs/
- **API Reference**: https://razorpay.com/docs/api/

## 📝 Additional Resources

- [Razorpay Integration Guide](https://razorpay.com/docs/integration/)
- [Payment Gateway Best Practices](https://razorpay.com/docs/security/)
- [Webhook Documentation](https://razorpay.com/docs/webhooks/)

---

**Last Updated**: November 2024
