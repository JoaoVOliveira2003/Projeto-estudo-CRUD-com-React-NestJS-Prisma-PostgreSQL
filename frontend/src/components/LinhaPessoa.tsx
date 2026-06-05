import {
  TableRow,
  TableCell,
} from "@mui/material";

import AcoesPessoa from "./AcoesPessoa";

import type { Pessoa } from "../types/Pessoa";

type LinhaPessoaProps = {
  pessoa: Pessoa;
  editarPessoa: (id: number) => void;
  excluirPessoa: (id: number) => void;
};

export default function LinhaPessoa({
  pessoa,
  editarPessoa,
  excluirPessoa,
}: LinhaPessoaProps) {
  return (
    <TableRow>
      <TableCell>
        {pessoa.id}
      </TableCell>

      <TableCell>
        {pessoa.nome}
      </TableCell>

      <TableCell>
        <AcoesPessoa
          idPessoa={pessoa.id}
          editarPessoa={editarPessoa}
          excluirPessoa={excluirPessoa}
        />
      </TableCell>
    </TableRow>
  );
}