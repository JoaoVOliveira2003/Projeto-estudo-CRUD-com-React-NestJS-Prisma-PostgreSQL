import { Module } from '@nestjs/common';
import { CachorroService } from './cachorro.service';
import { CachorroController } from './cachorro.controller';

@Module({
  controllers: [CachorroController],
  providers: [CachorroService],
})
export class CachorroModule {}
