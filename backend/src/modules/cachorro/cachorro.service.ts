import { Injectable } from '@nestjs/common';
import { CreateCachorroDto } from './dto/create-cachorro.dto';
import { UpdateCachorroDto } from './dto/update-cachorro.dto';

@Injectable()
export class CachorroService {
  create(createCachorroDto: CreateCachorroDto) {
    return 'This action adds a new cachorro';
  }

  findAll() {
    return `This action returns all cachorro`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cachorro`;
  }

  update(id: number, updateCachorroDto: UpdateCachorroDto) {
    return `This action updates a #${id} cachorro`;
  }

  remove(id: number) {
    return `This action removes a #${id} cachorro`;
  }
}
