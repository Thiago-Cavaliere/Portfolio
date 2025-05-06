import { MenuItem, AppBar, Toolbar, styled } from "@mui/material";
import { Link } from "react-scroll";

const NavBar = () => {
  const StyledToolbar = styled(Toolbar)(() => ({
    backgroundColor: "black",
    display: "flex",
    justifyContent: "space-between",
  }));

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: 1201, boxShadow: "0 10px 20px rgba(57, 75, 180, 0.4)" }}
    >
      <StyledToolbar>
        {/* Links de navegação visíveis em todas as telas */}
        <div className="nav-links" style={{ display: "flex", gap: "20px" }}>
          <MenuItem>
            <Link
              to="inicio"
              smooth={true}
              duration={500}
              style={{ color: "white", textDecoration: "none" }}
            >
              Início
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="sobre"
              smooth={true}
              duration={500}
              style={{ color: "white", textDecoration: "none" }}
            >
              Sobre
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="projetos"
              smooth={true}
              duration={500}
              style={{ color: "white", textDecoration: "none" }}
            >
              Projetos
            </Link>
          </MenuItem>
          <MenuItem>
            <a
              href="/Curriculum_Estagio.pdf" // Substitua pelo caminho real do seu arquivo PDF
              download="Curriculo_Thiago_Cavaliere" // Nome do arquivo para o download
              style={{ color: "white", textDecoration: "none" }}
            >
              Download do CV
            </a>
          </MenuItem>
        </div>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;
