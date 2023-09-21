import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  email: string = '';
  message: string = '';

  constructor(private apiService: ApiService) {}

  onSubscribe(emailInput: HTMLInputElement): void {
    const email = emailInput.value;
    if (!email) {
      alert('Proszę wprowadzić adres email.');
      return;
    }

    this.apiService.subscribe(email).subscribe({
      next: () => {
        alert('Dziękujemy za subskrypcję!');
        emailInput.value = '';
      },

      error: (error) => {
        if (
          error.error &&
          error.error.errors &&
          error.error.errors.length > 0
        ) {
          alert(error.error.errors[0]);
        } else {
          alert('Wystąpił błąd podczas subskrypcji. Spróbuj ponownie później.');
        }
      },
    });
  }
}
