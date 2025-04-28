import {
  styled,
  Typography,
  Container,
  Grid,
  Box,
  Card,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const certificateImages = [
  {
    id: 1,
    src: "/certificados/Curso de JavaScript e TypeScript do basico ao avançado_page-0001.jpg",
  },
  {
    id: 2,
    src: "/certificados/engenharia de prompt criando prompts eficazes para ia generativa.png",
  },
  {
    id: 3,
    src: "/certificados/excel domine o editor de planilhas.png",
  },
  {
    id: 4,
    src: "/certificados/HTML e CSS.png",
  },
  {
    id: 5,
    src: "/certificados/IA generativa no front end.png",
  },
  {
    id: 6,
    src: "/certificados/Logica de programação.png",
  },
  {
    id: 7,
    src: "/certificados/inteligencia_artificial_generativa_turma_fev2025_certificado_page-0001.jpg",
  },
  {
    id: 8,
    src: "/certificados/inteligencia_artificial_para_simplificar_o_dia_a_dia_turma_fev2025_certificado_page-0001.jpg",
  },
  {
    id: 9,
    src: "/certificados/Logica de programação.png",
  },
];

// Estilização geral
const StyledSobre = styled("div")(() => ({
  backgroundColor: "white",
  padding: "20px",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Sobre = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextCertificate = () => {
    setCurrentIndex((prev) =>
      prev < certificateImages.length - 1 ? prev + 1 : 0
    );
  };

  const prevCertificate = () => {
    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : certificateImages.length - 1
    );
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <StyledSobre id="sobre">
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {/* Carrossel */}
          <Grid item xs={12} md={5}>
            <Typography variant="h4" align="center" gutterBottom>
              Certificados
            </Typography>
            <div className="carousel">
              <button className="arrow prev" onClick={prevCertificate}>
                &#8592;
              </button>

              <div className="carousel-window">
                <div
                  className="carousel-track"
                  style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                  }}
                >
                  {certificateImages.map((cert) => (
                    <div
                      className="carousel-item"
                      key={cert.id}
                      onClick={handleOpenModal}
                    >
                      <Card sx={{ maxWidth: 300, margin: "0 auto" }}>
                        <CardMedia
                          component="img"
                          image={cert.src}
                          alt={`Certificado ${cert.id}`}
                        />
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
              <button className="arrow next" onClick={nextCertificate}>
                &#8594;
              </button>
            </div>
          </Grid>

          {/* Sobre mim */}
          <Grid item xs={12} md={7}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
            >
              <Typography variant="h2" gutterBottom>
                Sobre mim
              </Typography>
              <Typography variant="body1" textAlign="justify">
                <p>
                  <strong>
                    Olá! Eu sou Thiago Cavaliére Moreira de Araújo
                  </strong>
                  , um <strong>desenvolvedor Full Stack</strong> apaixonado por
                  transformar ideias em soluções inovadoras através da
                  tecnologia. Com uma formação sólida em{" "}
                  <strong>Sistemas para Internet</strong>, sou especializado
                  tanto em <strong>front-end</strong> quanto em{" "}
                  <strong>back-end</strong>, dominando tecnologias como{" "}
                  <strong>Node.js</strong>, <strong>Express.js</strong>,{" "}
                  <strong>MongoDB</strong> e <strong>React</strong>.
                </p>

                <p>
                  Meu foco é criar experiências digitais envolventes e
                  eficientes, seja otimizando o servidor ou desenhando
                  interfaces fluídas e intuitivas para os usuários. Minha
                  jornada não é só sobre código: estou em constante evolução,
                  buscando sempre aprender novas técnicas e explorar as últimas
                  tendências da tecnologia.
                </p>

                <p>
                  Além da programação, sou dedicado à <strong>academia</strong>,
                  onde encontro equilíbrio entre a mente e o corpo, o que me dá
                  a energia e a disciplina para encarar os maiores desafios
                  profissionais.
                </p>

                <p>
                  Estou sempre em busca de novos <strong>desafios</strong>,
                  pronto para aplicar minhas habilidades e colaborar com equipes
                  inovadoras para criar soluções digitais impactantes. Se você
                  procura um desenvolvedor comprometido, criativo e pronto para
                  entregar resultados de qualidade, vamos conversar!
                </p>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Imagem com setas */}
      <Dialog open={isModalOpen} onClose={handleCloseModal} maxWidth="md">
        <DialogTitle>
          Visualizar Certificado
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleCloseModal}
            aria-label="close"
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button onClick={prevCertificate} style={arrowStyle}>
              &#8592;
            </button>
            <img
              src={certificateImages[currentIndex].src}
              alt={`Certificado ${certificateImages[currentIndex].id}`}
              style={{ width: "80%", height: "auto", margin: "0 20px" }}
            />

            <button onClick={nextCertificate} style={arrowStyle}>
              &#8594;
            </button>
          </div>
        </DialogContent>
        <DialogActions>
          <button onClick={handleCloseModal} style={{ padding: "8px 16px" }}>
            Fechar
          </button>
        </DialogActions>
      </Dialog>
    </StyledSobre>
  );
};

const arrowStyle = {
  background: "none",
  border: "none",
  fontSize: "24px",
  cursor: "pointer",
  padding: "10px",
};

export default Sobre;
