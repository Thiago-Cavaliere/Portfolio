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
              <p>Sou <strong>Thiago Cavaliére Moreira de Araújo</strong>, um <strong>desenvolvedor Full Stack</strong> com uma sólida formação em <strong>Sistemas para Internet</strong> e uma profunda paixão por criar soluções tecnológicas inovadoras e eficientes. Ao longo da minha trajetória, adquiri experiência tanto no <strong>desenvolvimento front-end</strong> quanto <strong>back-end</strong>, dominando tecnologias como <strong>Node.js</strong>, <strong>Express.js</strong>, <strong>MongoDB</strong> e <strong>React</strong>.</p>

<p>Meu foco está em gerar <strong>impacto real</strong> através da criação de <strong>experiências digitais de alta performance</strong>, que atendem às necessidades dos usuários e superam as expectativas. Com um forte compromisso com a <strong>qualidade do código</strong> e o <strong>desempenho de sistemas</strong>, estou sempre em busca de novas abordagens para melhorar a experiência do usuário e a eficiência das soluções que desenvolvo.</p>

<p>Atualmente, estou ampliando meus conhecimentos com uma <strong>pós-graduação em Arquitetura de Software</strong>, o que me permite trabalhar com sistemas mais robustos e complexos, e me preparará ainda mais para desafios de alta responsabilidade. Meu objetivo é continuar a evoluir como profissional, aplicando as melhores práticas de desenvolvimento e arquitetura de software em todas as minhas atividades.</p>

<p>Além do meu trabalho como desenvolvedor, sou uma pessoa disciplinada e focada, com forte dedicação à <strong>academia</strong>, onde encontro o equilíbrio necessário para manter minha saúde física e mental. Esse equilíbrio se reflete diretamente no meu desempenho profissional, me permitindo sempre estar pronto para enfrentar novos desafios e contribuir com soluções de alto nível.</p>

<p>Se você está buscando um <strong>profissional comprometido</strong>, com uma abordagem orientada a resultados e uma forte capacidade de resolver problemas complexos, estou pronto para contribuir e agregar valor à sua equipe. Vamos conversar!</p>
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
