import type { Cachorro } from "./Cachorro";

export type PessoaComCachorros = {
  id: number;
  nome: string;
  idade: number;
  cachorros: Cachorro[];
};