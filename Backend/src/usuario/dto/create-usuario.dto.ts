import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUsuarioDto {
    @IsEmail()
    email: string;

    @IsOptional()
    @IsString()
    nome?: string;

    @IsNotEmpty()
    @IsString()
    senha: string;

    @IsString()
    tipo: string;
}
