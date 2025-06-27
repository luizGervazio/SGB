import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageModalComponent } from "../../messages/message-modal/message-modal.component";

@Component({
  selector: 'app-alterar',
  imports: [CommonModule, ReactiveFormsModule, MessageModalComponent],
  templateUrl: './alterar.component.html',
  styleUrls: ['./alterar.component.css']
})
export class AlterarComponent {
  alterarForm: FormGroup;
  token: string = '';
  mensagem = '';
  erro = '';

  showMessageModal: boolean = false;
  messageType: 'success' | 'error' = 'success';
  messageTitle: string = '';
  messageDescription: string = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    this.alterarForm = this.fb.group({
      token: ['', Validators.required],
      novaSenha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'] || '';
    });
  }

  alterarSenha() {
    const { token, novaSenha } = this.alterarForm.value;

    this.authService.resetPassword(token, novaSenha).subscribe({
      next: () => {
        this.messageType = 'success';
        this.messageTitle = 'Sua senha foi alterada com sucesso!!';
        this.messageDescription = 'Realize o login';
        this.showMessageModal = true;
        this.mensagem = 'Senha alterada com sucesso!';
        this.erro = '';
        this.router.navigate(['/']);
      },
      error: () => {
        this.messageType = 'error';
        this.messageTitle = 'Erro ao alterar a senha!';
        this.messageDescription = 'Porfavor verifique se o token colocado está expirado!';
        this.showMessageModal = true;
        this.erro = 'Erro ao alterar a senha.';
        this.mensagem = '';
      }
    });
  }

}
