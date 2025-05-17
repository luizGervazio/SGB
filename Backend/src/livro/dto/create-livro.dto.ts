import { Autor } from 'src/autor/entities/autor.entity';
import {
    IsBoolean,
    IsNumber,
    IsString,
    IsArray,
    ValidateNested,
    IsInt,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateLivroDto {
    @IsString()
    titulo: string;

    @IsBoolean()
    disponivel: boolean;  

    @IsArray()
    @IsInt({ each: true })
    autoresIds: number[];

    @IsNumber()
    paginas: number;

    @IsNumber()
    ano: number;

    @IsString()
    genero: string;

    @IsString()
    editora: string;
}
