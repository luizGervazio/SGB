import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { AuthBrandComponent } from '../../components/auth-brand/auth-brand.component';
import { MessageModalComponent } from "../../messages/message-modal/message-modal.component";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, LucideAngularModule, AuthBrandComponent, MessageModalComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showMessageModal = false;
  messageType: 'success' | 'error' = 'error';
  messageTitle = '';
  messageDescription = '';
  loginForm: FormGroup;

  constructor(
  private fb: FormBuilder,
  private router: Router,
  private authService: AuthService
) {
  this.loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', Validators.required]
  });
}

  login() {
  if (this.loginForm.invalid) {
    this.messageType = 'error';
    this.messageTitle = 'Erro no login';
    this.messageDescription = 'Preencha os campos corretamente.';
    this.showMessageModal = true;
    return;
  }

  const { email, senha } = this.loginForm.value;

  this.authService.login(email, senha).subscribe({
    next: () => {
      this.router.navigate(['/livros']);
    },
    error: (err) => {
      this.messageType = 'error';
      this.messageTitle = 'Falha no login';
      this.messageDescription = err.error.message || 'Email ou senha inválidos.';
      this.showMessageModal = true;
    }
  });
}

}
