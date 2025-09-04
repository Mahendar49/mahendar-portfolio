import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
form = {
    name: '',
    email: '',
    message: ''
  };

  sendEmail(e: Event) {
    e.preventDefault();

    emailjs.sendForm(
      'service_i0lby18',
      'template_d8gc56c',
      e.target as HTMLFormElement,
      'tkAAaMrUyBhdFYlHF'
    )
    .then(() => {
      alert('✅ Message sent successfully!');
      this.form = { name: '', email: '', message: '' };
    })
    .catch((err) => {
      console.error('FAILED:', err);
      alert('❌ Failed to send message. Try again later.');
    });
  }
}
