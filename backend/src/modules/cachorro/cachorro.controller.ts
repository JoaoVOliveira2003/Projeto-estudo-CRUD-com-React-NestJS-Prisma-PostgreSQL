import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CachorroService } from './cachorro.service';
import { CreateCachorroDto } from './dto/create-cachorro.dto';
import { UpdateCachorroDto } from './dto/update-cachorro.dto';

@Controller('cachorro')
export class CachorroController {
  constructor(private readonly cachorroService: CachorroService) {}

  @Post()
  create(@Body() createCachorroDto: CreateCachorroDto) {
    return this.cachorroService.create(createCachorroDto);
  }

  @Get()
  findAll() {
    return this.cachorroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cachorroService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCachorroDto: UpdateCachorroDto) {
    return this.cachorroService.update(+id, updateCachorroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cachorroService.remove(+id);
  }
}
