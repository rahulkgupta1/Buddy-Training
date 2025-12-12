# 🚀 Quick Start - Payment Integration

## ✅ What's Been Added

Your landing page now includes **complete payment integration** with Razorpay!

### New Features:
- ✅ Enrollment form modal
- ✅ Razorpay payment gateway integration
- ✅ Payment verification with signature validation
- ✅ Success page with next steps
- ✅ Secure API routes for payment handling
- ✅ Responsive form with validation

## 🔧 Setup (5 Minutes)

### 1. Create `.env.local` File

In your project root, create `.env.local`:

```env
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_key_id_here
RAZORPAY_KEY_SECRET=your_key_secret_here
```

### 2. Get Razorpay Keys

1. Visit [Razorpay Dashboard](https://dashboard.razorpay.com/)
2. Sign up (free account)
3. Go to **Settings → API Keys**
4. Copy **Key ID** and **Key Secret**
5. Paste into `.env.local`

### 3. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:3000`

### 4. Test Payment

1. Click any **"Enroll Now"** button
2. Fill in the form:
   - Name: Test User
   - Email: test@example.com
   - Phone: 9999999999
   - Degree: Bachelor's

3. Click **"Pay ₹3,999 & Enroll Now"**

4. Use test card:
   - **Card**: 4111 1111 1111 1111
   - **Expiry**: 12/25
   - **CVV**: 123
   - **OTP**: 123456

5. ✅ Success! You'll be redirected to success page

## 📁 New Files Added

```
app/
├── api/
│   ├── payment/route.ts          # Create Razorpay order
│   └── verify-payment/route.ts   # Verify payment signature
├── success/
│   └── page.tsx                  # Success page after payment
└── page.tsx                       # Updated with modal state

components/
├── EnrollmentForm.tsx             # Form with payment logic
├── EnrollmentModal.tsx            # Modal wrapper
├── HeroSection.tsx                # Updated with modal
├── PricingSection.tsx             # Updated with modal
└── FloatingCTA.tsx                # Updated with modal

.env.example                       # Environment variables template
PAYMENT_SETUP.md                   # Detailed setup guide
QUICK_START.md                     # This file
```

## 🎯 How It Works

### Payment Flow:
```
User clicks "Enroll Now"
    ↓
Modal opens with form
    ↓
User fills form & clicks "Pay"
    ↓
Frontend calls /api/payment
    ↓
Backend creates Razorpay order
    ↓
Razorpay checkout opens
    ↓
User enters payment details
    ↓
Payment processed
    ↓
Frontend calls /api/verify-payment
    ↓
Backend verifies signature
    ↓
Redirect to success page
```

## 🔐 Security Features

- ✅ **Signature Verification**: HMAC-SHA256 validation
- ✅ **No Card Data**: Razorpay handles all payment details
- ✅ **PCI Compliant**: Industry-standard security
- ✅ **Environment Variables**: Secret keys never exposed
- ✅ **HTTPS Ready**: Secure by default

## 📊 Testing Scenarios

### Successful Payment
- Card: 4111 1111 1111 1111
- Result: ✅ Payment successful

### Failed Payment
- Card: 4000 0000 0000 0002
- Result: ❌ Payment declined

### Test Different Cards
See full list in `PAYMENT_SETUP.md`

## 🚀 Going Live

### 1. Switch to Live Mode
```env
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_live_key_id
RAZORPAY_KEY_SECRET=your_live_key_secret
```

### 2. Deploy
```bash
npm run build
npm run start
```

### 3. Monitor
- Check Razorpay dashboard for transactions
- Set up email notifications
- Monitor failed payments

## 💡 Customization

### Change Payment Amount
Edit `components/EnrollmentForm.tsx` line 84:
```typescript
amount: 3999,  // Change to your desired amount
```

### Customize Form Fields
Edit `components/EnrollmentForm.tsx`:
- Add more fields
- Change validation rules
- Update styling

### Customize Success Page
Edit `app/success/page.tsx`:
- Change messaging
- Add more information
- Customize styling

## 🐛 Troubleshooting

### "Payment modal not opening"
- Check browser console for errors
- Verify API keys in `.env.local`
- Ensure Razorpay script loads

### "Payment verification failed"
- Check `RAZORPAY_KEY_SECRET` is correct
- Verify order ID and payment ID match
- Check server logs

### "Form not submitting"
- Verify all required fields are filled
- Check phone number is 10 digits
- Check browser console for validation errors

## 📞 Support

- **Razorpay Docs**: https://razorpay.com/docs/
- **Razorpay Support**: https://razorpay.com/support/
- **API Reference**: https://razorpay.com/docs/api/

## 📚 Next Steps

1. ✅ Set up `.env.local` with Razorpay keys
2. ✅ Test payment flow with test cards
3. ✅ Customize form fields if needed
4. ✅ Add database to store enrollments (optional)
5. ✅ Add email notifications (optional)
6. ✅ Deploy to production
7. ✅ Switch to live API keys
8. ✅ Monitor transactions

## 📝 Useful Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Check for issues
npm audit

# Update dependencies
npm update
```

---

**Ready to go live?** See `PAYMENT_SETUP.md` for detailed production setup instructions.
