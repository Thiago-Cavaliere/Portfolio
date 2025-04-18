import { styled, Grid, Container, Typography, Stack } from "@mui/material";
import Avatar from "../img/Thi.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import StarsBackground from "../components/FundoStar/StarsBackground";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import JavascriptIcon from "@mui/icons-material/Javascript";
import { FaReact } from "react-icons/fa";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { FaGitAlt, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

// Componentes estilizados
const StyledPag = styled("div")(() => ({
  backgroundColor: "black",
  padding: "20px",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "center",
  position: "relative",
  paddingTop: "250px",
}));

const StyledImg = styled("img")(() => ({
  width: "70%",
  borderRadius: "20%",
  marginLeft: 0,
  "@media (max-width: 600px)": {
    width: "50%", // Imagem menor em telas pequenas
  },
}));

const StyledLink = styled("a")(() => ({
  color: "white",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  zIndex: 10,
  "&:hover": {
    color: "lightgray",
  },
}));

const StyledSkills = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
  color: "white",
  marginTop: "40px",
  flexWrap: "wrap",
}));

function Pagina() {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["&lt;Desenvolvedor Full Stack /&gt;"],
      typeSpeed: 100,
      backSpeed: 50,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <StyledPag id="inicio">
      <StarsBackground />
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <StyledImg
              src={Avatar}
              alt="Foto de Thiago Cavaliére, desenvolvedor full stack"
            />
            <Stack direction="row" spacing={4} mt={3}>
              <StyledLink
                href="https://github.com/Thiago-Cavaliere"
                target="_blank"
              >
                <GitHubIcon sx={{ fontSize: 40 }} />
              </StyledLink>
              <StyledLink href="https://wa.me/5532991331252" target="_blank">
                <WhatsAppIcon sx={{ fontSize: 40, color: "#25D366" }} />
              </StyledLink>
              <StyledLink
                href="https://www.linkedin.com/in/thiago-cavali%C3%A9re-b997b523b/"
                target="_blank"
              >
                <LinkedInIcon sx={{ fontSize: 40, color: "#0077B5" }} />
              </StyledLink>
              <StyledLink
                href="mailto:thiago.cavaliere.dev@gmail.com"
                target="_blank"
              >
                <EmailIcon sx={{ fontSize: 40, color: "#0078D4" }} />
              </StyledLink>
            </Stack>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography variant="h1" textAlign="center" color="white">
              Thiago Cavaliére
            </Typography>
            <Typography
              variant="h6"
              textAlign="center"
              color="white"
              padding="90px"
            >
              <span ref={typedElement}></span>
            </Typography>
          </Grid>
        </Grid>

        {/* Seção de Skills */}
        <StyledSkills>
          <HtmlIcon sx={{ fontSize: 110, color: "#E34F26" }} />
          <CssIcon sx={{ fontSize: 100, color: "#1572B6" }} />
          <JavascriptIcon sx={{ fontSize: 90, color: "#F7DF1E" }} />
          <FaReact style={{ fontSize: 70, color: "#61DBFB" }} />
          <FaGitAlt style={{ fontSize: 70, color: "#F1502F" }} />
          <FaBootstrap style={{ fontSize: 70, color: "#7952B3" }} />
          <SiTailwindcss style={{ fontSize: 70, color: "#38BDF8" }} alt="Tail"/>
        </StyledSkills>
      </Container>
    </StyledPag>
  );
}

export default Pagina;
