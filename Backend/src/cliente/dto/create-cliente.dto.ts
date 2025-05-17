import { IsEmail, IsString } from 'class-validator';

export class CreateClienteDto {
    @IsString()
    nome: string;

    @IsEmail()
    email: string;

    @IsString()
    telefone: string;

    @IsString()
    cpf: string;

    @IsString()
    endereco: string;

    @IsString()
    numero: string;

    @IsString()
    cidade: string;

    @IsString()
    status: string;
}
