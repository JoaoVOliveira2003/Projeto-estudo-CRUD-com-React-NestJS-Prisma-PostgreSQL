import{Controller,Get,Post,Delete,Body,Param, Patch} from '@nestjs/common'
import { PessoaService } from './pessoa.service'

@Controller('pessoas')

export class pessoaController{
  constructor(private readonly pessoaService: PessoaService,) {}

  @Get()
  buscarTodos(){return this.pessoaService.buscarTodos()}

  @Get('comJ')
    buscarComJ() { 
  return this.pessoaService.buscarComJ(); 
  }


  @Post()
  criar(@Body() body:{nome:string}){
    return this.pessoaService.criar(body.nome)
  }

  @Delete(':id')
  excluir(@Param('id') id:string){return this.pessoaService.excluir(Number(id))}

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: { nome?: string }) {
    return this.pessoaService.update(Number(id), body);
  }

}
