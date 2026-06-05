import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PessoaService {
  constructor(private prisma: PrismaService) {}

  async buscarTodos() {
    return this.prisma.pessoa.findMany();
  }

  async criar(nome: string) {
    return this.prisma.pessoa.create({
      data: { nome },
    });
  }

  async excluir(id: number) {
    return this.prisma.pessoa.delete({
      where: { id },
    });
  }

  async update(id: number, data: { nome?: string }) {
    return this.prisma.pessoa.update({
      where: { id },
      data,
    });
  }

  async buscarComJ() {
    return this.prisma.pessoa.findMany({
      where: { nome: { startsWith: 'J' } },
    });
  }
}
