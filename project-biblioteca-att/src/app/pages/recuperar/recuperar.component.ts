import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MessageModalComponent } from "../../messages/message-modal/message-modal.component";

@Component({
  selector: 'app-recuperar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MessageModalComponent],
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent {
  recuperarForm: FormGroup;

  
  showMessageModal: boolean = false;
  messageType: 'success' | 'error' = 'success';
  messageTitle: string = '';
  messageDescription: string = '';

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
        this.messageType = 'success';
        this.messageTitle = 'Link de Recuperação enviado no email com sucesso!!';
        this.messageDescription = 'Verifique o Email';
        this.showMessageModal = true;
        console.log("ok");
      },
      error: () => {
        this.messageType = 'error';
        this.messageTitle = 'Erro ao enviar link de recuperação';
        this.messageDescription = 'Porfavor cheque se o email esta correto!';
        this.showMessageModal = true;
        console.log("nop");
      }
    });
  }
}
