import { Container } from "@mui/material";

export const ContainerComp = ({ children }: any) => {
  return (
    <Container
      maxWidth="md"
      sx={{
        height: "70vh",
        boxShadow: "8px 8px 24px 0px rgba(66, 68, 90, 1)",
        marginTop: "10%",
        backgroundColor: "rgb(245,244,242)",
      }}
    >
      {children}
    </Container>
  );
};
