import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import { HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isDarkMode: boolean = false;

  ngOnInit(): void {
    // Load dark mode preference from localStorage on page load
    const savedTheme = localStorage.getItem('darkMode');
    this.isDarkMode = savedTheme === 'true';

    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    }
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;

    // Update DOM class
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }

    // Save preference
    localStorage.setItem('darkMode', this.isDarkMode.toString());
  }
  sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_i0lby18', 'template_d8gc56c', e.target as HTMLFormElement, 'tkAAaMrUyBhdFYlHF')
      .then(() => alert('Message sent successfully!'))
      .catch(error => alert('Failed to send message: ' + JSON.stringify(error)));
  }
}