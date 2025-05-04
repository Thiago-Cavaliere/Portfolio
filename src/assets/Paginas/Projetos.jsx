import {
  Container,
  Paper,
  styled,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import StarsBackground from "../components/FundoStar/StarsBackground";

// Estilos
const StyledPag = styled("div")(({ theme }) => ({
  backgroundColor: "black",
  padding: "100px 50px",
  minHeight: "100vh",
  position: "relative",
  zIndex: 2,
  [theme.breakpoints.down("md")]: {
    padding: "60px 20px",
  },
}));

const StarsWrapper = styled("div")(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1,
}));

const CardProjeto = styled(Paper)(() => ({
  backgroundColor: "#1e1e1e",
  color: "#fff",
  overflow: "hidden",
  borderRadius: "16px",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.03)",
  },
}));

const VideoProjetoStyled = styled("video")(() => ({
  width: "100%",
  height: "200px",
  objectFit: "cover",
}));

// Lista com 8 projetos, cada um com seu vídeo local
const projetos = [
  {
    titulo: "Pokédex",
    video: "/Pokedex.mp4",
    descricao:
      "Tecnologias Utilizadas: React+Vite/React-Router/Consumo de API.",
    link: "https://github.com/Thiago-Cavaliere/Pokedex/",
    link2: "https://pokedex-nine-lake.vercel.app/",
  },
  {
    titulo: "Conta de Banco Simples",
    video: "/10.04.2025_07.10.38_REC.mp4",
    descricao:
      "Simulação básica de uma conta bancária. Tecnologia Utilizadas: HTML/CSS/JS.",
    link: "https://github.com/Thiago-Cavaliere/ContaDeBancoSimples",
    link2: "https://conta-de-banco-simples-zeta.vercel.app/",
  },

  {
    titulo: "Projeto GymPage (Página de Academia)",
    video: "/GymPage.mp4",
    descricao: "Site de academia. Tecnologia Utilizadas: React/Vite.",
    link: "https://github.com/Thiago-Cavaliere/GymPage",
    link2: "https://gym-page-eight.vercel.app/",
  },
  {
    titulo: "Calculadora IMC",
    video: "/IMC.mp4",
    descricao:
      "Calculadora de Índice de massa corporal. Tecnologias Utilizadas: HTML/CSS/JS.",
    link: "https://github.com/Thiago-Cavaliere/ProjetoIMC",
    link2: "https://projeto-imc-phi.vercel.app/",
  },
  {
    titulo: "E-Commerce de um site de Moto",
    video: "/E-CommerceMotoreira.mp4",
    descricao:
      "Site de vendas de peças de moto. Tecnologias Utilizadas: HTML,CSS,JS e React+Vite.",
    link: "https://github.com/Thiago-Cavaliere/E-Commece-Motoreira",
    link2: "https://e-commece-motoreira.vercel.app/",
  },
  {
    titulo: "Jogo de Browser (RPG)",
    video: "/RPG.mp4",
    descricao:
      "RPG de browser com React. tecnologias Utilizadas: React+Vite React/Router.",
    link: "https://github.com/Thiago-Cavaliere/Game-RPG",
    link2: "https://game-rpg-tau.vercel.app/",
  },
  {
    titulo: "Ready to Shop (Loja de Roupas)",
    video: "/Ready.mp4",
    descricao:
      "Landing page de loja de roupas. tecnologias Utilizadas: HTML/CSS/JS/REACT.",
    link: "https://github.com/Thiago-Cavaliere/Shop-Sport",
    link2: "https://shop-sport-rho.vercel.app/",
  },

  // {
  //   titulo: "Formulário de Contato",
  //   video: "/videos/projeto8.mp4",
  //   descricao: "Formulário com validação de campos.",
  //   link: "https://github.com/Thiago-Cavaliere/FormularioContato",
  // },
];

export default function Projetos() {
  return (
    <StyledPag id="projetos">
      <StarsWrapper>
        <StarsBackground />
      </StarsWrapper>

      <Container maxWidth="lg" style={{ position: "relative", zIndex: 2 }}>
        <Typography variant="h3" align="center" gutterBottom color="white">
          Meus Projetos
        </Typography>

        <Grid container spacing={4}>
          {projetos.map((projeto, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <CardProjeto elevation={6}>
                <VideoProjetoStyled
                  src={projeto.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div style={{ padding: "16px" }}>
                  <Typography variant="h6" gutterBottom>
                    {projeto.titulo}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {projeto.descricao}
                  </Typography>
                  <Button
                    variant="outlined"
                    color="primary"
                    href={projeto.link}
                    target="_blank"
                    sx={{ mt: 1 }}
                  >
                    Ver Projeto GitHub
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    href={projeto.link2}
                    target="_blank"
                    sx={{ mt: 1 }}
                  >
                    Link do projeto
                  </Button>
                </div>
              </CardProjeto>
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyledPag>
  );
}
