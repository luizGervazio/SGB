import { IsString } from 'class-validator';

export class CreateAutorDto {
    @IsString()
    nome: string;
}
