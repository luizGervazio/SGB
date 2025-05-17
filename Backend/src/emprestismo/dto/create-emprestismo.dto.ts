import { IsBoolean, IsDateString, IsNumber } from 'class-validator';

export class CreateEmprestismoDto {
    @IsNumber()
    livroId: number;

    @IsNumber()
    clienteId: number;

    @IsDateString()
    dataEmprestimo: string;

    @IsDateString()
    dataDevolucao: string;

    @IsBoolean()
    atraso: boolean;

    @IsBoolean()
    statusEmprestismo: boolean;
}
