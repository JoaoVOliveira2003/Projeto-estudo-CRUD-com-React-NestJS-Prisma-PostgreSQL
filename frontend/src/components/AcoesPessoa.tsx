import {
  Stack,
  Button,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Delete";
import DeleteIcon from "@mui/icons-material/Delete";

type AcoesPessoaProps = {
  idPessoa: number;
  editarPessoa: (id: number) => void;
  excluirPessoa: (id: number) => void;
};

export default function AcoesPessoa({
  idPessoa,
  editarPessoa,
  excluirPessoa,
}: AcoesPessoaProps) {
  return (
    <Stack
      direction="row"
      spacing={1}
    >
      <Button
        variant="outlined"
        startIcon={<EditIcon />}
        onClick={() => editarPessoa(idPessoa)}
      >
        Editar
      </Button>

      <Button
        variant="contained"
        color="error"
        startIcon={<DeleteIcon />}
        onClick={() => excluirPessoa(idPessoa)}
      >
        Excluir
      </Button>
    </Stack>
  );
}