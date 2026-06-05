import {
  Paper,
  Stack,
  TextField,
  Button,
} from "@mui/material";

type FormularioPessoaProps = {
  nome: string;
  setNome: React.Dispatch<React.SetStateAction<string>>;
  adicionarPessoa: () => void;
};

export default function FormularioPessoa({
  nome,
  setNome,
  adicionarPessoa,
}: FormularioPessoaProps) {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: 3,
        marginBottom: 4,
      }}
    >
      <Stack
        direction="row"
        spacing={2}
      >
        <TextField
          fullWidth
          label="Nome"
          value={nome}
          onChange={(evento) =>
            setNome(evento.target.value)
          }
        />

        <Button
          variant="contained"
          onClick={adicionarPessoa}
        >
          Adicionar
        </Button>
      </Stack>
    </Paper>
  );
}