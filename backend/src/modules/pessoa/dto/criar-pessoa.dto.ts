import { IsString } from 'class-validator';

export class CriarPessoaDto{
   @IsString()
   nome!:string;
}