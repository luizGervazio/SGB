import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-alterar',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './alterar.component.html',
  styleUrls: ['./alterar.component.css']
})
export class AlterarComponent {
  alterarForm: FormGroup;
  token: string = '';
  mensagem = '';
  erro = '';

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
        this.mensagem = 'Senha alterada com sucesso!';
        this.erro = '';
      },
      error: () => {
        this.erro = 'Erro ao alterar a senha.';
        this.mensagem = '';
      }
    });
  }

}
