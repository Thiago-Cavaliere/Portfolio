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
                  Meu nome é <strong>Thiago Cavaliére Moreira de Araújo</strong>
                  , sou desenvolvedor Front-end movido por propósito, inovação e
                  resultados. Formado em <strong>Sistemas para Internet</strong>{" "}
                  e atualmente cursando pós-graduação em{" "}
                  <strong>Arquitetura de Software</strong>, construí uma base
                  técnica sólida com domínio de tecnologias como{" "}
                  <strong>JavaScript, React, Vite e Next.js</strong>.
                </p>
                <p>
                  Minha missão é transformar ideias em experiências digitais de{" "}
                  <strong>alta performance</strong>, com foco no usuário, na
                  escalabilidade e na excelência técnica. Atuo exclusivamente no{" "}
                  <strong>front-end</strong>, desenvolvendo interfaces modernas,
                  responsivas e acessíveis.
                </p>
                <p>
                  Estou me especializando em{" "}
                  <strong>Arquitetura de Software</strong> para aprofundar meus
                  conhecimentos no desenvolvimento de sistemas complexos, unindo
                  qualidade de código, estrutura arquitetural e performance.
                  Essa formação me prepara para liderar projetos com uma visão
                  estratégica e técnica.
                </p>
                <p>
                  Meu diferencial vai além do código: sou{" "}
                  <strong>disciplinado</strong> e <strong>resiliente</strong>.
                  Encontro na rotina de treinos na <strong>academia</strong> o
                  equilíbrio entre corpo e mente uma prática que reforça meu
                  foco, produtividade e clareza na resolução de problemas.
                </p>
                <p>
                  Se você busca um profissional <strong>comprometido</strong>,{" "}
                  <strong>versátil</strong> e{" "}
                  <strong>orientado a resultados reais</strong>, estou pronto
                  para gerar valor e fazer a diferença.{" "}
                  <strong>Vamos transformar desafios em conquistas?</strong>{" "}
                  Estou à disposição para conversar.
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
