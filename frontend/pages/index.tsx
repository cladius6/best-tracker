import type { NextPage } from "next";
import { Box, Container, Paper, Typography } from "@mui/material";
import { Header } from "./components/Header";
import { UsernameForm } from "./components/UsernameForm";

const Home: NextPage = () => {
  return (
    <Container maxWidth="sm">
      <Header />
      <Paper
        sx={{
          padding: "16px",
          width: "100%",
          maxWidth: "350px",
          display: "block",
          margin: "0 auto",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          overflowY: "auto",
        }}
      >
        <Box sx={{ marginBottom: "2rem" }}>
          <Typography variant="h4" component="h1">
            Your Username
          </Typography>
        </Box>
        <UsernameForm />
      </Paper>
    </Container>
  );
};

export default Home;
