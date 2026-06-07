import { useState } from "react";
import { Container, Typography } from "@mui/material";

import FormularioPessoa from "../components/formularioPessoa";
import ListaPessoas from "../components/listaPessoasECachorros";
import { BarraLateral } from "../components/barraLateral";
import type { PessoaComCachorros } from "../types/PessoaComCachorros";

const API = "http://localhost:3000/pessoas";

export default function PaginaPessoa() {
  const [nome, setNome] = useState("");
  const [pessoas, setPessoas] = useState<PessoaComCachorros[]>([]);

  async function procurarCachorro(nome: string) {
    if (!nome.trim()) return;

    const response = await fetch(
      `${API}/buscarPorNome?nome=${encodeURIComponent(nome)}`
    );

    const resultado = await response.json();

    setPessoas(resultado);
  }

  return (
    <>
      <BarraLateral />

      <Container maxWidth="md" sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom>
          Procurar cachorros através do nome da pessoa
        </Typography>

        <FormularioPessoa
          nome={nome}
          setNome={setNome}
          onSubmit={procurarCachorro}
          textoBotao="Procurar"
        />

        <ListaPessoas pessoas={pessoas} />
      </Container>
    </>
  );
}