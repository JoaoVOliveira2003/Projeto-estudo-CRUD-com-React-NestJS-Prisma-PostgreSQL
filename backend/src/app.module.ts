import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PessoaModule } from  '../src/modules/pessoa/pessoa.module';
import { CachorroModule } from '../src/modules/cachorro/cachorro.module';
import { EnderecoModule } from '../src/modules/endereco/endereco.module';

@Module({
  imports: [PessoaModule, CachorroModule, EnderecoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
