import { IsBoolean, IsDateString, IsNumber,IsNotEmpty } from 'class-validator';

export class CreateEmprestismoDto {
    @IsNumber()
    @IsNotEmpty()
    livroId: number;

    @IsNumber()
    @IsNotEmpty()
    clienteId: number;

    @IsDateString()
    @IsNotEmpty()
    dataEmprestimo: string;

    @IsDateString()
    @IsNotEmpty()
    dataDevolucao: string;

    @IsBoolean()
    @IsNotEmpty()
    atraso: boolean;

    @IsBoolean()
    @IsNotEmpty()
    statusEmprestismo: boolean;
}
