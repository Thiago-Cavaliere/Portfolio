import { styled, Grid, Container, Typography, Stack } from "@mui/material";
import Avatar from "../img/Thi.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import StarsBackground from "../components/FundoStar/StarsBackground";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { FaGitAlt, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { FaGithub } from "react-icons/fa";


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
  paddingTop: "200px",
}));

const StyledImg = styled("img")(() => ({
  width: "70%",
  borderRadius: "20%",
  display: "block",
  "@media (max-width: 600px)": {
    width: "50%",
    margin: "0 auto",
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
  marginTop: "150px",
  flexWrap: "wrap",
}));

function Pagina() {
  const typedElement = useRef(null);
  

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["&lt;Desenvolvedor Front End /&gt;"],
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
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <StyledImg
              src={Avatar}
              alt="Foto de Thiago Cavaliére, desenvolvedor"
            />
            <Stack direction="row" spacing={4} mt={3}>
              <StyledLink
                href="https://github.com/Thiago-Cavaliere"
                target="_blank"
              >
                <GitHubIcon sx={{ fontSize: 40 }} />
              </StyledLink>
              <StyledLink href="https://wa.me/5532999691252" target="_blank">
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
            <Typography variant="h2" textAlign="center" color="white">
              Thiago Cavaliére
            </Typography>
            <Typography
              variant="h6"
              textAlign="center"
              color="white"
              padding="10px"
            >
              <span ref={typedElement}></span>
            </Typography>
          </Grid>
        </Grid>

        {/* Seção de Skills */}
        <StyledSkills>
          <Stack alignItems="center">
            <FaHtml5 style={{ fontSize: 70, color: "#E34F26" }} />
            <Typography sx={{ color: "#E34F26", fontWeight: "bold" }}>
              HTML
            </Typography>
          </Stack>

          <Stack alignItems="center">
            <FaCss3Alt style={{ fontSize: 70, color: "#1572B6" }} />
            <Typography sx={{ color: "#1572B6", fontWeight: "bold" }}>
              CSS
            </Typography>
          </Stack>

          <Stack alignItems="center">
            <FaJsSquare style={{ fontSize: 70, color: "#F7DF1E" }} />
            <Typography sx={{ color: "#F7DF1E", fontWeight: "bold" }}>
              JavaScript
            </Typography>
          </Stack>

          <Stack alignItems="center">
            <FaReact style={{ fontSize: 70, color: "#61DBFB" }} />
            <Typography sx={{ color: "#61DBFB", fontWeight: "bold" }}>
              React
            </Typography>
          </Stack>
          <Stack alignItems="center">
            <SiNextdotjs style={{ fontSize: 70, color: "white" }} />
            <Typography sx={{ color: "white", fontWeight: "bold" }}>
              Next.js
            </Typography>
          </Stack>
          <Stack alignItems="center">
            <FaGitAlt style={{ fontSize: 70, color: "#F1502F" }} />
            <Typography sx={{ color: "#F1502F", fontWeight: "bold" }}>
              Git
            </Typography>
          </Stack>
          <Stack alignItems="center">
            <FaGithub style={{ fontSize: 70, color: "white" }} />
            <Typography sx={{ color: "white", fontWeight: "bold" }}>
              GitHub
            </Typography>
          </Stack>
          <Stack alignItems="center">
            <FaBootstrap style={{ fontSize: 70, color: "#7952B3" }} />
            <Typography sx={{ color: "#7952B3", fontWeight: "bold" }}>
              Bootstrap
            </Typography>
          </Stack>
          <Stack alignItems="center">
            <SiTailwindcss style={{ fontSize: 70, color: "#38BDF8" }} />
            <Typography sx={{ color: "#38BDF8", fontWeight: "bold" }}>
              Tailwind
            </Typography>
          </Stack>
        </StyledSkills>
      </Container>
    </StyledPag>
  );
}

export default Pagina;
