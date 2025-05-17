import { PartialType } from '@nestjs/mapped-types';
import { CreateEmprestismoDto } from './create-emprestismo.dto';

export class UpdateEmprestismoDto extends PartialType(CreateEmprestismoDto) {}
