import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EmprestismoService } from './emprestismo.service';
import { CreateEmprestismoDto } from './dto/create-emprestismo.dto';
import { UpdateEmprestismoDto } from './dto/update-emprestismo.dto';

@Controller('emprestismo')
export class EmprestismoController {
  constructor(private readonly emprestismoService: EmprestismoService) {}

  @Post()
  create(@Body() createEmprestismoDto: CreateEmprestismoDto) {
    return this.emprestismoService.create(createEmprestismoDto);
  }

  @Get()
  findAll() {
    return this.emprestismoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.emprestismoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEmprestismoDto: UpdateEmprestismoDto,
  ) {
    return this.emprestismoService.update(+id, updateEmprestismoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.emprestismoService.remove(+id);
  }
}
