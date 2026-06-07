import { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import FormularioPessoa from "../components/formularioPessoa";
import TabelaPessoas from "../components/TabelaPessoas";
import { BarraLateral } from "../components/barraLateral";
import type { Pessoa } from "../types/Pessoa";

const API = "http://localhost:3000/pessoas";

export default function PaginaPessoa() {
  const [nome, setNome] = useState<string>("");
  const [pessoas, setPessoas] = useState<Pessoa[]>([]);

  // Buscar todas ao carregar a página
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setPessoas(data));
  }, []);

  async function adicionarPessoa() {
    if (!nome.trim()) return;

    const res = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome }),
    });

    const novaPessoa = await res.json();
    setPessoas([...pessoas, novaPessoa]);
    setNome("");
  }

  async function excluirPessoa(id: number) {
    await fetch(`${API}/${id}`, { method: "DELETE" });

    //Ou pode ser
    // const res = await fetch(`${API}/${id}`, {
    //   method: "DELETE",
    // });
    // if (!res.ok) {
    //   alert("Erro ao excluir");
    //   return;
    // }

    setPessoas(pessoas.filter((p) => p.id !== id));
  }

  async function editarPessoa(id: number) {
    const novoNome = prompt("Digite o novo nome");
    if (!novoNome) return;

    const res = await fetch(`${API}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome: novoNome }),
    });

    const pessoaAtualizada = await res.json();
    setPessoas(pessoas.map((p) => (p.id === id ? pessoaAtualizada : p)));
  }

  return (
    <>
      <BarraLateral />

      <Container maxWidth="md" sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom>
          Cadastro de Pessoas
        </Typography>

        <FormularioPessoa
          nome={nome}
          setNome={setNome}
          onSubmit={adicionarPessoa}
          textoBotao="Adicionar"
        />

        <TabelaPessoas
          pessoas={pessoas}
          editarPessoa={editarPessoa}
          excluirPessoa={excluirPessoa}
        />
      </Container>
    </>
  );
}
