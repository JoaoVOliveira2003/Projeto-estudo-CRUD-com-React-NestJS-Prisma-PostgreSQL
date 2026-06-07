import { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

export function BarraLateral() {
  const [menuAberto, setMenuAberto] = useState(false);
  const navegar = useNavigate();

  return (
    <>
      <IconButton sx={{ position: "fixed", top: 10, left: 10 }} onClick={() => setMenuAberto(true)}>
        <MenuIcon />
      </IconButton>
      
      <Drawer
        anchor="left"
        open={menuAberto}
        onClose={() => setMenuAberto(false)}
      >

        <List sx={{ width: 250 }}>
          <ListItemButton onClick={() => navegar("/")}>
            <ListItemText primary="Cadastro de Pessoas" />
          </ListItemButton>

          <ListItemButton onClick={() => navegar("/procuraCachorro")}>
            <ListItemText primary="Procurar cachorros" />
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
}
