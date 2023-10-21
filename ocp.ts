namespace ocp {
  class EmailService {
    public sendEmail(email: string, message: string): void {
      console.log(`Email Sent: ${message} to ${email}`);
    }
  }


  class SMSService {
    public sendSMS(phone: string, message: string): void {
      console.log(`SMS Sent: ${message} to ${phone}`);
    }
  }

  class NotificationService {
    protected _emailService: EmailService;
    constructor() {
      this._emailService = new EmailService();
    }
    public sendNotification(email: string, message: string) {
      this._emailService.sendEmail(email, message);
    }
  }

  class OrderNotificationService extends NotificationService {
    protected _smsService: SMSService;
    constructor() {
      super();
      this._smsService = new SMSService();
    }

    sendOrderNotification(email: string, emailmessage: string): void;
    sendOrderNotification(
      email: string,
      emailmessage: string,
      phone: string,
      smsmessage: string
    ): void;
    sendOrderNotification(
      email: string,
      emailmessage: string,
      phone?: string,
      smsmessage?: string
    ) {
      this._emailService.sendEmail(email, emailmessage);
      if (phone != undefined && smsmessage != undefined) {
        this._smsService.sendSMS(phone, smsmessage);
      }
    }
  }

  const main = () => {
    const notificationService = new OrderNotificationService();
    notificationService.sendOrderNotification(
      "hello@example.com",
      "Generic Notification",
      "+237655388662",
      "Yoo"
    );
  };

  main();
}
