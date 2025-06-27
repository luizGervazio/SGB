import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent {
  recuperarForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.recuperarForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  enviarLink() {
    if (this.recuperarForm.invalid) return;

    const email = this.recuperarForm.value.email;

    this.authService.forgotPassword(email).subscribe({
      next: () => {
        alert('Link de recuperação enviado para o e-mail!');
        this.router.navigate(['/']);
      },
      error: () => {
        alert('Erro ao enviar link de recuperação.');
      }
    });
  }
}
