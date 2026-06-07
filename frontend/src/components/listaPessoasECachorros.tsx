import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItem,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import type { PessoaComCachorros } from "../types/PessoaComCachorros";

type Props = {
  pessoas: PessoaComCachorros[];
};


export default function ListaPessoas({
  pessoas,
}: Props) {
  return (
    <>
      {pessoas.map((pessoa) => (
        <Accordion key={pessoa.id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>
              {pessoa.nome}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <List>
              {pessoa.cachorros.map((cachorro) => (
                <ListItem key={cachorro.id}>
                  {cachorro.nome}
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}