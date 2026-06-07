import {Module} from '@nestjs/common'
import { pessoaController } from './pessoa.controller'
import { PessoaService } from './pessoa.service'
import { prismaModule } from '../../prisma/prisma.module'

@Module({
   imports:[prismaModule],
   controllers:[pessoaController],
   providers:[PessoaService]
})

export class PessoaModule{}