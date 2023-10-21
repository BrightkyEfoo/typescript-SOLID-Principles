namespace isp {
  interface PaymentProvider {
    getPaymentCommission: () => number;
    processPayment: () => string;
  }

  interface PaymentValidator {
    validate: () => boolean;
  }

  interface PaymentVerifier {
    verifyPayment: () => boolean;
  }
  class CreditCardPaymentProvider
    implements PaymentProvider, PaymentValidator, PaymentVerifier
  {
    validate() {
      // Payment is validated
      console.log("Payment Card Validated");
      return true;
    }
    getPaymentCommission() {
      // Commission is returned
      return 10;
    }
    processPayment() {
      // Payment processed
      console.log("Payment Processed");
      return "Payment Fingerprint";
    }
    verifyPayment() {
      // No verify Payment API exist
      // Return false to just implement the Payment Provider
      return false;
    }
  }

  class WalletPaymentProvider implements PaymentProvider, PaymentVerifier {
    getPaymentCommission() {
      // Commission is returned
      return 5;
    }
    processPayment() {
      // Payment processed
      console.log("Payment Processed");
      return "Payment Fingerprint";
    }
    verifyPayment() {
      // Payment verification does exist on Wallet Payment Provider
      console.log("Payment Verified");
      return false;
    }
  }
}
