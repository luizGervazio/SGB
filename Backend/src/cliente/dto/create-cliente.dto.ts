import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateClienteDto {
    @IsString()
    @IsNotEmpty()
    nome: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    telefone: string;

    @IsString()
    @IsNotEmpty()
    cpf: string;

    @IsString()
    @IsNotEmpty()
    endereco: string;

    @IsString()
    @IsNotEmpty()
    numero: string;

    @IsString()
    @IsNotEmpty()
    cidade: string;

    @IsString()
    @IsNotEmpty()
    status: string;
}
