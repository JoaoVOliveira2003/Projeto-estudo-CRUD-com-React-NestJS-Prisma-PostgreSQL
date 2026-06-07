import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Patch,
  Query
} from '@nestjs/common';
import { PessoaService } from './pessoa.service';

@Controller('pessoas')
export class pessoaController {
  constructor(private readonly pessoaService: PessoaService) {}

  @Get()
  buscarTodos() {
    return this.pessoaService.buscarTodos();
  }

  @Get('/todosDados') buscarTodosOsDados() {
    return this.pessoaService.buscarTodosDados();
  }

  @Get('comJ') buscarComJ() {
    return this.pessoaService.buscarComJ();
  }

  @Get('todosOsCachorrosDeFulano/:id')
  todosCachorrosDeFulanoID(@Param('id') id: string) {
    return this.pessoaService.buscarTodosCachorrosDeFulanoID(Number(id));
  }

@Get('buscarPorNome')
buscarPorNome(@Query('nome') nome: string) {
  return this.pessoaService.buscarPorNome(nome);
}


  @Post()
  criar(@Body() body: { nome: string }) {
    return this.pessoaService.criar(body.nome);
  }

  @Delete(':id')
  excluir(@Param('id') id: string) {
    return this.pessoaService.excluir(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: { nome?: string }) {
    return this.pessoaService.update(Number(id), body);
  }
}
