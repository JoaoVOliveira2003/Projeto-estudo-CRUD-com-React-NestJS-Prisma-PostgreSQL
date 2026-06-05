import { useState } from "react";

import {
  Container,
  Typography,
} from "@mui/material";

import FormularioPessoa from "../components/formularioPessoa";
import TabelaPessoas from "../components/TabelaPessoas";

import type { Pessoa } from "../types/Pessoa";

export default function PaginaPessoa() {
  const [nome, setNome] = useState<string>("");

  const [pessoas, setPessoas] = useState<Pessoa[]>([
    {
      id: 1,
      nome: "João",
    },
  ]);

  function adicionarPessoa() {
    if (!nome.trim()) return;

    const novaPessoa: Pessoa = {
      id: Date.now(),
      nome,
    };

    setPessoas([...pessoas, novaPessoa]);

    setNome("");
  }

  function excluirPessoa(id: number) {
    setPessoas(
      pessoas.filter(
        (pessoa) => pessoa.id !== id
      )
    );
  }

  function editarPessoa(id: number) {
    const novoNome = prompt(
      "Digite o novo nome"
    );

    if (!novoNome) return;

    setPessoas(pessoas.map((pessoa) =>pessoa.id === id ? {...pessoa,nome: novoNome,}: pessoa)
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography
        variant="h4"
        gutterBottom
      >
        Cadastro de Pessoas
      </Typography>

      <FormularioPessoa
        nome={nome}
        setNome={setNome}
        adicionarPessoa={adicionarPessoa}
      />

      <TabelaPessoas
        pessoas={pessoas}
        editarPessoa={editarPessoa}
        excluirPessoa={excluirPessoa}
      />
    </Container>
  );
}