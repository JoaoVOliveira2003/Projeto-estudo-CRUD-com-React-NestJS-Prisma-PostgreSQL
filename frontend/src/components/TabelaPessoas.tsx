import {
  Paper,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
} from "@mui/material";

import LinhaPessoa from "./LinhaPessoa";

import type { Pessoa } from "../types/Pessoa";

type TabelaPessoasProps = {
  pessoas: Pessoa[];
  editarPessoa: (id: number) => void;
  excluirPessoa: (id: number) => void;
};

export default function TabelaPessoas({
  pessoas,
  editarPessoa,
  excluirPessoa,
}: TabelaPessoasProps) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Ações</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {pessoas.map((pessoa) => (
            <LinhaPessoa
              key={pessoa.id}
              pessoa={pessoa}
              editarPessoa={editarPessoa}
              excluirPessoa={excluirPessoa}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}