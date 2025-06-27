import { Autor } from 'src/autor/entities/autor.entity';
import {
    IsBoolean,
    IsNumber,
    IsString,
    IsArray,
    ValidateNested,
    IsInt,
    IsNotEmpty,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateLivroDto {
    @IsString()
    @IsNotEmpty()
    titulo: string;
    
    @IsBoolean()
    @IsNotEmpty()
    disponivel: boolean;  

    @IsArray()
    @IsNotEmpty()
    @IsInt({ each: true })
    autoresIds: number[];

    @IsNumber()
    @IsNotEmpty()
    paginas: number;

    @IsNumber()
    ano: number;

    @IsString()
    @IsNotEmpty()
    genero: string;

    @IsString()
    @IsNotEmpty()
    editora: string;
}
