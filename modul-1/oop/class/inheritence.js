class MailService {
  constructor(sender) {
    this.sender = sender;
  }
  sendMessage(message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }
}
class WhatsAppService extends MailService {
  constructor(sender, times) {
    super(sender);
    this.times = times;
  }
  sendBroadcastMessage(message, receivers) {
    for (const receiver of receivers) {
      console.log(`${this.sender} send message ${message} to ${receiver}`);
    }
  }
}
class EmailService extends MailService {
  sendDelayedMessage(message, receiver, delay) {
    setTimeout(() => {
      console.log(`${this.sender} send message ${message} to ${receiver}`);
    }, delay);
  }
}
whatsapp_broad = new WhatsAppService("Marcel", 100);
whatsapp_broad.sendBroadcastMessage("Selamat Datang!", ["Budi", "Kiana", "Indah"]);
send_email = new EmailService("Marcel");
send_email.sendDelayedMessage("Halo Semua!", "Budi", 5000);
console.log(whatsapp_broad instanceof WhatsAppService);
console.log(whatsapp_broad instanceof EmailService);
